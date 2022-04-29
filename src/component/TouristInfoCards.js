import React from "react";
import Rome from "./assert/Rome.jpg";

const TouristInfoCards = () => {
  return (
    <section id="latest-products">
      <ul id="place">
        <li id="places">
          <img src={Rome} alt="" />

          <div class="description">
            <h1>Rome</h1>
            <p>
              a handy mix of hunting ruins,awe
              <br />
              inspiring and vibrant street life <br />
              italy hot blooded capital is one of the
              <br />
              most romatic and charismatic citis
            </p>
            <a href="peoplemakeglasgow.com" class="btn">
              More Information
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default TouristInfoCards;
