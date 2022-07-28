import React from "react";
import AmAnfangGeiler from "../assets/AmAnfangGeiler.png";
import Gothic from "../assets/Gothic.jpeg";
import Frei from "../assets/Frei.png";
import Julia from "../assets/Julia.png";
import Krieg from "../assets/Krieg.png";
import Scharlatan from "../assets/Scharlatan.png";
import SchlampeLeben from "../assets/SchlampeLeben.jpeg";
import WildeRosen from "../assets/WildeRosen.png";

const Discography = () => {
  return (
    <div>
      <h2>Diskografie</h2>
      <h3>Alben</h3>
      <a href="https://open.spotify.com/album/4lBhiGFjixn8GszqKd5a27?si=xz4SdaTvQ1ieimwVz31gZg">
        <img
          src={AmAnfangGeiler}
          alt="Am Anfang geiler als am Ende gedacht"
          width="200"
          height="200"
        />
        <h4>Am Anfang geiler als am Ende gedacht</h4>
        <p>Release: 24. November 2019</p>
        <ol>
          <li>Wir Sind Der Knopf</li>
          <li>Gothic</li>
          <li>Feuer</li>
          <li>Sex Ist Eine Macht</li>
          <li>Sagen Aus Mädchen</li>
          <li>Königin der Maden</li>
          <li>Bock Auf Sex</li>
          <li>Leichenbraut</li>
          <li>Hoffnung Auf Schmerz</li>
        </ol>
      </a>
      <a href="https://open.spotify.com/album/2a2RvizACtUOL5eIpjDprP?si=u5SxwdAQSr2EPjgnuFqE5g">
        <img
          src={SchlampeLeben}
          alt="Schlampe Leben"
          width="200"
          height="200"
        />
        <h4>Schlampe Leben</h4>
        <p>Release: 29. März 2022</p>
        <ol>
          <li>Intro(Schlampe Leben)</li>
          <li>Die Schlampe Leben</li>
          <li>Ich fühle nichts mehr</li>
          <li>Julia</li>
          <li>Land der Gefahr</li>
          <li>Piraten der Theke</li>
          <li>Meine Welt brennt</li>
          <li>Too Long Didn't Read</li>
          <li>Wir sind alle gleich</li>
          <li>Verloren in mir</li>
          <li>Scharlatan</li>
          <li>Amazing Grace</li>
          <li>Krieg kennt keine Freunde</li>
        </ol>
      </a>
      <hr />
      <h3>EPs</h3>
      <a href="https://open.spotify.com/album/1dzVy5VGq7aXd36RllSRTt?si=eWLVgNF7SXyHov6tTUspRA">
        <img src={Gothic} alt="Gothic" width="200" height="200" />
        <h4>Gothic</h4>
        <p>Release: 17. Dezember 2018</p>
        <ol>
          <li>Gothic</li>
          <li>Alice im Ständerland</li>
          <li>Leichenbraut</li>
          <li>Wir Sind Der Knopf</li>
        </ol>
      </a>
      <a href="https://open.spotify.com/album/602O9sA6msrj8E4A3LArjQ?si=bCenosf7SaaKkoaExgio0A">
        <img src={Julia} alt="Julia" width="200" height="200" />
        <h4>Julia</h4>
        <p>Release: 7. Dezember 2021</p>
        <ol>
          <li>Die Bestellung(feat. Nino Röhler)</li>
          <li>Julia</li>
        </ol>
      </a>
      <hr />
      <h3>Singles</h3>
      <a href="https://open.spotify.com/album/1EdixsaFMiOJavXLquHGvp?si=XLUm82GPTnKfqO1xit2H_w">
        <img src={Frei} alt="Frei" width="200" height="200" />
        <h4>Frei</h4>
        <p>Release: 20. Oktober 2019</p>
      </a>
      <a href="https://open.spotify.com/album/7wXH2OZG0DjW3m1CeLikDk?si=B04_wVNtTf265E85e-eVcQ">
        <img src={Scharlatan} alt="Scharlatan" width="200" height="200" />
        <h4>Scharlatan</h4>
        <p>Release: 21. Januar 2022</p>
      </a>
      <a href="https://open.spotify.com/album/4T8b6CcNXYH3EoX0HkOJ7J?si=_-GB6kvzQo2RXvI3kncdKQ">
        <img
          src={Krieg}
          alt="Krieg kennt keine Freunde"
          width="200"
          height="200"
        />
        <h4>Krieg kennt keine Freunde</h4>
        <p>Release: 14. März 2022</p>
      </a>
      <a href="https://open.spotify.com/album/6Y6OPBUJwqd70zDC1EjYyk?si=tl0vtGyyRWegSe09aZ3-Nw">
        <img src={WildeRosen} alt="Wilde Rosen" width="200" height="200" />
        <h4>Wilde Rosen</h4>
        <p>Release: 21. Juli 2022</p>
      </a>
    </div>
  );
};

export default Discography;
