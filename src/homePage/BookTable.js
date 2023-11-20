import React from "react";
import "./styles/BookTable.css";

const BookTable = () => {
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

                <select name="select-service" defaultValue="">
                  <option value="" disabled hidden>
                    Select Service
                  </option>
                  <option value="">Dine-In</option>
                  <option value="">Carry-out</option>
                  <option value="">Event Catering</option>
                </select>
              </div>
              <textarea value="Message" cols="30" rows="10"></textarea>
              <div className="submit-message">
                <button>Send message</button>
                <div className="text-info">
                  <i class="fa-solid fa-quote-left"></i>
                  <span>Please reserve your table at least 1 day in advance.</span>
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
