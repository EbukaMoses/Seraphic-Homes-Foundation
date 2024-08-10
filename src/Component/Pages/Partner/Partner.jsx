import React from "react";
import "./Partner.css";
import InnerPage from "../../Common/InnerPage";
import Button from "../../Common/Button";
import { FaPaperPlane } from "react-icons/fa";

const Partner = () => {
  return (
    <>
      <section>
        <InnerPage />
      </section>
      <div className="container padding">
        <form className="partner-form">
          <h3>Fill the below form for a follow up from us.</h3>
          <div className="input-group">
            <label>
              Name <span>*</span>
            </label>
            <input type="text" placeholder="e.g Peter Chinedu" />
          </div>
          <div className="input-group">
            <label>
              Location <span>*</span>
            </label>
            <input type="text" placeholder="e.g Sydney, Australia" />
          </div>
          <div className="input-group">
            <label>
              Currency <span>*</span>
            </label>
            <select name="" id="">
              <option value="">--select currency--</option>
              <option value="">₦ (Naira)</option>
              <option value="">$ (US Dollar)</option>
              <option value="">€ (Euro)</option>
            </select>
          </div>
          <div className="input-group">
            <label>
              Donation Amount (Monthly) <span>*</span>
            </label>
            <input type="number" placeholder="e.g ₦100,000, $200, €300" />
          </div>
          <div className="form-btn">
            <Button
              title="Submit"
              style="button bg-blue"
              url="/"
              icon={<FaPaperPlane />}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Partner;
