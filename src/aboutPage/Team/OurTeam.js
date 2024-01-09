import React from "react";
import "./OurTeam.css";
import PersonOfTeam from "./PersonOfTeam";
import firstPerson from "../../images/about/team-01-270x236.jpg";
import secondPerson from "../../images/about/team-02-270x236.jpg";
import thirdPerson from "../../images/about/team-03-270x236.jpg";
import fourthPerson from "../../images/about/team-04-270x236.jpg";
import { FramerWrapper } from "../../utils/FramerWrapper";

const OurTeam = () => {
  return (
    <section className="containerOur our-team">
      <h2>Our team</h2>
      <div className="row d-flex  justify-content-center align-items-center align-items-sm-between justify-content-sm-between">
        <div className="col-lg-3 col-sm-6 col-12 d-flex justify-content-center align-items-center">
          <div>
            <FramerWrapper
              hidden={{ opacity: 0, x: 100 }}
              visible={{ opacity: 1, x: 0 }}
              duration={1}
              fullWidth
              overflowHidden={false}
              ease="backInOut"
            >
              <PersonOfTeam
                image={firstPerson}
                heading="Richard Peterson"
                paragraph="Head Chef"
              />
            </FramerWrapper>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-12 d-flex justify-content-center align-items-center">
          <div>
            {" "}
            <FramerWrapper
              hidden={{ opacity: 0, x: 100 }}
              visible={{ opacity: 1, x: 0 }}
              duration={1}
              fullWidth
              overflowHidden={false}
              ease="backInOut"
            >
              <PersonOfTeam
                image={secondPerson}
                heading="Amelia Lee"
                paragraph="Manager"
              />
            </FramerWrapper>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-12 d-flex justify-content-center align-items-center">
          <div>
            <FramerWrapper
              hidden={{ opacity: 0, x: 100 }}
              visible={{ opacity: 1, x: 0 }}
              duration={1}
              fullWidth
              overflowHidden={false}
              ease="backInOut"
            >
              <PersonOfTeam
                image={thirdPerson}
                heading="Sam Peterson"
                paragraph="Head Baker"
              />
            </FramerWrapper>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 col-12 d-flex justify-content-center align-items-center">
          <div>
            <FramerWrapper
              hidden={{ opacity: 0, x: 100 }}
              visible={{ opacity: 1, x: 0 }}
              duration={1}
              fullWidth
              overflowHidden={false}
              ease="backInOut"
            >
              <PersonOfTeam
                image={fourthPerson}
                heading="Jane Smith"
                paragraph="Pizza Chef"
              />
            </FramerWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurTeam;
