import React from "react";
const axios = require("axios");

class ReactUploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      name: "",
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("myImage", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("http://localhost:5000/upload", formData, config)
      .then((response) => {
        alert("The file is successfully uploaded");
      })
      .catch((error) => {});
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          type="text"
          name="name"
          onChange={this.onNameChange}
          placeholder="Enter the name of the image"
        />
        <br />
        <input type="file" name="myImage" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
    );
  }
}

export default ReactUploadImage;
