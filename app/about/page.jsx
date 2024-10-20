import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto xl:px-0">
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
          <div className="relative w-full h-80 lg:h-[500px]">
            <Image
              src="/imgAbout.png"
              alt="Illustration representing our company"
              fill // Menggunakan prop 'fill'
              sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw" // Menambahkan prop 'sizes'
              className="rounded-lg"
            />
          </div>
          <article className="h-full flex flex-col justify-center items-start">
            <h2 className={`${poppins.className} text-3xl font-bold mb-4`}>
              About Us
            </h2>
            <p className="mb-4">
              Founded in [Year], our company has been dedicated to providing
              exceptional services in [Industry]. Over the years, we have
              evolved from a small startup into a trusted leader in the field.
            </p>
            <p className="mb-4">
              Our journey began with a vision to [describe initial vision or
              mission], and we have continuously strived to exceed our clients'
              expectations.
            </p>
            <p className="mb-4">
              With a commitment to innovation and quality, we have built a
              diverse team of experts who are passionate about delivering
              solutions that truly make a difference.
            </p>
            <div className="mt-6">
              <ul className="list-about-us space-y-2">
                <li>
                  <strong>User experience design</strong> - UI/UX
                  <br className="hidden lg:block" /> Delight the user and make
                  it work.
                </li>
                <li>
                  <strong>Web and user interface design</strong> - Development
                  <br className="hidden lg:block" />
                  Websites, web experiences.
                </li>
                <li>
                  <strong>Interaction design</strong> - Animation
                  <br className="hidden lg:block" /> I like to move it move it.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
