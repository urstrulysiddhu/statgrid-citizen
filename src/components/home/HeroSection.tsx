import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Building2, Zap, Droplets, Construction, Bell } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Connecting{" "}
            <span className="text-accent">Citizens</span>
            <br />
            with{" "}
            <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Real-time updates on power, water, public services and infrastructure. 
            Bridging the gap between GHMC officials and citizens of Hyderabad.
          </p>
          
          {/* Portal Selection */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
            <Card className="bg-gradient-govt p-8 shadow-govt hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <div className="text-center text-white">
                <Building2 className="h-16 w-16 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-3">Government Portal</h3>
                <p className="text-white/90 mb-6">
                  GHMC Officials & Service Providers
                </p>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="w-full font-semibold"
                  asChild
                >
                  <Link to="/government/login">Official Login</Link>
                </Button>
              </div>
            </Card>

            <Card className="bg-gradient-public p-8 shadow-public hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0">
              <div className="text-center text-white">
                <Users className="h-16 w-16 mx-auto mb-4 text-white" />
                <h3 className="text-2xl font-bold mb-3">Public Portal</h3>
                <p className="text-white/90 mb-6">
                  Citizens & Residents of Hyderabad
                </p>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="w-full font-semibold"
                  asChild
                >
                  <Link to="/public/login">Citizen Login</Link>
                </Button>
              </div>
            </Card>
          </div>

          {/* Quick Access */}
          <div className="text-center">
            <p className="text-white/80 mb-4">Quick Access - No Login Required</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Zap className="h-4 w-4 mr-2" />
                Power Status
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Droplets className="h-4 w-4 mr-2" />
                Water Status
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Construction className="h-4 w-4 mr-2" />
                Road Works
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Bell className="h-4 w-4 mr-2" />
                Notices
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};