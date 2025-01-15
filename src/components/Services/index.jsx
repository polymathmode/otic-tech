import ServiceCard from "./Card";
import { Cog, Book, Users } from 'lucide-react';


const Services = () => (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-4">Services</h2>
      <p className="text-center text-gray-600 mb-12">
        We provide general IT solution and consultation to help solve business problems.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          icon={Cog}
          title="Software Development"
          description="We development excellent and cost-effective software solutions for government, businesses, corporate enterprise, and personal use."
        />
        <ServiceCard
          icon={Book}
          title="ICT Training"
          description="We offer ICT training for both corporate organization and individuals who are willing to take their ICT skill to the next level."
        />
        <ServiceCard
          icon={Users}
          title="ICT consultancy"
          description="We provide ICT consultancy for businesses and organisations. We guide you in making ICT decisions and quality hardware procurement."
        />
      </div>
    </div>
  );


  export default Services