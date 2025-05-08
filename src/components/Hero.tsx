
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-green-50 to-green-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Your Health Is Our <span className="text-primary">Priority</span>
          </h1>
          <p className="text-lg text-gray-600">
            El-Shefaa Clinic provides exceptional healthcare services with state-of-the-art facilities and experienced doctors.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-primary hover:bg-primary/90">Book an Appointment</Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              View Services
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=1000&auto=format&fit=crop" 
            alt="Modern medical clinic" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
