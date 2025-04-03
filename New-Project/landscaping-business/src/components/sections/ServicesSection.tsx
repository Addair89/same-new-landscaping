import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Leaf,
  Hammer,
  Droplets,
  Shovel,
  Building,
  TreePine
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Landscape Design",
    description: "Custom landscape design solutions tailored to your property and preferences. We create beautiful, functional outdoor spaces.",
    icon: <Leaf className="h-10 w-10 text-green-600" />,
    image: "/images/service-1.jpg",
  },
  {
    id: 2,
    title: "Garden Maintenance",
    description: "Regular maintenance services to keep your landscape looking its best. From mowing and pruning to seasonal cleanups.",
    icon: <TreePine className="h-10 w-10 text-green-600" />,
    image: "/images/service-2.jpg",
  },
  {
    id: 3,
    title: "Hardscaping",
    description: "Expert installation of patios, walkways, retaining walls, and other hardscape elements that enhance your outdoor living.",
    icon: <Hammer className="h-10 w-10 text-green-600" />,
    image: "/images/hardscaping.jpg",
  },
  {
    id: 4,
    title: "Irrigation Systems",
    description: "Efficient irrigation solutions that keep your landscape healthy while conserving water. Installation and maintenance services.",
    icon: <Droplets className="h-10 w-10 text-green-600" />,
    image: "/images/service-3.jpg",
  },
  {
    id: 5,
    title: "Planting & Sod",
    description: "Professional planting services and sod installation to establish or enhance your landscape with healthy, vibrant vegetation.",
    icon: <Shovel className="h-10 w-10 text-green-600" />,
    image: "/images/feature-image.jpg",
  },
  {
    id: 6,
    title: "Commercial Services",
    description: "Comprehensive landscaping services for commercial properties, including maintenance, design, and installation.",
    icon: <Building className="h-10 w-10 text-green-600" />,
    image: "/images/hero-image.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of landscaping services to transform and maintain your outdoor spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden border-none shadow-lg transition-transform hover:scale-[1.02]">
              <div className="relative h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
