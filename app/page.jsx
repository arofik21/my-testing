"use client";
import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import OurService from "@/components/home/OurService";
import Testimoni from "@/components/home/Testimoni";
import React from "react";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <OurService />
      <Testimoni />
    </>
  );
};

export default Home;
