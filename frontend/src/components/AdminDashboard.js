import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AddAsset from './AddAsset';
import UpdateAsset from './UpdateAsset';
import DeleteAsset from './DeleteAsset';
import AllocateAsset from './AllocateAsset';
import ManagerCompleteRequest from './ProcurementManagerCompletedRequest';
import AdminDataManagement from './AdminDataManagement'; 
import ViewUserRequests from './ViewUserRequest'

function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="add-asset" className="nav-link">Add Asset</Link>
          </li>
          <li className="nav-item">
            <Link to="delete-asset" className="nav-link">Delete Asset</Link>
          </li>
          <li className="nav-item">
            <Link to="update-asset" className="nav-link">Update Asset</Link>
          </li>
          <li className="nav-item">
            <Link to="allocate-asset" className="nav-link">Allocate Asset</Link>
          </li>
          <li className="nav-item">
            <Link to="pending-requests" className="nav-link">View Pending Requests</Link>
          </li>
          <li className="nav-item">
            <Link to="completed-requests" className="nav-link">View Completed Requests</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="add-asset" element={<AddAsset />} />
        <Route
          path="update-asset/:assetId"
          element={<UpdateAsset />}
        />
        <Route
          path="delete-asset/:assetId"
          element={<DeleteAsset />}
        />
        <Route path="allocate-asset" element={<AllocateAsset />} />
        <Route path="pending-requests" element={<ViewUserRequests />} />
        <Route path="completed-requests" element={<ManagerCompleteRequest />} />
        <Route path="data-management" element={<AdminDataManagement />} /> 
      </Routes>
    </div>
  );
}

export default AdminDashboard;