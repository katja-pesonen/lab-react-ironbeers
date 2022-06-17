import React from 'react'
import Navbar from '../components/Navbar';
import { useState } from "react";

function NewBeer(props) {

    const [name, setName] = useState("");
    const [image_url, setImage] = useState("");
    const [tagline, setTagline] = useState("");
    const [contributed_by, setServings] = useState("");

    const handleNameInput = e => setName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handleTaglineInput = e => setTagline(e.target.value);
    const handleAuthorInput = e => setServings(e.target.value);

    const handleSubmit = (e) => {     
        e.preventDefault();
        props.addNewBeer({ name, image_url, tagline, contributed_by });
    }

  return (

    <div>
    <Navbar />
    <h2>Add New Beer</h2>

    <form onSubmit={handleSubmit}>
      <div></div>

      <label>Name</label>
      <input value={name} type="text" onChange={handleNameInput} />

      <label>Image</label>
      <input value={image_url} type="text" onChange={handleImageInput} />

      <label>Tagline</label>
      <input value={tagline} type="text" onChange={handleTaglineInput} />

      <label>Your Name:</label>
      <input value={contributed_by} type="text" onChange={handleAuthorInput} />

      <button type="submit">Create</button>
    </form>

    </div>

  );
}






export default NewBeer