import React, { useState } from "react";
import { Modal, Input, Button, message } from "antd";
import { getEmail } from "../../utils/services";
import axios from "axios";

const ModalSendEmail: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [sujet, setSujet] = useState("");
  const [destinataire, setDestinataire] = useState("");
  const [messageEmail, setMessageEmail] = useState("");

  const { TextArea } = Input;

  const onChangeSujet = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSujet(event.target.value);
  };
  const onChangeDestinataire = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDestinataire(event.target.value);
  };
  const onChangeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageEmail(event.target.value);
  };

  const sendEmail = async () => {
    let from = getEmail();
    let result = await axios.post("http://172.22.247.155/api/email/send", {
      emailFrom: from,
      emailDesti: destinataire,
      sujet: sujet,
      message: messageEmail
    });

    if (result.data.status === "200") {
      message.success("Votre email est envoyé !");
      setVisible(false);
    }
  };

  const onVisible = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  return (
    <div style={{ marginLeft: "1%" }}>
      <Button onClick={onVisible} style={{ marginTop: "1%" }} type="primary">
        Envoyer un email
      </Button>
      <Modal
        visible={visible}
        title="Envoyer un email"
        closable={false}
        footer={[
          <Button key="cancel" onClick={onVisible}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={sendEmail}>
            Envoyer
          </Button>
        ]}
      >
        <Input
          style={{ marginBottom: "1%" }}
          placeholder="Sujet"
          value={sujet}
          onChange={onChangeSujet}
        />
        <Input
          style={{ marginBottom: "1%" }}
          placeholder="Destinataire"
          value={destinataire}
          onChange={onChangeDestinataire}
        />
        <TextArea
          rows={4}
          placeholder="Message"
          value={messageEmail}
          onChange={onChangeMessage}
        />
      </Modal>
    </div>
  );
};

export default ModalSendEmail;
