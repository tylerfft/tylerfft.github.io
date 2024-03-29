import React from "react";
import { AppstoreOutlined } from "@ant-design/icons";

import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Magic Puzzel", "magic_puzzel", <AppstoreOutlined />, null),
  getItem("Greedy Snake", "greedy_snake", <AppstoreOutlined />, null),
  getItem(
    "Search Github Users",
    "search_github_users",
    <AppstoreOutlined />,
    null
  ),
  getItem("Money Record", "monery_record", <AppstoreOutlined />, null),
  getItem("Finance Dashboard", "finance_dashboard", <AppstoreOutlined />, null),
  getItem("blog", "blog", <AppstoreOutlined />, [getItem("TS", "blog/ts")]),
];

export default function Main() {
  const navigate = useNavigate();

  function OnClick(e) {
    navigate(e.key, {});
  }

  return (
    <Menu
      onClick={OnClick}
      style={{
        width: "100%",
      }}
      mode="vertical"
      items={items}
    />
  );
}
