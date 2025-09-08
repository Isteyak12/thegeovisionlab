import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar"; // Fixed: removed extra quote

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
            Our research focuses on three core areas: Land Conservation Systems, Urban Ecology, and Ecosystem Services. 
            We investigate how natural and human-made environments interact within complex social-ecological systems. 
            Through empirical studies, analytical models, and simulation approaches, we aim to understand and address 
            sustainability challenges in land management, urban environments, and ecosystem service provision. 
            Our work bridges theory and practice, supporting informed planning and policy development for a more sustainable future.
          </p>

          {/* Research Area Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* <Card className="bg-gray-800 border-gray-700 overflow-hidden">
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
            </Card> */}
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
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Estimating Snow‐Related Daily Change Events in the Canadian Winter Season: A Deep Learning‐Based Approach. </h3>
                <p className="text-gray-600 mb-2">[1] Malik, K., Isteyak, I., & Robertson, C. (2025).</p>
                <a className="text-gray-700" href="https://doi.org/10.3390/rs17091631">https://doi.org/10.3390/rs17091631</a>
               </div>
              
              {/* A4 Page Image Placeholder */}
              {/* <div className="bg-white shadow-lg rounded-lg overflow-hidden" style={{aspectRatio: '210/297'}}>
                <img 
                  src="/people/geovision_lab_photos/unet.jpg" 
                  alt="Research Paper Preview" 
                  className="w-full h-full object-cover"
                />
              </div> */}
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Change detection in snow water equivalent using a Siamese UNet model.</h3>
                <p className="text-gray-600 mb-2">[2] Karim Malik, Colin Roberton. (2025).</p>
                <p className="text-gray-700">IEEE Xplore. International Conference on Artificial Intelligence, Computer, Data Sciences and Applications, Antalya, Turkey</p>
              </div>
              
              {/* A4 Page Image Placeholder */}
              {/* <div className="bg-white shadow-lg rounded-lg overflow-hidden" style={{aspectRatio: '210/297'}}>
                <img 
                  src="/people/geovision_lab_photos/unet.jpg" 
                  alt="Research Paper Preview" 
                  className="w-full h-full object-cover"
                />
              </div> */}
            </div>

            {/* Publication 3 */}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Structural Similarity-Guided Siamese U-Net Model for Detecting Changes in Snow Water Equivalent. Remote Sensing, 17(9), 1631.</h3>
                <p className="text-gray-600 mb-2">[3] Malik, K., & Robertson, C. (2025).</p>
                <a className="text-gray-700" href="https://doi.org/10.3390/rs17091631">https://doi.org/10.3390/rs17091631</a>
              </div>
            </div>

                        {/* Publication 4*/}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Computer vision models for comparing spatial patterns: understanding spatial scale. International Journal of Geographical Information Science, 37(1), 1-35.</h3>
                <p className="text-gray-600 mb-2">[4] Malik, K., Robertson, C., Roberts, S. A., Remmel, T. K., & Long, J. A. (2023).</p>
                <a className="text-gray-700" href="https://doi.org/10.1080/13658816.2022.2103562">https://doi.org/10.1080/13658816.2022.2103562</a>
              </div>
            </div>



                        {/* Publication 5*/}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-2"> U-Net convolutional neural network models for detecting and quantifying placer mining disturbances at watershed scales. International Journal of Applied Earth Observation and Geoinformation, 104, 102510.</h3>
                <p className="text-gray-600 mb-2">[5] Malik, K., Robertson, C., Braun, D., & Greig, C. (2021).</p>
                <a className="text-gray-700" href="https://doi.org/10.1016/j.jag.2021.102510">https://doi.org/10.1016/j.jag.2021.102510</a>
              </div>
            </div>

                        {/* Publication 6*/}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-2"> Landscape similarity analysis using texture encoded deep-learning features on unclassified remote sensing imagery. Remote Sensing, 13(3), 492.</h3>
                <p className="text-gray-600 mb-2">[6] Malik, K., & Robertson, C. (2021).</p>
              </div>
            </div>

            
                        {/* Publication 7*/}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-2"> Exploring the use of computer vision metrics for spatial pattern comparison. Geographical Analysis, 52(4), 617-641.</h3>
                <p className="text-gray-600 mb-2">[7] Malik, K., & Robertson, C. (2020)..</p>
                <a className="text-gray-700" href="https://doi.org/10.1111/gean.12228">https://doi.org/10.1111/gean.12228</a>
              </div>
            </div>

            
                        {/* Publication 8*/}
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-800 mb-2"> Landcover classification using texture-encoded convolutional neural networks: peeking inside the black box. Spatial Knowledge and Information, Banff, Canada</h3>
                <p className="text-gray-600 mb-2">[8] Karim Malik, Colin Robertson. (2019).</p>
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