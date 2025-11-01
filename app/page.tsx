"use client";

import { useEffect, useRef, useState } from "react";
import UrbanJungleLanding from "../components/Hero";
import TrendingProducts from "../components/Hero2";
import OurCategories from "../components/Hero3";
import PremierDestination from "../components/Hero4";
import CustomerTestimonials from "../components/Hero5";
import PopularProducts from "../components/Hero6";
import UrbanJungleLanding2 from "../components/duplicate/Hero";
import { useDispatch } from "react-redux";
import { fetchHomepageTemplate } from "@/store/slices/homepageslice";
import { AppDispatch } from "@/store/store";
import PremierDestination2 from "@/components/duplicate/Part2";

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
      <PremierDestination2 />
      <PopularProducts />
      <CustomerTestimonials />
    </>
  );
}

export default function Home() {
  const [hasVendor, setHasVendor] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    const urlParams = new URLSearchParams(window.location.search);
    const vendorId = urlParams.get("vendor_id");
    if (vendorId) {
      sessionStorage.setItem("vendor_id",vendorId)
      fetched.current = true;
      dispatch(fetchHomepageTemplate(vendorId));
      setHasVendor(true);
    }
  }, [dispatch]);

  return <>{hasVendor ? <ApiModel /> : <BasicModel />}</>;
}
