import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search as SearchIcon } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { properties, locations, propertyTypes, priceRanges } from "@/data/properties";

export default function Search() {
  const [locationFilter, setLocationFilter] = useState<string>("");
  const [typeFilter, setTypeFilter] = useState<string>("");
  const [priceFilter, setPriceFilter] = useState<string>("");

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      let matches = true;

      if (locationFilter && property.location !== locationFilter) {
        matches = false;
      }

      if (typeFilter && property.type !== typeFilter) {
        matches = false;
      }

      if (priceFilter) {
        const [min, max] = priceFilter.split('-').map(p => p === '+' ? Infinity : parseInt(p));
        if (max && (property.price < min || property.price > max)) {
          matches = false;
        } else if (!max && property.price < min) {
          matches = false;
        }
      }

      return matches;
    });
  }, [locationFilter, typeFilter, priceFilter]);

  const clearFilters = () => {
    setLocationFilter("");
    setTypeFilter("");
    setPriceFilter("");
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Find Your Dream Property</h1>
          <p className="text-xl text-muted-foreground">
            Search and filter properties in North Delhi
          </p>
        </div>

        {/* Search Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <SearchIcon className="mr-2 h-5 w-5" />
              Search Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Location</label>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Locations</SelectItem>
                    {locations.map((location) => (
                      <SelectItem key={location.value} value={location.value}>
                        {location.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Property Type</label>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Types</SelectItem>
                    {propertyTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Price Range</label>
                <Select value={priceFilter} onValueChange={setPriceFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Prices" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Prices</SelectItem>
                    {priceRanges.map((range) => (
                      <SelectItem key={range.value} value={range.value}>
                        {range.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end space-x-2">
                <Button 
                  onClick={clearFilters}
                  variant="outline"
                  className="flex-1"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            Search Results ({filteredProperties.length} properties found)
          </h2>
          {(locationFilter || typeFilter || priceFilter) && (
            <p className="text-muted-foreground">
              Filtered by: {[
                locationFilter && locations.find(l => l.value === locationFilter)?.label,
                typeFilter && propertyTypes.find(t => t.value === typeFilter)?.label,
                priceFilter && priceRanges.find(p => p.value === priceFilter)?.label
              ].filter(Boolean).join(', ')}
            </p>
          )}
        </div>

        {filteredProperties.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <SearchIcon className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-2xl font-semibold mb-2">No Properties Found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search criteria to find more properties.
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear All Filters
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
      </div>
    </div>
  );
}
