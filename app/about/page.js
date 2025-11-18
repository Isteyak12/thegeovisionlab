import Navbar from "@/components/navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
      
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About GeoVision Lab</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              GeoVision Lab is dedicated to advancing geospatial technology and data visualization. 
              We provide cutting-edge solutions for geographic information systems, remote sensing, 
              and spatial analysis to help organizations make informed decisions based on location data.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Do</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">GIS Solutions</h3>
                <p className="text-gray-600">
                  GeoAI, analysis, and data management.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Remote Sensing</h3>
                <p className="text-gray-600">
                  Satellite and aerial imagery analysis for environmental monitoring and urban planning.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Visualization</h3>
                <p className="text-gray-600">
                  Interactive maps and dashboards to visualize complex geospatial datasets.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Consulting</h3>
                <p className="text-gray-600">
                  Expert guidance on geospatial technology implementation and best practices.
                </p>
              </div>
            </div>
          </div>
          
          {/* Additional sections for About page */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Approach</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We combine cutting-edge technology with deep domain expertise to deliver solutions that 
              are both innovative and practical. Our interdisciplinary team brings together specialists 
              in geography, computer science, data analytics, and environmental science.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every project begins with understanding your unique challenges and objectives. We then 
              design custom solutions that leverage the latest advancements in geospatial technology 
              while ensuring ease of use and long-term sustainability.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose GeoVision Lab?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Expert Team</h4>
                  <p className="text-gray-600">Leading researchers and practitioners in geospatial science</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Cutting-edge Technology</h4>
                  <p className="text-gray-600">Latest tools and methodologies in GIS and remote sensing</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Custom Solutions</h4>
                  <p className="text-gray-600">Tailored approaches for your specific needs and objectives</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-800">Proven Results</h4>
                  <p className="text-gray-600">Track record of successful projects across various industries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
