import React, { useState, useEffect } from "react";
import { Comment, Avatar, Tooltip, Divider, Button } from "antd";
import Navbar from "../Navbar/Navbar";
import moment from "moment";
import ModalViewEmail from "../ModalViewEmail/ModalViewEmail";
import ModalSendEmail from "../ModalSendEmail/ModalSendEmail";
import { IEmail } from "../../interface/IEmail";
import { getEmail } from "../../utils/services";
import { ip } from "../../utils/api";
import { DeleteOutlined } from "@ant-design/icons";
import axios from "axios";

const Dashboard: React.FC = () => {
  const [listeEmail, setListeEmail] = useState<IEmail[]>([]);

  const deleteEmail = async (messageid: string) => {
    let data = new FormData();
    data.append("messageId", messageid);
    await axios.post(`${ip}/api/email/delete`, data);
    loadEmail();
  };

  const loadEmail = async () => {
    let email = getEmail();
    let request = await axios.get(`${ip}/api/email/get/${email}`);
    const data: IEmail[] = [];

    let counter = 0;
    if (request.data) {
      for (let e of request.data.reverse()) {
        counter++;
        data.push({
          id: counter,
          from: e.from,
          date: e.date,
          sujet: e.sujet,
          message: e.message,
          messageId: e.messageId
        });
      }
    }
    setListeEmail(data);
  };

  useEffect(() => {
    loadEmail();
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", marginTop: "1%" }}>
        <ModalSendEmail />
        <Button onClick={loadEmail} style={{ marginLeft: "1%" }} type="default">
          Rafraichir ses emails
        </Button>
      </div>

      <Divider />
      {listeEmail.length > 0 &&
        listeEmail.map(e => (
          <Comment
            key={e.id}
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
              ></ModalViewEmail>,
              <Tooltip title="Supprimer">
                <Button
                  style={{ marginLeft: "40%" }}
                  type="primary"
                  shape="circle"
                  icon={<DeleteOutlined />}
                  onClick={() => deleteEmail(e.messageId)}
                />
              </Tooltip>
            ]}
            content={<p>{e.sujet}</p>}
            datetime={
              <Tooltip title={moment(e.date).format("YYYY-MM-DD HH:mm:ss")}>
                <span>{moment(e.date).fromNow()}</span>
              </Tooltip>
            }
          />
        ))}
    </div>
  );
};

export default Dashboard;
