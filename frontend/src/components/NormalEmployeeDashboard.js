import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import RequestAsset from './AssetRequest';
import ActiveRequests from './ActiveRequests';
import UserCompletedRequests from './UserCompletedRequests';

function NormalEmployeeDashboard() {
  return (
    <div>
      <h1>Normal Employee Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/request-asset">Request Asset</Link>
          </li>
          <li>
            <Link to="/active-requests">Active Requests</Link>
          </li>
          <li>
            <Link to="/completed-requests">Completed Requests</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/request-asset" element={<RequestAsset />} />
        <Route path="/active-requests" element={<ActiveRequests />} />
        <Route path="/completed-requests" element={<UserCompletedRequests />} />
      </Routes>
    </div>
  );
}

export default NormalEmployeeDashboard;
