import React, { useState } from "react";
import { Modal, Input, Button, message } from "antd";
import { getEmail } from "../../utils/services";
import { ip } from "../../utils/api";
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
    let data = new FormData();

    if (from) {
      data.append("emailFrom", from);
    }
    data.append("emailDesti", destinataire);
    data.append("sujet", sujet);
    data.append("message", messageEmail);

    let result = await axios.post(`${ip}/api/email/send`, data);

    if (result.data === "ok") {
      message.success("Votre email est envoyé !");
      setSujet("");
      setDestinataire("");
      setMessageEmail("");
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
      <Button onClick={onVisible} type="primary">
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
