import React from "react";
import "./AppLayout.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../ScrollToTop";
import Home from "../../containers/Home";

export default function AppLayout(props) {
  return (
    <ScrollToTop>
      <div className="app-layout">
        <Header />
        <Home />
      </div>
    </ScrollToTop>
  );
}
