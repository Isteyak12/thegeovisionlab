"use client";

import { Mail, MapPin, Globe, ExternalLink } from "lucide-react";
import Navbar from "@/components/navbar";

export default function People() {
  const people = [
    {
      id: 1,
      name: "Dr. Karim Malik",
      title: "Assistant Professor",
      image: "/people/geovision_lab_photos/IMG_1718.JPG",
      bio: "Dr. Malik has over 15 years of experience in geographic information systems and remote sensing. He leads our research team in developing innovative mapping solutions for environmental monitoring and urban planning initiatives.",
      email: "karim.malik@uwindsor.ca",
      portfolio_page: "https://www.uwindsor.ca/science/environment/681/dr-karim-malik",
      location: "Windsor, ON"
    },
    {
      id: 2,
      name: "Isteyak",
      title: "Researcher",
      image: "/people/geovision_lab_photos/IMG_1690.jpg",
      bio: "Isteyak specializes in satellite imagery analysis and machine learning applications for geospatial data. His work focuses on developing algorithms to extract patches of geospatial images and creating automated web scraping scripts to collect data from the internet.",
      email: "isteyak@uwindsor.ca",
      location: "Windsor, ON"
    },
    {
      id: 3,
      name: "Sarika Sharma",
      title: "Research Assistant",
      image: "/people/geovision_lab_photos/IMG_1660.jpg",
      bio: "Sarika is completing her M.Sc. in Environmental Science under the co-supervision of Karim Malik (GeoVision Lab) and Catherine Febria (Healthy Headwaters Lab). Her research applies drone technology and machine learning techniques to map distributions of Phragmites australis, an invasive reed, in the Great Lakes Watershed. Co-created with conservation practitioners, her project aims to provide an economical, scalable, and transferable protocol that informs the management of invasive species, and protection of native habitats through restoration.",
      email: "sharma5c@uwindsor.ca",
      location: "Windsor, ON"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="h-20"></div>
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Team</h1>
          <p className="text-gray-600 mb-8">Meet the experts behind GeoVision Lab's innovative solutions</p>
          
          <div className="space-y-6">
            {people.map((person, index) => (
              <div
                key={person.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full max-w-4xl mx-auto"
              >
                <div className="flex flex-col md:flex-row p-6">
                  {/* Profile Image */}
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <div className="w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full rounded-full object-cover border-4 border-gray-100"
                        onError={(e) => {
                          e.target.src = '/api/placeholder/120/120';
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{person.name}</h3>
                      <p className="text-blue-600 font-semibold mb-3">{person.title}</p>
                      
                      <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                        {person.bio}
                      </p>
                      
                      {/* Contact Info */}
                      <div className="flex flex-col sm:flex-row gap-3 text-sm text-gray-500">
                        <div className="flex items-center justify-center md:justify-start gap-1">
                          <Mail className="h-4 w-4" />
                          <a href={`mailto:${person.email}`} className="hover:text-blue-600">
                            {person.email}
                          </a>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{person.location}</span>
                        </div>
                        {person.portfolio_page && (
                          <div className="flex items-center justify-center md:justify-start gap-1">
                            <Globe className="h-4 w-4" />
                            <a 
                              href={person.portfolio_page}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-blue-600 flex items-center gap-1"
                            >
                              Portfolio
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}