
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Brain, Baby, Bone, ShieldPlus, Eye } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Cardiology",
    description: "Comprehensive heart care including diagnostics, treatment, and prevention.",
    icon: Heart
  },
  {
    id: 2,
    title: "Neurology",
    description: "Advanced care for conditions affecting the brain, spinal cord, and nerves.",
    icon: Brain
  },
  {
    id: 3,
    title: "Pediatrics",
    description: "Specialized healthcare for infants, children, and adolescents.",
    icon: Baby
  },
  {
    id: 4,
    title: "Orthopedics",
    description: "Treatment for injuries and diseases affecting the musculoskeletal system.",
    icon: Bone
  },
  {
    id: 5,
    title: "Dermatology",
    description: "Diagnosis and treatment of conditions related to skin, hair, and nails.",
    icon: ShieldPlus
  },
  {
    id: 6,
    title: "Ophthalmology",
    description: "Expert care for eye conditions and vision improvement procedures.",
    icon: Eye
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of medical services to meet all your healthcare needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
