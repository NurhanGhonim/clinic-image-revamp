
import React from 'react';
import DoctorCard from './DoctorCard';

const doctors = [
  {
    id: 1,
    name: "Fatima Al-Zahra",
    specialty: "Cardiologist",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000&auto=format&fit=crop",
    availability: "Mon, Wed: 9:00 AM - 5:00 PM"
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    specialty: "Neurologist",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1000&auto=format&fit=crop",
    availability: "Tue, Thu: 10:00 AM - 6:00 PM"
  },
  {
    id: 3,
    name: "Aisha Rahman",
    specialty: "Pediatrician",
    imageUrl: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?q=80&w=1000&auto=format&fit=crop",
    availability: "Mon, Fri: 8:00 AM - 4:00 PM"
  },
  {
    id: 4,
    name: "Mohammad Al-Farsi",
    specialty: "Orthopedic Surgeon",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop",
    availability: "Wed, Sat: 9:00 AM - 5:00 PM"
  },
  {
    id: 5,
    name: "Zainab Mahmoud",
    specialty: "Dermatologist",
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1000&auto=format&fit=crop",
    availability: "Thu, Sun: 11:00 AM - 7:00 PM"
  },
  {
    id: 6,
    name: "Khalid Ibrahim",
    specialty: "Ophthalmologist",
    imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1000&auto=format&fit=crop",
    availability: "Tue, Sat: 8:00 AM - 4:00 PM"
  }
];

const DoctorsSection: React.FC = () => {
  return (
    <section id="doctors" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expert Doctors</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of experienced and dedicated doctors are committed to providing the highest quality healthcare services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              name={doctor.name}
              specialty={doctor.specialty}
              imageUrl={doctor.imageUrl}
              availability={doctor.availability}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
