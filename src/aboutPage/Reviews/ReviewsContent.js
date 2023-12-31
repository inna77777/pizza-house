import React, { useState, useEffect } from "react";
import "./ReviewsContent.css";
import Person1 from "../../images/about/team-5-83x83.jpg";
import Person2 from "../../images/about/team-6-83x83.jpg";
import Person3 from "../../images/about/team-7-83x83.jpg";
import Person4 from "../../images/about/team-8-83x83.jpg";

const ReviewsContent = () => {
  const [selectedPerson, setSelectedPerson] = useState(0);
  const personData = [
    {
      image: Person1,
      testimonial:
        "Torus accelerares, tanquam ferox cacula. Fluctuss experimentum in burdigala! Ubi est peritus classis? Peregrinatione superbe ducunt ad magnum verpa.",
      name: "Stephen Adams,",
      post: "Regular Client",
    },
    {
      image: Person2,
      testimonial:
        "Gluten, fluctus, et galatae. Germanus classiss ducunt ad brodium. Pol, a bene cedrium. Tabess unda in neuter avenio! Orexiss sunt adelphiss de rusticus parma.",
      name: "Sam Peterson,",
      post: "Regular Client",
    },
    {
      image: Person3,
      testimonial:
        "Pol, silva! Grandis contencios ducunt ad torus. Monss congregabo in nobilis tectum! Velox, fatalis victrixs sapienter talem de emeritis, festus torus.",
      name: "Jane McMillan,",
      post: "Regular Client",
    },
    {
      image: Person4,
      testimonial:
        "Fluctuss sunt eras de neuter plasmator. Heuretes noster brabeuta est. Nixus, visus, et mensa. Primus, magnum tatas rare locus de altus, camerarius clabulare.",
      name: "Will Jones,",
      post: "Regular Client",
    },
  ];
  const handleChange = (index) => {
    setSelectedPerson(index);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextPerson = (selectedPerson + 1) % personData.length;
      handleChange(nextPerson);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [selectedPerson, personData]);
  return (
    <div className="pe-5 me-5 d-flex justify-content-between align-items-center flex-column">
      <div className="reviews-text">
        <h2>WHAT PEOPLE SAY</h2>
        <p>{personData[selectedPerson].testimonial}</p>
        <h5>{personData[selectedPerson].name}</h5>
        <h6>{personData[selectedPerson].post}</h6>
      </div>
      <div className="persons-pictures d-flex justify-content-between align-items-center gap-1 w-100">
        {personData.map((person, index) => (
          <img
            key={index}
            src={person.image}
            alt={`person${index + 1}`}
            className={`img-fluid ${
              index === selectedPerson ? "selected" : ""
            }`}
            onClick={() => handleChange(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default ReviewsContent;
