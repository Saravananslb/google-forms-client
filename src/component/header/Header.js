import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img
          className="gmail-logo-header"
          src="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg"
          srcSet="https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png 2x "
          alt=""
          aria-hidden="true"
          style={{ width: "109px", height: "40px" }}
        />
      </div>
      <div>
      <img
          className="gmail-logo-header"
          src="https://www.gstatic.com/images/branding/product/1x/forms_2020q4_48dp.png"
          srcSet="https://www.gstatic.com/images/branding/product/1x/forms_2020q4_48dp.png 1x, https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png 2x "
          alt=""
          aria-hidden="true"
          style={{ width: "50px", height: "40px", marginLeft: "50px" }}
        />
      </div>
      <div>
        <span style={{ display: "inline-block",
    fontFamily: "'Product Sans',Arial,sans-serif",
    fontSize: "22px",
    lineHeight: "24px",
    marginTop: "10px" }}>Forms</span>
      </div>
      <div>
        <form className="search-form">
          <svg
            focusable="false"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
            <path d="M0,0h24v24H0V0z" fill="none"></path>
          </svg>
          <input
            type="text"
            placeholder="Search mail"
            className="search-text"
          />
        </form>
      </div>
    </div>
  );
};
