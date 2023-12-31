import React from "react";
import "./styles/BookTable.css";
import Select from "react-select";
import { FramerWrapper } from "../utils/FramerWrapper";

const BookTable = () => {
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
    <section className="mb-5">
      <div className="containerOur">
        <div className="book-Section">
          <h2>BOOK YOUR TABLE</h2>
          <div>
            <div className="book-info-section">
              <div className="inputted-info">
                <FramerWrapper
                  hidden={{ opacity: 0, y: -50 }}
                  visible={{ opacity: 1, y: 0 }}
                  duration={1}
                  fullWidth
                >
                  <input type="text" value="Your Name*" />
                </FramerWrapper>
                <FramerWrapper
                  hidden={{ opacity: 0, y: 50 }}
                  visible={{ opacity: 1, y: 0 }}
                  duration={1}
                  fullWidth
                >
                  <input type="email" name="email" value="Your E-mail*" />
                </FramerWrapper>
                <FramerWrapper
                  hidden={{ opacity: 0, y: -50 }}
                  visible={{ opacity: 1, y: 0 }}
                  duration={1}
                  fullWidth
                >
                  <Select
                    options={options}
                    styles={styleContainer}
                    className="select"
                  />
                </FramerWrapper>
              </div>
              <textarea value="Message" cols="30" rows="10"></textarea>

              <div className="submit-message">
                <FramerWrapper
                  hidden={{ opacity: 0, x: 80 }}
                  visible={{ opacity: 1, x: 0 }}
                  duration={1}
                >
                  <a
                    href="google.com"
                    class="button  button-winona"
                    id="send-message-button"
                  >
                    <div class="content-original">SEND MESSAGE</div>
                    <div class="content-dubbed">SEND MESSAGE</div>
                  </a>
                </FramerWrapper>
                <FramerWrapper
                  hidden={{ opacity: 0, y: -50 }}
                  visible={{ opacity: 1, y: 0 }}
                  duration={1}
                >
                  <div className="text-info">
                    <i class="fa-solid fa-quote-left"></i>
                    <span>
                      Please reserve your table at least 1 day in advance.
                    </span>
                  </div>
                </FramerWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTable;
