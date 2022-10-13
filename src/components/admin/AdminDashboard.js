import React from 'react';

import Header from '../layout/Header';
import './AdminDashboard.css';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

function AdminDashboard() {
  const location = useLocation();

  return (
    <div>
      <Header>
        <h2 style={{ marginTop: '50px' }}>Welcome Back</h2>
      </Header>
    </div>
  );
}

export default AdminDashboard;
