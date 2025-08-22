import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Users, Search, Globe, Award, Zap } from "lucide-react";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="h-15"></div>
      {/* Hero Section with Background Image */}
      <div
        className="flex items-center justify-center h-[calc(100vh-80px)] relative"
        style={{
          backgroundImage: "url('/people/geovision_lab_photos/IMG_7026.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        <div className="text-center max-w-4xl mx-auto px-6 relative z-10">
          <h1
            className="text-5xl md:text-6xl font-bold text-orange-400 mb-6"
            style={{ WebkitTextStroke: "3px #000000" }}
          >
            Welcome to GeoVision Lab.
          </h1>
          <p className="text-xl text-black font-bold mb-8 leading-relaxed bg-yellow-400 px-6 py-3 rounded-lg inline-block">
            Advancing geospatial technology and data visualization for a better
            understanding of our world!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/research">
              <Button size="lg" className="px-8 py-3">
                Explore Our Research
              </Button>
            </Link>
            <Link href="/people">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 border-black text-black hover:bg-teal hover:text-black"
              >
                Meet Our Team
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>GIS Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Advanced Geographic Information Systems for mapping, analysis,
                  and spatial data management
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Remote Sensing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Satellite and aerial imagery analysis for environmental
                  monitoring and research
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Search className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Data Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Cutting-edge spatial analytics and machine learning for
                  geospatial insights
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Research Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">15</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                100+
              </div>
              <div className="text-gray-600">Publications</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-600">Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-gray-50 relative">
        <div className="relative max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Leading Innovation in Geospatial Technology
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At the GeoVision Lab, we are pioneering the future of
                Geospatial Artificial Intelligence (GeoAI). Our interdisciplinary team combines
                expertise in geography, computer computer vision, and and deep learnin methods to
               investigate complex environmental problems.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">
                    Award-winning research team
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">
                    Cutting-edge technology solutions
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-purple-600" />
                  <span className="text-gray-700">
                    Collaborative research environment
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To advance the understanding and application of geospatial
                technologies, computer vision and deep learning methods for change detection and environmental monitoring. We believe that spatial thinking is
                fundamental to addressing the world's most pressing challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Explore Our Work?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Discover our latest research projects and connect with our team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/research">
              <Button variant="secondary" size="lg" className="px-8 py-3">
                View Research
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 border-white text-black hover:bg-white hover:text-blue-600"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2024 GeoVision Lab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
