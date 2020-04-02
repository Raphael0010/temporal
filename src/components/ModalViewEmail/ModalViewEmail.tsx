import React, { useState } from "react";
import { Modal, Input, Button } from "antd";
import moment from "moment";

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
        <h3>Sujet : {sujet}</h3>
        <p>{moment(date).format("YYYY-MM-DD HH:mm:ss")}</p>
        <Input disabled value={from} />
        <p style={{ paddingTop: "3%" }}>{message}</p>
      </Modal>
    </div>
  );
};

export default ModalViewEmail;
