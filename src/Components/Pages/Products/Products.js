import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjTwo, homeObjFour } from "./Data";
function Products() {
  return (
    <>
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Products;
