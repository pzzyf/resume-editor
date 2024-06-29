import React from "react"

import {
  FileImageOutlined,
  BorderOutlined,
  FileTextOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
} from "@ant-design/icons";

import { Dropdown } from "antd";

const Head = () => {

  return (
    <div className="flex justify-between items-center  mx-5 h-10 ">
      <div className="flex justify-between items-center">
        <FileImageOutlined />
        <BorderOutlined className="mx-5" />
        <FileTextOutlined />
      </div>
      <div className="flex justify-between items-center">
        <RotateLeftOutlined />
        <div className="mx-2"></div>
        <RotateRightOutlined />
        <div>1</div>
        <div className="mx-5">1</div>
        <div>1</div>
        <div className="ml-5">1</div>
      </div>
    </div>
  );
};

export default Head
