import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

export default function Research() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="h-20"></div>
      {/* Hero Section with Background Image and Quote */}
      <div 
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/api/placeholder/1920/1080')"
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-6 pt-20">
          <h1 className="text-4xl md:text-6xl font-light italic mb-8 leading-relaxed">
            "Impossible to map the world–we select and make graphics so that we can understand it"
          </h1>
          <p className="text-xl font-medium">- Roger Tomlinson</p>
        </div>
        
        {/* Attribution */}
        {/* <div className="absolute bottom-4 right-4 text-white text-sm opacity-70">
          <p>John Krzesinski, 2009</p>
          <p className="underline">CC BY-NC-ND 2.0</p>
        </div> */}
      </div>

      {/* Our Research Areas Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">Our Research Areas.</h2>
          
          <p className="text-gray-300 leading-relaxed mb-12 max-w-4xl mx-auto">
            We seek to contribute to the emerging field of sustainability science. Questions of sustainability are wide-ranging, bridge theory and practice, cross scales, 
            and link a multitude of disciplines. Consequently, the questions we are asking are manifold and diverse. The main research areas we are pursuing are: 1) a 
            systems approach to land conservation, and 2) urban ecology and ecosystem services. Instrumental to these pursuits is a sound understanding of natural and 
            man-made environments and the processes that govern these complex social-ecological systems. We believe that empirical research is the basis for acquiring 
            knowledge about these systems, but analytical and simulation models may hold the key to understanding future system states, which is vital for planning and 
            policy development. Our research objectives follow the following three themes:
          </p>

          {/* Research Area Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('/api/placeholder/400/300')"}}></div>
              <CardHeader className="text-white">
                <CardTitle className="text-lg">Land Conservation Systems</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <CardDescription className="text-gray-300">
                  [Placeholder content - Add your research details about land conservation systems, methodologies, and findings here]
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('/api/placeholder/400/300')"}}></div>
              <CardHeader className="text-white">
                <CardTitle className="text-lg">Urban Ecology</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <CardDescription className="text-gray-300">
                  [Placeholder content - Add your research details about urban ecology studies, ecosystem services, and urban planning applications]
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700 overflow-hidden">
              <div className="h-48 bg-cover bg-center" style={{backgroundImage: "url('/api/placeholder/400/300')"}}></div>
              <CardHeader className="text-white">
                <CardTitle className="text-lg">Ecosystem Services</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                <CardDescription className="text-gray-300">
                  [Placeholder content - Add your research on ecosystem services, environmental modeling, and sustainability analysis]
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Placeholder Section 1 - Research Publications */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Recent Publications</h2>
          <div className="space-y-12">
            
            {/* Publication 1 */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">[Publication Title Placeholder]</h3>
                <p className="text-gray-600 mb-2">[Authors] - [Year]</p>
                <p className="text-gray-700">[Abstract or description placeholder - add your publication details here]</p>
              </div>
              
              {/* A4 Page Image Placeholder */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden" style={{aspectRatio: '210/297'}}>
                <img 
                  src="/api/placeholder/400/566" 
                  alt="Research Paper Preview" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Publication 2 */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* A4 Page Image Placeholder */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden" style={{aspectRatio: '210/297'}}>
                <img 
                  src="/api/placeholder/400/566" 
                  alt="Research Paper Preview" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">[Publication Title Placeholder]</h3>
                <p className="text-gray-600 mb-2">[Authors] - [Year]</p>
                <p className="text-gray-700">[Abstract or description placeholder - add your publication details here]</p>
              </div>
            </div>

            {/* Publication 3 */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">[Publication Title Placeholder]</h3>
                <p className="text-gray-600 mb-2">[Authors] - [Year]</p>
                <p className="text-gray-700">[Abstract or description placeholder - add your publication details here]</p>
              </div>
              
              {/* A4 Page Image Placeholder */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden" style={{aspectRatio: '210/297'}}>
                <img 
                  src="/api/placeholder/400/566" 
                  alt="Research Paper Preview" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Placeholder Section 2 - Research Methods */}


      {/* Placeholder Section 3 - Current Projects */}

    </div>
  );
}