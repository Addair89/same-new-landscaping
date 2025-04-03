import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image column */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/feature-image.jpg"
                alt="Professional landscaping team at work"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-green-600 px-6 py-4 rounded-lg text-white hidden md:block">
              <p className="text-4xl font-bold">18+</p>
              <p className="font-medium">Years Experience</p>
            </div>
          </div>

          {/* Content column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">About GreenScape Landscaping</h2>
            <h3 className="text-2xl text-green-700 font-semibold mb-6">
              Transforming Outdoor Spaces Since 2005
            </h3>
            <p className="text-gray-700 mb-6">
              GreenScape Landscaping is a full-service landscaping company dedicated to creating and
              maintaining beautiful outdoor environments for residential and commercial clients.
              With over 18 years of experience, our team of skilled professionals brings expertise,
              creativity, and attention to detail to every project.
            </p>
            <p className="text-gray-700 mb-8">
              Our mission is to enhance the beauty and value of your property through sustainable
              landscaping practices. We are committed to using environmentally responsible methods
              and materials in all our services, from design to installation and maintenance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Certified landscaping professionals</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Eco-friendly practices</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Customized design solutions</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Satisfaction guaranteed</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Premium quality materials</span>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="h-6 w-6 mr-2 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Licensed and insured</span>
              </div>
            </div>

            <Button className="bg-green-600 hover:bg-green-700">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
