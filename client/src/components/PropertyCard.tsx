import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, ShoppingCart, Home } from "lucide-react";
import { Link } from "wouter";
import type { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="property-card overflow-hidden">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-2 left-2 bg-primary/90 text-primary-foreground">
          {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
        </Badge>
        <Badge 
          className={`absolute top-2 right-2 text-white ${
            property.listingType === 'rent' 
              ? 'bg-green-500 hover:bg-green-600' 
              : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          <div className="flex items-center gap-1">
            {property.listingType === 'rent' ? (
              <Home className="h-3 w-3" />
            ) : (
              <ShoppingCart className="h-3 w-3" />
            )}
            {property.listingType === 'rent' ? 'For Rent' : 'For Sale'}
          </div>
        </Badge>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-1">{property.title}</h3>
        <div className="flex items-center text-muted-foreground mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.locationDisplay}</span>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          {property.bedrooms && (
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{property.bedrooms} Bed</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{property.bathrooms} Bath</span>
            </div>
          )}
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{property.area}</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {property.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">
            {property.priceDisplay}
          </span>
          <Link href={`/property/${property.id}`}>
            <Button>View Details</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
