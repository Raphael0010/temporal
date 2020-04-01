import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  PoweroffOutlined,
  UserOutlined
} from "@ant-design/icons";
import { logout, getEmail } from "../../utils/services";

const Navbar: React.FC = () => {
  let history = useHistory();
  const [username, setUsername] = useState("N/A");
  const deconnexion = () => {
    logout();
    history.replace("/");
  };

  useEffect(() => {
    let user = getEmail();
    if (user) {
      setUsername(user);
    }
  }, [username]);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link to="/dashboard">
            <HomeOutlined style={{ marginRight: "5px" }} />
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item style={{ float: "right" }} onClick={deconnexion}>
          <PoweroffOutlined style={{ marginRight: "5px" }} />
          Déconnexion
        </Menu.Item>
        <Menu.Item style={{ float: "right" }}>
          <UserOutlined style={{ marginRight: "5px" }} />
          {username}@temporal.com
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
