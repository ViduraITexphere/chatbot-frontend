import React, { useState } from "react";
const AddModels = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    webUrl: "",
    about: "",
    location: "",
    products: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, such as sending the data to a server
    console.log(formData);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Company Details Form</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="companyName" style={styles.label}>
          Company Name:
        </label>
        <br />
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <br />
        <br />

        <label htmlFor="webUrl" style={styles.label}>
          Website URL:
        </label>
        <br />
        <input
          type="url"
          id="webUrl"
          name="webUrl"
          value={formData.webUrl}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <br />
        <br />

        <label htmlFor="about" style={styles.label}>
          About Description:
        </label>
        <br />
        <textarea
          id="about"
          name="about"
          value={formData.about}
          onChange={handleChange}
          style={styles.textarea}
          rows="4"
          cols="50"
          required
        ></textarea>
        <br />
        <br />

        <label htmlFor="location" style={styles.label}>
          Location:
        </label>
        <br />
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <br />
        <br />

        <label htmlFor="products" style={styles.label}>
          Products:
        </label>
        <br />
        <textarea
          id="products"
          name="products"
          value={formData.products}
          onChange={handleChange}
          style={styles.textarea}
          rows="4"
          cols="50"
          required
        ></textarea>
        <br />
        <br />

        <input type="submit" value="Submit" style={styles.submitButton} />
      </form>
    </div>
  );
};

export default AddModels;

const styles = {
  container: {
    margin: "auto",
    marginTop: "50px",
    width: "50%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  heading: {
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
  },
  input: {
    padding: "5px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "3px",
  },
  textarea: {
    padding: "5px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "3px",
  },
  submitButton: {
    padding: "8px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
  },
};
