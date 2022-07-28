import React from "react";

const Contact = () => {
  return (
    <div>
      <h2>Kontakt</h2>
      <form>
        <p>Schreibt uns gerne eine E-Mail</p>
        <a href="mailto:info@panikknopf.com">info@panikknopf.com</a>
        <hr />
        <p>Ihr wollt uns buchen?</p>
        <a href="mailto:booking@panikknopf.com">booking@panikknopf.com</a>
        <hr />
        <p>Ihr habt technische Rückfragen zu unserem Auftritt bei Euch?</p>
        <a href="mailto:technik@panikknopf.com">technik@panikknopf.com</a>
        <p>Tel.: +49 151 165 68 374</p>
      </form>
    </div>
  );
};

export default Contact;
