import React from "react";
import "./OurTeam.css";
import PersonOfTeam from "./PersonOfTeam";
import firstPerson from "../../images/about/team-01-270x236.jpg";
import secondPerson from "../../images/about/team-02-270x236.jpg";
import thirdPerson from "../../images/about/team-03-270x236.jpg";
import fourthPerson from "../../images/about/team-04-270x236.jpg";

const OurTeam = () => {
  return (
    <section className="containerOur our-team">
      <h2>Our team</h2>
      <div className="row">
        <PersonOfTeam
          image={firstPerson}
          heading="Richard Peterson"
          paragraph="Head Chef"
        />
        <PersonOfTeam
          image={secondPerson}
          heading="Amelia Lee"
          paragraph="Manager"
        />
        <PersonOfTeam
          image={thirdPerson}
          heading="Sam Peterson"
          paragraph="Head Baker"
        />
        <PersonOfTeam
          image={fourthPerson}
          heading="Jane Smith"
          paragraph="Pizza Chef"
        />
      </div>
    </section>
  );
};
export default OurTeam;
