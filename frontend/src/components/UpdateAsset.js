// UpdateAsset.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UpdateAsset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      category: '',
      status: '',
      image_url: '',
      user_id: '',
      message: '',
    };

    // Add code to fetch the asset's current data and populate the state
    // You may want to use a GET request to fetch the asset's data and update the state.

    this.handleInputChange = (e) => {
      this.setState({ [e.target.name]: e.target.value });
    };

    this.handleSubmit = (e) => {
      e.preventDefault();
      const updatedAssetData = {
        name: this.state.name,
        description: this.state.description,
        category: this.state.category,
        status: this.state.status,
        image_url: this.state.image_url,
        user_id: this.state.user_id,
      };

      // Add code to send a PUT request to update the asset data
      // Include the asset's ID in the URL to specify which asset to update.

      // Handle the response from the server and set the message state accordingly.
    };
  }

  render() {
    return (
      <div>
        <h1>Update Asset</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Asset Name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={this.state.category}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="status"
            placeholder="Status"
            value={this.state.status}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="image_url"
            placeholder="Image URL"
            value={this.state.image_url}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="user_id"
            placeholder="User ID"
            value={this.state.user_id}
            onChange={this.handleInputChange}
          />
          <button type="submit">Update Asset</button>
          {this.state.message && <p>{this.state.message}</p>}
        </form>
        <p>
          <Link to="/">Go back to the home page</Link>
        </p>
      </div>
    );
  }
}

export default UpdateAsset;