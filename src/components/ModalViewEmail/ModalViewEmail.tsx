import React, { useState } from "react";
import { Modal, Input, Button } from "antd";

interface Props {
  sujet: string;
  from: string;
  message: string;
  date: string;
}
const ModalViewEmail: React.FC<Props> = ({ sujet, from, message, date }) => {
  const [visible, setVisible] = useState(false);
  const onVisible = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };
  return (
    <div>
      <Button onClick={onVisible}>Consulter l'email</Button>
      <Modal
        visible={visible}
        closable={false}
        footer={[
          <Button key="back" onClick={onVisible}>
            Lu
          </Button>
        ]}
      >
        <p>{sujet}</p>
        <p>{date}</p>
        <Input disabled value={from} />
        <p>{message}</p>
      </Modal>
    </div>
  );
};

export default ModalViewEmail;
