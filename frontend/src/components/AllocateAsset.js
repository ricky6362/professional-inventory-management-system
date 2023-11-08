import React, { Component } from 'react';

class AllocateAsset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asset_id: '',
      user_id: '',
      allocation_date: '',
      deallocation_date: '',
      message: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { asset_id, user_id, allocation_date, deallocation_date } = this.state;
    const allocationDate = new Date(allocation_date);
    const deallocationDate = new Date(deallocation_date);

    try {
      const response = await fetch(`http://127.0.0.1:5000/allocate_asset`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify({
          asset_id,
          user_id,
          allocation_date: allocationDate,
          deallocation_date: deallocationDate,
        }),
      });

      if (response.status === 201) {
        this.setState({ message: 'Asset allocated to employee successfully' });
      } else {
        const data = await response.json();
        this.setState({ message: data.message });
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  render() {
    return (
      <div>
        <h1>Allocate Asset</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="asset_id"
            placeholder="Asset ID"
            value={this.state.asset_id}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="user_id"
            placeholder="User ID"
            value={this.state.user_id}
            onChange={this.handleInputChange}
          />
          <input
            type="datetime-local"
            name="allocation_date"
            placeholder="Allocation Date"
            value={this.state.allocation_date}
            onChange={this.handleInputChange}
          />
          <input
            type="datetime-local"
            name="deallocation_date"
            placeholder="Deallocation Date"
            value={this.state.deallocation_date}
            onChange={this.handleInputChange}
          />
          <button type="submit">Allocate Asset</button>
          {this.state.message && <p>{this.state.message}</p>}
        </form>
      </div>
    );
  }
}

export default AllocateAsset;