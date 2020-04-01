import React, { useState, useEffect } from "react";
import { Comment, Avatar, Tooltip, Divider } from "antd";
import Navbar from "../Navbar/Navbar";
import moment from "moment";
import ModalViewEmail from "../ModalViewEmail/ModalViewEmail";
import ModalSendEmail from "../ModalSendEmail/ModalSendEmail";
import { IEmail } from "../../interface/IEmail";

const Dashboard: React.FC = () => {
  const [listeEmail, setListeEmail] = useState<IEmail[]>([]);

  const loadEmail = async () => {
    //
  };

  useEffect(() => {
    loadEmail();
  }, []);

  return (
    <div>
      <Navbar />
      <ModalSendEmail />
      <Divider />
      {listeEmail &&
        listeEmail.map(
          e =>
            (
              <Comment
                key={e.date}
                author={e.from}
                style={{ marginLeft: "1%" }}
                avatar={
                  <Avatar
                    src="https://cdn3.iconfinder.com/data/icons/peelicons-vol-1/50/Mail-512.png"
                    alt="Expéditeur"
                  />
                }
                actions={[
                  <ModalViewEmail
                    sujet={e.sujet}
                    from={e.from}
                    message={e.message}
                    date={e.date}
                  ></ModalViewEmail>
                ]}
                content={<p>{e.sujet}</p>}
                datetime={
                  <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                    <span>{moment().fromNow()}</span>
                  </Tooltip>
                }
              />
            ) && <Divider />
        )}
    </div>
  );
};

export default Dashboard;
