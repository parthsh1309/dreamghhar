import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight, Home, ShoppingCart } from "lucide-react";
import { Link } from "wouter";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export default function Properties() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<'all' | 'buy' | 'rent'>('all');

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.locationDisplay.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = activeFilter === 'all' || property.listingType === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">All Properties</h1>
          <p className="text-xl text-muted-foreground">
            Browse our complete collection of properties in North Delhi
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search properties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('all')}
            className="flex items-center gap-2"
          >
            All Properties
            <Badge variant="secondary" className="ml-1">
              {properties.length}
            </Badge>
          </Button>
          <Button
            variant={activeFilter === 'buy' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('buy')}
            className="flex items-center gap-2"
          >
            <ShoppingCart className="h-4 w-4" />
            For Sale
            <Badge variant="secondary" className="ml-1">
              {properties.filter(p => p.listingType === 'buy').length}
            </Badge>
          </Button>
          <Button
            variant={activeFilter === 'rent' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('rent')}
            className="flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            For Rent
            <Badge variant="secondary" className="ml-1">
              {properties.filter(p => p.listingType === 'rent').length}
            </Badge>
          </Button>
          <Link href="/search">
            <Button variant="outline">
              Advanced Search
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Properties Grid */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            {searchTerm ? `Search Results (${filteredProperties.length})` : 
             activeFilter === 'all' ? `All Properties (${filteredProperties.length})` :
             activeFilter === 'buy' ? `Properties for Sale (${filteredProperties.length})` :
             `Properties for Rent (${filteredProperties.length})`}
          </h2>
          {searchTerm && (
            <p className="text-muted-foreground">
              Showing results for "{searchTerm}"
              {activeFilter !== 'all' && ` in ${activeFilter === 'buy' ? 'sale' : 'rental'} properties`}
            </p>
          )}
        </div>

        {filteredProperties.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Search className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-2xl font-semibold mb-2">No Properties Found</h3>
              <p className="text-muted-foreground mb-4">
                Try a different search term or browse all properties.
              </p>
              <Button onClick={() => setSearchTerm("")} variant="outline">
                Clear Search
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Can't Find What You're Looking For?</h3>
              <p className="text-muted-foreground mb-6">
                Our agents have access to exclusive listings and can help you find the perfect property.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button>Contact Our Agents</Button>
                </Link>
                <Link href="/search">
                  <Button variant="outline">Try Advanced Search</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
