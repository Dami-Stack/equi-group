import React from "react";
import { Footer, Navbar } from "../components";

const GeneralLayout = ({ children }) => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <main className="overflow-auto h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default GeneralLayout;
