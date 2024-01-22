import React from "react";
import "./NewsLatter.css";

const NewsLatter = () => {
  return (
    <div className="newsLatter">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newslatter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email id"/>
        <button>Subscribe</button>

      </div>
    </div>
  );
};

export default NewsLatter;
