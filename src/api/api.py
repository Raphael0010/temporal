import threading
import os
import subprocess
import sys
import json
import time
from flask import Flask, json, jsonify, request
from flask_cors import CORS

api = Flask(__name__)
CORS(api)


def apiRunThread():
    api.run(host='127.0.0.1', port=8888)
    # api.run(host='172.22.247.155', port=8888)


@api.route('/api/email/get/<email>', methods=['GET'])
def getEmail(email):
    order = "doveadm fetch -u usermail 'text' TO {}@temporal.com".format(
        email)
    cmd = subprocess.Popen(order, shell=True, stdout=subprocess.PIPE,
                           stderr=subprocess.PIPE, stdin=subprocess.PIPE)

    data = "["
    for x in cmd.stdout.split("text:"):
        # si il trouve un sujet dans le bloc
        if(x.find("Subject:") != -1):
            # parse du sujet
            sujet = x[x.find("Subject:"):x.find("From:")]
            sujet = sujet.replace('Subject: ', '')

            # parse de la date
            date = x[x.find("Date:"):x.find("Date:") + 37]
            date = date.replace('Date: ', '')

            # parse de la from
            fromEmail = x[x.find("From:"):x.find("To: <")]
            fromEmail = fromEmail.replace('From: ', '')

            # parse du message
            message = x[x.find("Date:") + 46:]
            message = message.replace(
                "Vous avez du courrier dans /var/mail/usermail", "")

            ligne = {
                "from": fromEmail.rstrip(),
                "date": date.rstrip(),
                "sujet": sujet.rstrip(),
                "message": message.rstrip()
            }

            if(data == "["):
                data = data + json.dumps(ligne)
            else:
                data = data + "," + json.dumps(ligne)
        else:
            continue

    return data + "]"


@api.route('/api/email/send', methods=['POST'])
def sendEmail():
    try:
        emailFrom = request.form.get('emailFrom')
        emailDesti = request.form.get('emailDesti')
        sujet = request.form.get('sujet')
        message = request.form.get('message')
    except:
        return "Missings parameters"

    order = 'echo "{}" | mail -s "{}" {} -a "From: {}@temporal.com"'.format(
        message, sujet, emailDesti, emailFrom)

    cmd = subprocess.Popen(order, shell=True, stdout=subprocess.PIPE,
                           stderr=subprocess.PIPE, stdin=subprocess.PIPE)

    return "ok"


if __name__ == "__main__":
    apiRun = threading.Thread(target=apiRunThread)
    apiRun.start()
