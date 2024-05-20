import React from 'react';
import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter(i => i);

  const formatBreadcrumb = (str) => {
    return str
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(' ');
  };

  const breadcrumbItems = pathSnippets.map((snippet, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{formatBreadcrumb(snippet)}</Link>
      </Breadcrumb.Item>
    );
  });

  return (
    <Breadcrumb className='bg-regal-purple flex justify-center pb-2'>
      <Breadcrumb.Item key="home">
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
      {breadcrumbItems}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
