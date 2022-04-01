import { Menu, Dropdown, Button, Space } from 'antd';
import 'antd/dist/antd';
import React from 'react';

export const DropDowns = () => {


const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

return (
  <Space direction="vertical">
    
    <Space wrap>
      <Dropdown overlay={menu} placement="topRight">
        <Button>topRight</Button>
      </Dropdown>
    </Space>
  </Space>
);

}