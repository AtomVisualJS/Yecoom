import React, { Component } from "react";


class AddFormPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titre: "",
      price: "",
      description: "",
      user: "",
      adress: "",
      ville: "",
      img: null,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleAdressChange = this.handleAdressChange.bind(this);
    this.handleVilleChange = this.handleVilleChange.bind(this);
    this.handleImgChange = this.handleImgChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ titre: event.target.value });
  }

  handlePriceChange(event) {
    this.setState({ price: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handleUserChange(event) {
    this.setState({ user: event.target.value });
  }

  handleAdressChange(event) {
    this.setState({ adress: event.target.value });
  }

  handleVilleChange(event) {
    this.setState({ ville: event.target.value });
  }

  handleImgChange(event) {
    this.setState({ img: event.target.files[0] });
  }

  handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("titre", this.state.titre);
    formData.append("price", this.state.price);
    formData.append("description", this.state.description);
    formData.append("user", this.state.user);
    formData.append("adress", this.state.adress);
    formData.append("ville", this.state.ville);
    formData.append("img", this.state.img);

   fetch("http://localhost:5000/api/data", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              value={this.state.titre}
              onChange={this.handleNameChange}
            />
            <br />
            <input
              type="text"
              value={this.state.price}
              onChange={this.handlePriceChange}
            />
            <br />
            <input
              type="text"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
            <br />
            <input
              type="text"
              value={this.state.user}
              onChange={this.handleUserChange}
            />
            <br />
            <input
              type="text"
              value={this.state.adress}
              onChange={this.handleAdressChange}
            />
            <br />
            <input
              type="text"
              value={this.state.ville}
              onChange={this.handleVilleChange}
            />
            <br />
           <input type="file" onChange={this.handleImgChange} />
            <br />
            <button type="submit">Submit</button>
          </label>
        </form>
      </div>
    );
  }
}

export default AddFormPost;
