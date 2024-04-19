// High Score I 🕹️
// Codédex

import React, { useState } from "react";

export default function HighScore() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="arcade-container">
      <form className="arcade-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name<br/><br />(3 characters max)</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          required
          className="arcade-input"
        />
        <br />
        <button type="submit" className="arcade-button">Submit</button>
      </form>
      <h3>Top Score: {name} </h3>
    </div>
  );
}
