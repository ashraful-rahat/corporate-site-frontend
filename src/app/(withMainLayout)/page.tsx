// src/app/page.tsx
import React from "react";
import Banner from "@/components/Banner";
import FeaturedProducts from "@/components/ui/Product";
import SolutionsOverview from "@/components/ui/SolutionsOverview";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import Testimonials from "@/components/ui/Testimonials";

export default function HomePage() {
  return (
    <div className="">
      <Banner></Banner>

      <SolutionsOverview></SolutionsOverview>
      <FeaturedProducts></FeaturedProducts>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
    </div>
  );
}
