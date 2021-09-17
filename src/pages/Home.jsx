import React from "react";
import CvSection from "../components/CvSection";
import InfoSection from "../components/InfoSection";

const Home = () => {
  return (
    <main>
      <div className="container pt-5 ">
        <div className="row">
          <InfoSection />
          <CvSection />
        </div>
      </div>
    </main>
  );
};

export default Home;
