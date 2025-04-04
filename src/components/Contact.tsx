
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Phone, Mail, MapPin, Linkedin, Github } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
      duration: 5000,
    });
    
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-bio-navy mb-2">Contact Me</h2>
        <div className="section-header-line"></div>
        
        <div className="grid md:grid-cols-2 gap-10 mt-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-bio-navy">Get in Touch</h3>
            <p className="text-gray-700 mb-8">
              I'm always open to discussing new projects, research collaborations, or opportunities in bioinformatics. Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-bio-lightblue p-3 rounded-full mr-4">
                  <Phone className="text-bio-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-bio-navy">Phone</h4>
                  <p className="text-gray-600">+91 9344349741</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-bio-lightblue p-3 rounded-full mr-4">
                  <Mail className="text-bio-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-bio-navy">Email</h4>
                  <a 
                    href="mailto:venkatbioinfo282@gmail.com" 
                    className="text-gray-600 hover:text-bio-blue transition-colors"
                  >
                    venkatbioinfo282@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-bio-lightblue p-3 rounded-full mr-4">
                  <MapPin className="text-bio-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-bio-navy">Location</h4>
                  <p className="text-gray-600">Bangalore, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-bio-lightblue p-3 rounded-full mr-4">
                  <Linkedin className="text-bio-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-bio-navy">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/venkatesh-r-362a9426b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-bio-blue transition-colors"
                  >
                    linkedin.com/in/venkatesh-r-362a9426b/
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-bio-lightblue p-3 rounded-full mr-4">
                  <Github className="text-bio-blue" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-bio-navy">GitHub</h4>
                  <a 
                    href="https://github.com/VenkateshRajendran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-bio-blue transition-colors"
                  >
                    github.com/VenkateshRajendran
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-bio-navy">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-bio-blue hover:bg-bio-navy">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
