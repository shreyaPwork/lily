"use client";
import Image from "next/image";

export default function WhyLily() {
  return (
    <section className="bg-[#fdf8f3] py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6">

        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/elementor-placeholder-image.png"
            alt="Why Lily"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-wide">Why Lily?</h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-md">
            At Lily, we believe fashion should be elegant, comfortable, and accessible –
            that’s why women trust us for their everyday style.
          </p>
        </div>

      </div>
    </section>
  );
}
