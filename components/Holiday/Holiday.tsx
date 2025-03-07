import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const holidayPackages = [
  {
    id: 1,
    name: "Eid Special - Cape Town Getaway",
    destination: "Cape Town, South Africa",
    price: "Starting from $269 per person",
    duration: "5 Days / 4 Nights",
    highlights: [
      "4-star Hotel Stay",
      "City Exploration",
      "Harbour & Canal Cruise",
      "Return airport transfers",
    ],
    image: "/images/SA-Eid.jpeg",
  },
];

const HolidayPackages = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-green1 mb-8">
          Exclusive Holiday Packages
        </h2>
        <p className="text-lg text-green1 mb-12">
          Celebrate your holidays in style with our specially curated packages.
        </p>
        <div className="flex justify-center">
          {holidayPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg group"
            >
              {/* Larger Image */}
              <Image
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
                width={900}
                height={600}
              />

              {/* Darker Overlay with Smooth Transition */}
              <div className="absolute inset-0 bg-cream bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Card className="bg-white bg-opacity-95 rounded-2xl p-6 w-10/12 shadow-xl transform transition-all duration-500 group-hover:scale-105">
                  <CardContent>
                    <h3 className="text-2xl font-semibold text-green1">
                      {pkg.name}
                    </h3>
                    <p className="text-green1 text-md mt-2">
                      {pkg.destination} - {pkg.duration}
                    </p>
                    <ul className="mt-3 text-green1 text-md list-disc pl-4">
                      {pkg.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <span className="text-lg font-bold text-green1">
                        {pkg.price}
                      </span>
                    </div>

                    {/* Book Now Button with Smooth Scroll */}
                    <a href="#contact">
                      <Button className="mt-5 w-full bg-green1 hover:bg-cream text-white">
                        Book Now
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HolidayPackages;
