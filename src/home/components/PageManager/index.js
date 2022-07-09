import React, { useState } from "react";
import Overview from "../../pages/Overview";

const PageManager = () => {
  const [currentPage] = useState(0);

  const getCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <Overview />;
      default:
        return <Overview />;
    }
  };

  return getCurrentPage();
};

export default PageManager;
