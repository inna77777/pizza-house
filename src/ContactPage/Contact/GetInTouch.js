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

  const styleContainer = {
    control: (provided) => ({
      ...provided,
      "&:hover": null,
      border: "1px solid #e1e1e1",
      borderRadius: "4px",
      height: "58px",
      boxShadow: null,
      outline: null,
    }),
  };

  return (
    <div className="mb-5">
      <div>
        <div className="get-in-touch-section">
          <h2>GET IN TOUCH</h2>
          <div>
            <div className="get-in-touch-info-section">
              <div className="get-in-touch-inputted-info">
                <div className="row row-gap-3">
                  <div className="col-6 p-0 pe-1">
                    <input type="text" value="Your Name*" />
                  </div>
                  <div className="col-6 p-0 ps-1">
                    <input type="email" name="email" value="Your E-mail*" />
                  </div>
                  <div className="col-6 p-0 pe-1">
                    <Select
                      styles={styleContainer}
                      options={options}
                    />
                  </div>

                  <div className="col-6 p-0 ps-1">
                    <input type="tel" name="phone" value="Your Phone*" />
                  </div>
                </div>
              </div>

              <textarea value="Message" cols="30" rows="10"></textarea>
              <div className="submit-message">
                <button>Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetInTouch;
