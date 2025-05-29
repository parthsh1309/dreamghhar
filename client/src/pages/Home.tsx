import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Home as HomeIcon, 
  Shield, 
  Clock, 
  Star,
  ArrowRight,
  ShoppingCart
} from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export default function Home() {
  const featuredProperties = properties.slice(0, 3);
  const rentProperties = properties.filter(p => p.listingType === 'rent');
  const buyProperties = properties.filter(p => p.listingType === 'buy');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`,
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 fade-in">
            Dream Ghar
          </h1>
          <p className="text-xl md:text-2xl mb-8 fade-in">
            Find Your Perfect Home in North Delhi
          </p>
          <Link href="/search">
            <Button size="lg" className="fade-in">
              Explore Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="text-xl text-muted-foreground">
              Discover premium properties in North Delhi's most sought-after locations
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Badge variant="outline" className="text-green-600 border-green-600">
                <HomeIcon className="h-3 w-3 mr-1" />
                {rentProperties.length} For Rent
              </Badge>
              <Badge variant="outline" className="text-blue-600 border-blue-600">
                <ShoppingCart className="h-3 w-3 mr-1" />
                {buyProperties.length} For Sale
              </Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/properties">
                <Button size="lg">
                  View All Properties
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/search">
                <Button variant="outline" size="lg">
                  Advanced Search
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dream Ghar */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Dream Ghar</h2>
            <p className="text-xl text-muted-foreground">
              Your trusted partner in North Delhi real estate
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HomeIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                <p className="text-muted-foreground">
                  Deep knowledge of North Delhi's prime locations and market trends
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Trusted Service</h3>
                <p className="text-muted-foreground">
                  Transparent dealings and customer-first approach
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quick Response</h3>
                <p className="text-muted-foreground">
                  24/7 support and immediate property assistance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                review: "Dream Ghar helped us find our perfect home in Mukherjee Nagar. Their local knowledge and honest approach made the process smooth.",
              },
              {
                name: "Rajesh Kumar",
                review: "Excellent service and great properties. Found my investment property in GTB Nagar through their recommendations.",
              },
              {
                name: "Anita Singh",
                review: "Professional team with deep market insights. Highly recommend Dream Ghar for North Delhi properties.",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.review}"</p>
                  <div className="font-semibold">- {testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our services
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What areas in North Delhi do you cover?</AccordionTrigger>
              <AccordionContent>
                We specialize in Mukherjee Nagar, GTB Nagar, Outram Lane, Hudson Lane, 
                Shalimar Bagh, and Nirankari Colony. These are prime locations in North Delhi 
                with excellent connectivity and amenities.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Do you charge any fees for property consultation?</AccordionTrigger>
              <AccordionContent>
                Initial consultations and property visits are completely free. We only charge 
                a commission upon successful property transaction, ensuring our interests are 
                aligned with yours.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>How can I schedule a property visit?</AccordionTrigger>
              <AccordionContent>
                You can schedule a visit by calling us, sending a WhatsApp message, or 
                filling out our contact form. We're available 7 days a week to accommodate 
                your schedule.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Do you assist with loan arrangements?</AccordionTrigger>
              <AccordionContent>
                Yes, we have partnerships with leading banks and financial institutions to 
                help you secure the best home loan rates and processes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let our experts help you discover the perfect property in North Delhi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/properties">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Browse Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
