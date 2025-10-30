"use client";

import { useEffect, useState } from "react";
import UrbanJungleLanding from "../components/Hero";
import TrendingProducts from "../components/Hero2";
import OurCategories from "../components/Hero3";
import PremierDestination from "../components/Hero4";
import CustomerTestimonials from "../components/Hero5";
import PopularProducts from "../components/Hero6";
import UrbanJungleLanding2 from "../components/duplicate/Hero";

function BasicModel() {
  return (
    <>
      <UrbanJungleLanding />
      <TrendingProducts />
      <OurCategories />
      <PremierDestination />
      <PopularProducts />
      <CustomerTestimonials />
    </>
  );
}

function ApiModel() {
  return (
    <>
      <UrbanJungleLanding2 />
      <TrendingProducts />
      <OurCategories />
      <PremierDestination />
      <PopularProducts />
      <CustomerTestimonials />
    </>
  );
}

export default function Home() {
  const [hasVendor, setHasVendor] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const vendorId = urlParams.get("vendor_id");
    setHasVendor(!!vendorId);
  }, []);

  return <>{hasVendor ? <ApiModel /> : <BasicModel />}</>;
}
