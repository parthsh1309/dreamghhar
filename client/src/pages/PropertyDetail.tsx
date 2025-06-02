import { useRoute } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Mail, 
  MessageCircle,
  ArrowLeft,
  Calendar
} from "lucide-react";
import { Link } from "wouter";
import PropertyImageCarousel from "@/components/PropertyImageCarousel";
import { properties } from "@/data/properties";

export default function PropertyDetail() {
  const [, params] = useRoute("/property/:id");
  const propertyId = params?.id ? parseInt(params.id) : null;
  const property = properties.find(p => p.id === propertyId);

  if (!property) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The property you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/properties">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Properties
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  
  const scheduleVisit = `https://wa.me/918882224431?text=${encodeURIComponent(
    `I would like to schedule a visit for ${property.title} in ${property.locationDisplay}. Please let me know the available dates and times.`
  )}`

  const whatsappUrl = `https://wa.me/918882224431?text=${encodeURIComponent(
    `I'm interested in ${property.title} in ${property.locationDisplay}. Can you provide more details?`
  )}`;

  const emailSubject = `Property Inquiry - ${property.title}`;
  const emailUrl = `mailto:dreamghhar@gmail.com?subject=${encodeURIComponent(emailSubject)}`;
  


  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/properties">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Properties
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Property Image Carousel */}
            <div className="mb-6">
              <PropertyImageCarousel 
                images={property.images}
                youtubeUrl={property.youtubeUrl}
                propertyTitle={property.title}
              />
              <div className="flex justify-between items-center mt-4">
                <Badge className="bg-primary/90 text-primary-foreground">
                  {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                </Badge>
                <Badge 
                  className={`text-white ${
                    property.listingType === 'rent' 
                      ? 'bg-green-500' 
                      : 'bg-blue-500'
                  }`}
                >
                  {property.listingType === 'rent' ? 'For Rent' : 'For Sale'}
                </Badge>
              </div>
            </div>

            {/* Property Info */}
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-lg">{property.locationDisplay}</span>
              </div>
              <div className="text-4xl font-bold text-primary mb-4">
                {property.priceDisplay}
              </div>
            </div>

            {/* Property Details */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Property Details</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {property.bedrooms && (
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Bed className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold">{property.bedrooms}</div>
                      <div className="text-sm text-muted-foreground">Bedrooms</div>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Bath className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-2xl font-bold">{property.bathrooms}</div>
                      <div className="text-sm text-muted-foreground">Bathrooms</div>
                    </div>
                  )}
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Square className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold">{property.area.split(' ')[0]}</div>
                    <div className="text-sm text-muted-foreground">Sq Ft</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-lg font-bold">{property.locationDisplay}</div>
                    <div className="text-sm text-muted-foreground">Location</div>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h4 className="text-lg font-semibold mb-3">Description</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Features & Amenities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location Map Placeholder */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Location</h3>
                <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">
                      Map view for {property.locationDisplay}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      coming soon
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Interested in this property?</h3>
                <p className="text-muted-foreground mb-6">
                  Get in touch with our experts to schedule a visit or get more information.
                </p>
                
                <div className="space-y-4">
                  <a href={scheduleVisit}>
                    <Button className="w-full " size="lg">
                      <Mail className="mr-2 h-4 w-4" />
                      Schedule a Visit
                    </Button>
                  </a>
                  
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full mt-4" size="lg">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Inquiry
                    </Button>
                  </a>
                  
                  <a href="tel:+91888224431">
                    <Button variant="outline" className="w-full mt-4" size="lg">
                      <Calendar className="mr-2 h-4 w-4" />
                      Contact Agent
                    </Button>
                  </a>

                </div>

                <Separator className="my-6" />

                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Ready to find your dream home?
                  </p>
                  <p className="text-sm">
                    Explore our latest listings and expert advice to make your move easy.
                  </p>
                </div>

              </CardContent>
            </Card>
          </div>
        </div>

        {/* Similar Properties */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Similar Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties
              .filter(p => p.id !== property.id && (p.location === property.location || p.type === property.type))
              .slice(0, 3)
              .map((similarProperty) => (
                <Card key={similarProperty.id} className="property-card overflow-hidden">
                  <div className="relative">
                    <img
                      src={similarProperty.image}
                      alt={similarProperty.title}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-primary/90 text-primary-foreground">
                      {similarProperty.type.charAt(0).toUpperCase() + similarProperty.type.slice(1)}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{similarProperty.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{similarProperty.locationDisplay}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary mb-4">
                      {similarProperty.priceDisplay}
                    </div>
                    <Link href={`/property/${similarProperty.id}`}>
                      <Button className="w-full">View Details</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
