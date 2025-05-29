import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto URL with form data
    const subject = encodeURIComponent(
      `Contact Form Submission from ${formData.name}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`,
    );
    const mailtoUrl = `mailto:info@dreamghar.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;

    toast({
      title: "Message Prepared",
      description:
        "Your email client should open with the message ready to send.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
                    dreamghhar@gmail.com
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
                    href="tel:+91 8882224431"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 8882224431 
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Office</h3>
                  <p className="text-muted-foreground w-full">
                    1443/1, Outram Ln, opp. BBM depot, <br /> Delhi University
                    Ground, <br />
                    Mukherjee Nagar, Delhi, 110009
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Business Hours</h3>
                  <div className="text-muted-foreground text-sm">
                    <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                    <p>Sunday: 10:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/dreamghhar"
                  className="bg-white text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <radialGradient
                      id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                      cx="19.38"
                      cy="42.035"
                      r="44.899"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fd5"></stop>
                      <stop offset=".328" stop-color="#ff543f"></stop>
                      <stop offset=".348" stop-color="#fc5245"></stop>
                      <stop offset=".504" stop-color="#e64771"></stop>
                      <stop offset=".643" stop-color="#d53e91"></stop>
                      <stop offset=".761" stop-color="#cc39a4"></stop>
                      <stop offset=".841" stop-color="#c837ab"></stop>
                    </radialGradient>
                    <path
                      fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                    ></path>
                    <radialGradient
                      id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
                      cx="11.786"
                      cy="5.54"
                      r="29.813"
                      gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#4168c9"></stop>
                      <stop
                        offset=".999"
                        stop-color="#4168c9"
                        stop-opacity="0"
                      ></stop>
                    </radialGradient>
                    <path
                      fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
                      d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                    ></path>
                    <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
                    <path
                      fill="#fff"
                      d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                    ></path>
                  </svg>
                </a>
                <a
                  href="https://youtube.com/@DreamGhar-bj4us"
                  className="bg-white text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                  </svg>
                </a>
                <a
                  href="https://wa.me/+91 8882224431?text=Hey%2C%20I%20need%20property%20consideration"
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
                  <a href="mailto:dreamghhar@gmail.com">
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
                  <a href="tel:+918882224431">
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
                    <a
                      href="https://wa.me/+919582500197?text=Hey%2C%20I%20need%20property%20consideration"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="flex-1">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        WhatsApp
                      </Button>
                    </a>
                    <a href="tel:+919582500197">
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
                <span className="font-semibold">
                  Emergency Property Support:{" "}
                </span>
                <a
                  href="tel:+911234567890"
                  className="text-destructive ml-2 hover:underline"
                >
                  +91 88822 24431
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
