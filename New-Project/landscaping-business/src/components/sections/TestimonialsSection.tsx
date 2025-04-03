import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Springfield, IL",
    rating: 5,
    content: "GreenScape completely transformed our backyard into a beautiful oasis. Their team was professional, knowledgeable, and a pleasure to work with. The attention to detail was impressive, and they finished the project ahead of schedule.",
  },
  {
    id: 2,
    name: "Michael Thompson",
    location: "Oakridge Community",
    rating: 5,
    content: "We've been using GreenScape for our lawn maintenance for over 3 years now, and they consistently provide excellent service. Our property always looks immaculate, and their team is reliable and responsive.",
  },
  {
    id: 3,
    name: "Jennifer Adams",
    location: "Springfield, IL",
    rating: 5,
    content: "The hardscaping work that GreenScape did on our property was outstanding. The new patio and fire pit have become our favorite place to spend evenings. Their design team really listened to our needs and created something special.",
  },
  {
    id: 4,
    name: "Robert Wilson",
    location: "Cedar Heights",
    rating: 4,
    content: "We hired GreenScape to redesign our front yard landscaping, and we couldn't be happier with the results. They took our outdated space and transformed it into a beautiful, low-maintenance garden that improves our curb appeal.",
  },
  {
    id: 5,
    name: "Elizabeth Martinez",
    location: "Springfield, IL",
    rating: 5,
    content: "The irrigation system installed by GreenScape has made a huge difference for our lawn and garden. Not only is everything healthier, but we're also saving water and time. Their team was efficient and neat during the installation.",
  },
];

const TestimonialsSection = () => {
  // Create unique keys for stars by using the testimonial id combined with star position
  const renderStars = (testimonialId: number, rating: number) => {
    // Filled stars
    const filledStars = Array.from({ length: rating }, (_, index) => (
      <Star
        key={`testimonial-${testimonialId}-star-filled-${index}`}
        className="h-5 w-5 fill-yellow-400 text-yellow-400"
      />
    ));

    // Empty stars
    const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
      <Star
        key={`testimonial-${testimonialId}-star-empty-${index}`}
        className="h-5 w-5 text-gray-300"
      />
    ));

    return [...filledStars, ...emptyStars];
  };

  return (
    <section id="testimonials" className="py-20 bg-green-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients about their experience working with GreenScape Landscaping.
          </p>
        </div>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="border-none shadow-lg h-full">
                  <CardContent className="p-6 h-full flex flex-col">
                    <Quote className="h-12 w-12 text-green-200 mb-4" />
                    <div className="flex mb-3">
                      {renderStars(testimonial.id, testimonial.rating)}
                    </div>
                    <p className="text-gray-700 mb-6 flex-grow">"{testimonial.content}"</p>
                    <div className="mt-auto">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.location}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative mr-4 inline-flex h-10 w-10" />
            <CarouselNext className="relative ml-4 inline-flex h-10 w-10" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
