import React from "react";
export default function Water(props) {
  return (
    <article>
      <h2>Water Usage</h2>
      <p>
        Bequia is an island that is completely dependant on rain water. Please
        be conscious about your water consumption. Not only to ensure you don’t
        run out of water, but also it’s just the right thing to do for the
        planet.
      </p>
      <p>
        Below we have given you some guidelines as to what would be appropriate
        use cases during you stay.
      </p>
      <ul>
        <li>Showers - 5 mins or less </li>
        <li>
          Sinks - only have tap running when using the water i.e. turn off
          durning brushing your teeth
        </li>
        <li> Toilets - only flush when necessary</li>
        <li>
          {" "}
          Dish Washing - please use the wash basin instead of constant running
          water.
        </li>
      </ul>
    </article>
  );
}
