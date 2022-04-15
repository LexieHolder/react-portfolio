import React from 'react';
import coverImage from "../../assets/portfolio-image.jpg";

function About() {
  return (
    <section>
      <h1 id="about">About Lexie</h1>
      <img src={coverImage} className="my-2" style={{ width: "40%" }} alt="cover" />
    </section>
  );
}

export default About;