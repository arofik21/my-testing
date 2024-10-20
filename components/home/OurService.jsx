import React from "react";
import { services } from "@/data/services";

const OurService = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4 xl:px-4 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Awesome Service
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div key={i} className="bg-gray-800 p-4 rounded">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p>{service.desc}</p>
              <img
                src={service.logo}
                alt={`${service.title} logo`}
                className="mt-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
