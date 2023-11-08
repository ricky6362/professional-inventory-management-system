import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ActiveRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [], // Initialize with an empty array of requests
    };
  }

  // Function to delete a request
  handleDeleteRequest = (requestId) => {
    // You can implement the logic to delete a request by its ID here
    // For example:
    const updatedRequests = this.state.requests.filter(request => request.id !== requestId);
    this.setState({ requests: updatedRequests });
  };

  // Function to edit a request
  handleEditRequest = (requestId) => {
    // You can implement the logic to edit a request by its ID here
    // For example, you can open a modal or navigate to an edit page.
  };

  render() {
    return (
      <div>
        <h1>Active Requests</h1>
        <table>
          <thead>
            <tr>
              <th>Asset Name</th>
              <th>Reason</th>
              <th>Quantity</th>
              <th>Urgency</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.requests.map((request) => (
              <tr key={request.id}>
                <td>{request.name}</td>
                <td>{request.reason}</td>
                <td>{request.quantity}</td>
                <td>{request.urgency}</td>
                <td>
                  <button onClick={() => this.handleEditRequest(request.id)}>Edit</button>
                  <button onClick={() => this.handleDeleteRequest(request.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ActiveRequests;
