import React from "react";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This service was outstanding! Highly recommend to anyone.",
    role: "Customer",
  },
  {
    name: "Jane Smith",
    feedback: "An amazing experience! Will definitely come back.",
    role: "Client",
  },
  {
    name: "Emily Johnson",
    feedback: "Exceptional quality and support. Truly impressed!",
    role: "Partner",
  },
];

const Testimoni = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 xl:px-0">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
              <h3 className="text-lg font-semibold mt-4">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
