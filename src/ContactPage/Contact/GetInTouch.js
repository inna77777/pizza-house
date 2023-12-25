import React from "react";
import "./GetInTouch.css";
import Select from "react-select";

const GetInTouch = () => {
  const options = [
    { value: "", label: "Select Service", isDisabled: true },
    { value: "Dine-In", label: "Dine-In" },
    { value: "Carry-out", label: "Carry-out" },
    { value: "Event-Catering", label: "Event Catering" },
  ];

  return (
    <div className="mb-5">
      <div className="containerOur">
        <div className="get-in-touch-section">
          <h2>BOOK YOUR TABLE</h2>
          <div>
            <div className="get-in-touch-info-section">
              <div className="get-in-touch-inputted-info">
                <input type="text" value="Your Name*" />

                <input type="email" name="email" value="Your E-mail*" />

                <Select options={options} className="get-in-touch-select" />
              </div>
              <textarea value="Message" cols="30" rows="10"></textarea>
              <div className="submit-message">
                <button>Send message</button>
                <div className="text-info">
                  <i class="fa-solid fa-quote-left"></i>
                  <span>
                    Please reserve your table at least 1 day in advance.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetInTouch;
