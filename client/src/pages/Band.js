import React from "react";
import Jonas from "../assets/Jonas.png";
import Lea from "../assets/Lea.jpeg";

const Band = () => {
  return (
    <div>
      <h2>Band</h2>
      <img src={Jonas} alt="Nero Knopf" width="200" />
      <h3>Nero Knopf</h3>
      <h4>Vocals</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        obcaecati minima nesciunt commodi iste similique architecto veritatis
        sunt, distinctio fuga doloremque, quas illum temporibus beatae molestias
        soluta harum cupiditate recusandae?
      </p>
      <hr />
      <img src={Lea} alt="Lea Knopf" width="200" />
      <h3>Lea Knopf</h3>
      <h4>Gitarre</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id itaque
        earum eius nostrum officiis. Exercitationem explicabo reprehenderit
        eligendi expedita quibusdam error quasi officiis ad adipisci? Expedita
        placeat nisi in odio.
      </p>
    </div>
  );
};

export default Band;
