import React, { useState } from 'react';
import { Menu, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { SocialIcon } from 'react-social-icons';

const menuItems = [
  {
    label: 'Home',
    key: 'home',
    path: '/',
    children: [],
  },
  {
    label: 'Pages',
    key: 'pages',
    children: [
      { label: 'Disease & Target', key: 'pages:1', path: '/disease-target' },
      { label: 'Medicine', key: 'pages:2', path: '/medicine' },
    ],
  },
  {
    label: 'Pipeline',
    key: 'pipeline',
    children: [
      { label: 'Hit Discovery', key: 'pipeline:1', path: '/hit-discovery' },
      { label: 'Optimization', key: 'pipeline:2', path: '/optimization' },
    ],
  },
  {
    label: 'Formulation',
    key: 'formulation',
    children: [
      { label: 'Tablet', key: 'formulation:1', path: '/tablet' },
      { label: 'TBD', key: 'formulation:2', path: '/tbd' },
    ],
  },
  {
    label: 'Society',
    key: 'society',
    children: [
      { label: 'Society Impact', key: 'society:1', path: '/society-impact' },
    ],
  },
  {
    label: 'Future',
    key: 'future',
    children: [
      { label: 'Future development', key: 'future:1', path: '/future-development' },
    ],
  },
];

const Header = () => {
  const [current, setCurrent] = useState('home');

  const handleClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const renderMenu = (children) => (
    <Menu>
      {children.map((child) => (
        <Menu.Item key={child.key}>
          <Link to={child.path}>{child.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <header>
      <div className="bg-regal-blue border-b border-gray-200 px-4 py-2">
        <div className="grid grid-cols-3 items-center mx-auto max-w-screen-xl">
          <div className="text-left" />
          <div className="text-center">
            <h1 className="text-xl font-bold text-white">Leading the Fight Against Alzheimer's</h1>
          </div>
          <div className="text-right flex justify-end gap-2 items-center">
            <p className="text-sm text-white">Follow us</p>
            <div className="flex items-end space-y-1 gap-1">
              <SocialIcon url="https://www.facebook.com" style={{ height: 25, width: 25 }} bgColor="rgb(2 132 199)" />
              <SocialIcon url="https://www.instagram.com" style={{ height: 25, width: 25 }} bgColor="rgb(2 132 199)" />
              <SocialIcon url="https://www.linkedin.com" style={{ height: 25, width: 25 }} bgColor="rgb(2 132 199)" />
              <SocialIcon url="https://www.youtube.com" style={{ height: 25, width: 25 }} bgColor="rgb(2 132 199)" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200 px-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img src={logo} className="h-24 py-1" alt="Company Logo" />
          </a>
          <div className="flex-1 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Cognicare Innovation</h1>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">contact@mycompany.com</p>
            <p className="text-sm text-gray-500">1234 Street Name, City, Country</p>
          </div>
        </div>
      </div>

      <nav className="bg-regal-blue border-b border-gray-200 px-4">
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className='bg-regal-blue'>
          {menuItems.map((item) => (
            <Menu.Item key={item.key}>
              {item.children && item.children.length > 0 ? (
                <Dropdown overlay={renderMenu(item.children)}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space className='text-white'>
                      {item.label}
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              ) : (
                <a onClick={(e) => e.preventDefault()}>
                    <Space className='text-white'>
                        <Link to={item.path} className='text-white'>
                            {item.label}
                        </Link>
                    </Space>
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
