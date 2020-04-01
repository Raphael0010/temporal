import React, { useState, useEffect } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { Modal, Button, Input } from "antd";
import "./Login.css";
import { logged, isLogged, putEmail } from "../../utils/services";

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [isConnected, setIsConnect] = useState(false);

  const onSetEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const connect = () => {
    putEmail(email);
    logged();
    history.replace("/dashboard");
  };

  useEffect(() => {
    if (isLogged()) {
      setIsConnect(true);
    }
  }, []);

  return (
    <div className="bg-modal">
      {isConnected && <Redirect to="/dashboard" />}
      <Modal
        footer={[
          <Button key="submit" type="primary" onClick={connect}>
            Vérifier les mails
          </Button>
        ]}
        title="
        Saisissez le mail jetable de votre choix"
        visible={true}
        closable={false}
      >
        <Input
          required
          placeholder="@temporal.com"
          value={email}
          onPressEnter={connect}
          onChange={onSetEmail}
        />
      </Modal>
    </div>
  );
};

export default Login;
