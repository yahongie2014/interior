import React from "react";
import "./SideBarFooter.scss";

export function SideBarFooter() {
  return (
    <React.Fragment>
      <div className="footer-block">
        <div>Terms Privacy</div>
        <div>Policy & Safety</div>
        <div>Test new features</div>
      </div>
      <div className="footer-block">
        <div>© Serinc.tech - Etfarg.com</div>
      </div>
    </React.Fragment>
  );
}
