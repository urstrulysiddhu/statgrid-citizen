import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Building2, Users, Zap, Shield, Target, Award } from "lucide-react";
import statgridLogo from "@/assets/statgrid-logo.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Hero Section */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img src={statgridLogo} alt="StatGrid" className="h-20 w-20" />
            </div>
            <h1 className="text-4xl font-bold mb-4">About StatGrid</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              StatGrid is the official government services portal of Telangana, designed to bridge the gap between citizens and government services through technology and transparency.
            </p>
          </div>

          {/* Mission and Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To provide seamless, transparent, and efficient government services to all citizens of Telangana through innovative technology solutions, ensuring accessibility, accountability, and excellence in public service delivery.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading digital government platform in India, setting benchmarks for citizen-centric governance, technological innovation, and public service excellence.
                </p>
              </CardContent>
            </Card>
          </div>

          <Separator />

          {/* Key Features */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-center">Real-time Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Live monitoring of power, water, and infrastructure services with instant notifications and status updates.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-center">Secure Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Multi-level authentication and encryption ensuring the security and privacy of all user data and transactions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-center">Dual Portal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Separate portals for government officials and citizens, each tailored to their specific needs and requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Government Departments */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">Participating Departments</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Greater Hyderabad Municipal Corporation (GHMC)",
                "Telangana State Electricity Board",
                "Hyderabad Metropolitan Water Supply",
                "Telangana State Road Transport Corporation",
                "Municipal Administration & Urban Development",
                "Public Health & Family Welfare"
              ].map((dept, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-5 w-5 text-primary" />
                      <p className="font-medium">{dept}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator />

          {/* Statistics */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2M+</div>
                <p className="text-muted-foreground">Citizens Served</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Government Departments</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Service Availability</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">User Satisfaction</p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Team */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Government Officials</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Dedicated civil servants and government employees working tirelessly to improve public service delivery.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Technology Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Skilled developers, designers, and IT professionals creating innovative digital solutions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Support Staff</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    Customer service representatives and support personnel ensuring smooth user experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Contact */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-6">
              Have questions or suggestions? We'd love to hear from you.
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">support@statgrid.telangana.gov.in</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+91 40 2111 1111</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About; 