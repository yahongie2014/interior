import React from "react";
import "./AppLayout.scss";
import Header from "../../components/Header";
import ScrollToTop from "../ScrollToTop";

export default function AppLayout(props) {
  return (
    <ScrollToTop>
      <div className="app-layout">
        <Header />
        {props.children}
      </div>
    </ScrollToTop>
  );
}
