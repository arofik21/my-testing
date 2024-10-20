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
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <article className="h-full flex flex-col justify-center items-start">
            <h2 className={`${poppins.className} text-3xl font-bold mb-4`}>
              About Us
            </h2>
            <p className="mb-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered in some form, by injected humour.
            </p>
            <div className="mt-6">
              {" "}
              {/* Menambahkan margin top untuk jarak */}
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
