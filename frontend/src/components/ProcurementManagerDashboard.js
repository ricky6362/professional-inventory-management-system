import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ApproveAssetRequest from './ApproveAssetRequest';
import AddData from './AddData';
import AllocateAsset from './AllocateAsset'; 
import AddAsset from './AddAsset';

function ProcurementDashboard() {
  return (
    <div>
      <h1>Procurement Dashboard</h1>
      <nav>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="approve-asset-request" className="nav-link">
              Approve Asset Request
            </Link>
          </li>
          <li className="nav-item">
            <Link to="add-data" className="nav-link">
              Add Data
            </Link>
          </li>
          <li className="nav-item">
            <Link to="allocate-asset" className="nav-link">
              Allocate Asset
            </Link>
          </li>
          <li className="nav-item">
            <Link to="add-asset" className="nav-link">
              Add Asset
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="add-data" element={<AddData />} />
        <Route path="approve-asset-request" element={<ApproveAssetRequest />} />
        <Route path="allocate-asset" element={<AllocateAsset />} />
        <Route path="add-asset" element={<AddAsset />} /> 
      </Routes>
    </div>
  );
}

export default ProcurementDashboard;