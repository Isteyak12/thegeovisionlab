import { Mail, MapPin, Phone } from "lucide-react";
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
      location: "Windsor, ON"
    },
    {
      id: 2,
      name: "Isteyak",
      title: "Remote Sensing Analyst",
      image: "/people/geovision_lab_photos/IMG_1690.jpg",
      bio: "Isteyak specializes in satellite imagery analysis and machine learning applications for geospatial data. His work focuses on .",
      email: "isteyak@uwindsor.ca",
      location: "Windsor, ON"
    },
    {
      id: 3,
      name: "Sarika Sharma",
      title: "Spatial Data Scientist",
      image: "/people/geovision_lab_photos/IMG_7096.JPG",
      bio: "Sarika combines her expertise in data science with geospatial analysis to create predictive models for urban development. She holds a BSc in Geography and has published extensively on spatial analytics.",
      email: "sharma5c@uwindsor.ca",
      location: "Windsor, ON"
    },
    // {
    //   id: 4,
    //   name: "James Wilson",
    //   title: "GIS Developer",
    //   image: "/api/placeholder/120/120",
    //   bio: "James develops custom GIS applications and web mapping platforms. With a background in software engineering and cartography, he creates user-friendly interfaces for complex geospatial datasets.",
    //   email: "james.wilson@geovisionlab.com",
    //   location: "Seattle, WA"
    // },
    // {
    //   id: 5,
    //   name: "Dr. Priya Patel",
    //   title: "Environmental Analyst",
    //   image: "/api/placeholder/120/120",
    //   bio: "Dr. Patel focuses on environmental impact assessment using GIS technology. Her research includes biodiversity mapping, habitat analysis, and conservation planning for protected areas and wildlife corridors.",
    //   email: "priya.patel@geovisionlab.com",
    //   location: "Portland, OR"
    // },
    // {
    //   id: 6,
    //   name: "Robert Kim",
    //   title: "Cartographic Designer",
    //   image: "/api/placeholder/120/120",
    //   bio: "Robert creates stunning visual representations of geographic data. His expertise in cartographic design and data visualization helps clients understand complex spatial relationships through clear, compelling maps.",
    //   email: "robert.kim@geovisionlab.com",
    //   location: "Chicago, IL"
    // }
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
                className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  index % 2 === 0 ? 'float-left mr-6 mb-6' : 'float-right ml-6 mb-6'
                } w-full max-w-4xl`}
              >
                <div className="flex flex-col md:flex-row p-6">
                  {/* Profile Image */}
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                    <div className="w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-full h-full rounded-full object-cover border-4 border-gray-100"
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
                          <span>{person.email}</span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{person.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Clear floats */}
          <div className="clear-both"></div>
        </div>
      </div>
    </div>
  );
}