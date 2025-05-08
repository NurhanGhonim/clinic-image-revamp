
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface DoctorCardProps {
  name: string;
  specialty: string;
  imageUrl: string;
  availability: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, specialty, imageUrl, availability }) => {
  return (
    <Card className="doctor-card overflow-hidden">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="w-40 h-40 mb-4 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={`Dr. ${name}`} 
            className="doctor-image"
          />
        </div>
        <h3 className="font-bold text-xl mb-1">Dr. {name}</h3>
        <p className="text-primary font-medium mb-2">{specialty}</p>
        <p className="text-gray-500 text-sm mb-4">{availability}</p>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full">
          Book Appointment
        </Button>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
