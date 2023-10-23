import { useState } from 'react'
import React from "react";
import { Outlet, Link } from 'react-router-dom';
import { HomeTwoTone, EditTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
import { Menu } from 'antd';

const Headers = () => {
    const [count, setCount] = useState(0)
    const [current, setCurrent] = useState('h');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
    return (
        <>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
         <Menu.Item key="h" icon= {<HomeTwoTone />}>
          <Link to="/">Home</Link>
         </Menu.Item>
         <Menu.Item key="r" icon= {<EditTwoTone />}>
           <Link to="/play">Register</Link>
         </Menu.Item>
         <Menu.Item key="l" icon= {<CheckCircleTwoTone />}>
           <Link to="/game">Login</Link>
         </Menu.Item>
        </Menu>
        <Outlet/>
       </>
    )
}

export default Headers;