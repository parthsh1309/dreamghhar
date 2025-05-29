import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto URL with form data
    const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:info@dreamghar.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoUrl;
    
    toast({
      title: "Message Prepared",
      description: "Your email client should open with the message ready to send.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground">
            Ready to find your dream home? Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <a 
                    href="mailto:info@dreamghar.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@dreamghar.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <a 
                    href="tel:+911234567890" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 12345 67890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Office</h3>
                  <p className="text-muted-foreground">North Delhi, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Business Hours</h3>
                  <div className="text-muted-foreground text-sm">
                    <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                    <p>Sunday: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/dreamghar" 
                  className="bg-pink-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram text-sm"></i>
                </a>
                <a 
                  href="https://youtube.com/dreamghar" 
                  className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube text-sm"></i>
                </a>
                <a 
                  href="https://wa.me/911234567890" 
                  className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-4">
                  <h4 className="font-semibold mb-2">Property Inquiry</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Questions about specific properties
                  </p>
                  <a href="mailto:properties@dreamghar.com">
                    <Button size="sm" className="w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </Button>
                  </a>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-4">
                  <h4 className="font-semibold mb-2">Investment Guidance</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Real estate investment advice
                  </p>
                  <a href="tel:+911234567890">
                    <Button size="sm" variant="outline" className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Call
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 12345 67890"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your property requirements or any questions you have..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
                
                <div className="mt-6 pt-6 border-t text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    Prefer to contact us directly?
                  </p>
                  <div className="flex gap-2">
                    <a href="https://wa.me/911234567890?text=Hey%2C%20I%20need%20property%20consideration" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="flex-1">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp
                      </Button>
                    </a>
                    <a href="tel:+911234567890">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Phone className="mr-2 h-4 w-4" />
                        Call
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location Map Placeholder */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Our Location</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">
                    Interactive map showing our office location in North Delhi
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Map integration available for precise location details
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8">
          <Card className="border-destructive/20 bg-destructive/5">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center">
                <Phone className="h-5 w-5 text-destructive mr-2" />
                <span className="font-semibold">Emergency Property Support: </span>
                <a href="tel:+911234567890" className="text-destructive ml-2 hover:underline">
                  +91 12345 67890
                </a>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-2">
                Available 24/7 for urgent property matters
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
