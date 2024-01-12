import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ComingSoon from "./pages/ComingSoon";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TermsAndCondition from "./pages/TermsAndCondition";
import RefundPolicy from "./pages/RefundPolicy";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
