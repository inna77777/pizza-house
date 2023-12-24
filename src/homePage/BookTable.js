import React from "react";
import "./styles/BookTable.css";
import Select from "react-select";

const BookTable = () => {
  const options = [
    { value: "", label: "Select Service", isDisabled: true },
    { value: "Dine-In", label: "Dine-In" },
    { value: "Carry-out", label: "Carry-out" },
    { value: "Event-Catering", label: "Event Catering" },
  ];

  return (
    <section className="mb-5">
      <div className="containerOur">
        <div className="book-Section">
          <h2>BOOK YOUR TABLE</h2>
          <div>
            <div className="book-info-section">
              <div className="inputted-info">
                <input type="text" value="Your Name*" />

                <input type="email" name="email" value="Your E-mail*" />

                <Select options={options} className="select"/>
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
    </section>
  );
};

export default BookTable;
