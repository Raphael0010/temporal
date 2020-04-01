import threading
import os
import subprocess
import sys
import time
from flask import Flask, json, jsonify, request
from flask_cors import CORS

api = Flask(__name__)
CORS(api)


def apiRunThread():
    api.run(host='127.0.0.1', port=8888)


@api.route('/api/email/get/<email>', methods=['GET'])
def getEmail(email):
    order = "doveadm fetch -u usermail 'text' TO {}@temporal.com".format(email)
    cmd = subprocess.Popen(order, shell=True, stdout=subprocess.PIPE,
                           stderr=subprocess.PIPE, stdin=subprocess.PIPE)
    return cmd


@api.route('/api/email/send', methods=['POST'])
def sendEmail():
    try:
        emailFrom = request.form.get('emailFrom')
        emailDesti = request.form.get('emailDesti')
        sujet = request.form.get('sujet')
        message = request.form.get('message')
    except:
        return "Missings parameters"

    order = 'echo "{}" | mail -s "{}" {}@temporal.com -a "From: {}@temporal.com"'.format(
        message, sujet, emailDesti, emailFrom)

    cmd = subprocess.Popen(order, shell=True, stdout=subprocess.PIPE,
                           stderr=subprocess.PIPE, stdin=subprocess.PIPE)

    return str(cmd)


if __name__ == "__main__":
    apiRun = threading.Thread(target=apiRunThread)
    apiRun.start()
