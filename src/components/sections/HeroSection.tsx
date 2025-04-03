import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image.jpg"
          alt="Beautiful landscaped garden"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="mb-4 max-w-4xl text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Transform Your Outdoor Space Into a Beautiful Sanctuary
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
          Expert landscaping services tailored to your vision, delivered with precision and care.
          From design to maintenance, we bring your dream landscape to life.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button className="bg-green-600 px-8 py-6 text-lg hover:bg-green-700">
            Get a Free Quote
          </Button>
          <Button variant="outline" className="border-white px-8 py-6 text-lg text-white hover:bg-white/10">
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
