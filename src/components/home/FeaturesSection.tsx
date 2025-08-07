import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Droplets, 
  Construction, 
  Bell, 
  MessageSquare, 
  Clock, 
  MapPin, 
  Shield,
  Smartphone,
  TrendingUp
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Power Outage Tracking",
    description: "Real-time updates on electricity disruptions, maintenance schedules, and restoration timelines.",
    badge: "Live Updates",
    color: "text-yellow-500"
  },
  {
    icon: Droplets,
    title: "Water Supply Status",
    description: "Track water cuts, pipeline maintenance, and supply restoration across Hyderabad.",
    badge: "24/7 Monitoring",
    color: "text-blue-500"
  },
  {
    icon: Construction,
    title: "Infrastructure Works",
    description: "Stay informed about road repairs, construction projects, and traffic diversions.",
    badge: "Project Updates",
    color: "text-orange-500"
  },
  {
    icon: Bell,
    title: "Public Notices",
    description: "Receive important announcements, policy updates, and community notifications.",
    badge: "Instant Alerts",
    color: "text-purple-500"
  },
  {
    icon: MessageSquare,
    title: "AI Support Assistant",
    description: "Get instant answers about services, submit queries, and find relevant information quickly.",
    badge: "AI Powered",
    color: "text-green-500"
  },
  {
    icon: MapPin,
    title: "Area-wise Updates",
    description: "Location-specific updates for your neighborhood and surrounding areas.",
    badge: "Geo-targeted",
    color: "text-red-500"
  },
  {
    icon: Clock,
    title: "Timeline Tracking",
    description: "View estimated resolution times and progress updates for ongoing issues.",
    badge: "ETA Tracking",
    color: "text-indigo-500"
  },
  {
    icon: Shield,
    title: "Verified Information",
    description: "All updates come directly from official GHMC sources and verified departments.",
    badge: "Official",
    color: "text-emerald-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Access StatGrid from any device with a responsive, mobile-first design.",
    badge: "Mobile Ready",
    color: "text-pink-500"
  }
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Comprehensive Service Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            StatGrid provides real-time updates, AI-powered assistance, and seamless communication 
            between government services and citizens across Telangana.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-border/50"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-hero p-8 rounded-2xl text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500K+</div>
              <div className="text-white/80">Citizens Connected</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Service Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-white/80">Service Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-white/80">Update Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};