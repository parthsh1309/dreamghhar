import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Award, Users, TrendingUp } from "lucide-react";

const agents = [
  {
    id: 1,
    name: "Rohit Sharma",
    title: "Senior Real Estate Agent",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    bio: "10+ years experience in North Delhi real estate with expertise in residential properties.",
    phone: "+91 98765 43210",
    email: "rohit@dreamghar.com",
    specialties: ["Residential Properties", "Investment Guidance", "Market Analysis"],
    achievements: ["Top Performer 2023", "Client Satisfaction Award", "100+ Happy Families"]
  },
  {
    id: 2,
    name: "Priya Kapoor",
    title: "Property Consultant",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332e234?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    bio: "Specialist in luxury apartments and investment properties in premium locations.",
    phone: "+91 98765 43211",
    email: "priya@dreamghar.com",
    specialties: ["Luxury Properties", "Interior Design", "First-time Buyers"],
    achievements: ["Excellence Award 2023", "Customer Choice", "Premium Sales Expert"]
  },
  {
    id: 3,
    name: "Amit Singh",
    title: "Sales Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    bio: "Expert in commercial and residential sales with strong negotiation skills.",
    phone: "+91 98765 43212",
    email: "amit@dreamghar.com",
    specialties: ["Commercial Properties", "Negotiation", "Legal Documentation"],
    achievements: ["Sales Leader 2023", "Deal Closer Award", "Client Trust Badge"]
  }
];

export default function Agent() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Agent</h1>
          <p className="text-xl text-muted-foreground">
            Meet our experienced real estate professionals
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="pt-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">500+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">15+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">50+</div>
              <p className="text-muted-foreground">Awards Won</p>
            </CardContent>
          </Card>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {agents.map((agent) => (
            <Card key={agent.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">{agent.name}</h3>
                <p className="text-primary font-medium mb-3">{agent.title}</p>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {agent.bio}
                </p>
                
                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {agent.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Achievements:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {agent.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-center">
                        <Award className="h-3 w-3 text-primary mr-2" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Contact Info */}
                <div className="space-y-2">
                  <a
                    href={`tel:${agent.phone}`}
                    className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {agent.phone}
                  </a>
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    {agent.email}
                  </a>
                </div>

                {/* Contact Buttons */}
                <div className="mt-4 space-y-2">
                  <a href={`mailto:${agent.email}`}>
                    <Button className="w-full" size="sm">
                      <Mail className="mr-2 h-4 w-4" />
                      Email {agent.name.split(' ')[0]}
                    </Button>
                  </a>
                  <a href={`tel:${agent.phone}`}>
                    <Button variant="outline" className="w-full" size="sm">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Work With Us */}
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold text-center mb-6">Why Work With Our Agents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Expert Knowledge</h4>
                <p className="text-sm text-muted-foreground">
                  Deep understanding of North Delhi real estate market
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Proven Track Record</h4>
                <p className="text-sm text-muted-foreground">
                  Hundreds of successful transactions and happy clients
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">24/7 Support</h4>
                <p className="text-sm text-muted-foreground">
                  Always available to answer your questions and concerns
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Best Deals</h4>
                <p className="text-sm text-muted-foreground">
                  Negotiation skills to get you the best possible price
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Ready to Find Your Dream Home?</h3>
              <p className="text-muted-foreground mb-6">
                Our expert agents are here to guide you through every step of your property journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:info@dreamghar.com">
                  <Button size="lg">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Our Team
                  </Button>
                </a>
                <a href="tel:+911234567890">
                  <Button variant="outline" size="lg">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
