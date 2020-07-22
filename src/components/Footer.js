import React from "react";

function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        minHeight: "6vh",
        background: " #231f20",
        color: " white",
      }}
    >
      <div>Copyright © 2020 COVID-19 Live Stats. #StaySafe#StayHome</div>
    </footer>
  );
}

export default Footer;
