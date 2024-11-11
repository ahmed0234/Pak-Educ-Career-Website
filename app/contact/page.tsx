"use client";
import React, { useState } from 'react';
import { Mail, MapPin, Instagram, Youtube, Facebook } from 'lucide-react';
import {submitContactForm} from '@/actions/users'
const ContactWithSocials = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await submitContactForm(formData); // Call the server action with form data

      // Reset form and show success message
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen  p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-primary text-3xl font-bold text-center mb-12">CONTACT US</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-primary text-2xl font-bold mb-8">Send Us Your Message</h2>
            
            {showSuccess && (
              <div className="bg-green-500/10 border border-green-500 text-green-500 p-4 rounded-lg mb-6">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-primary border border-slate-700 rounded-lg p-4 text-secondary placeholder-secondary/75   focus:outline-none focus:ring-2 focus:ring-secondary "
              />

              <input
                minLength={11}
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-primary border border-slate-700 rounded-lg p-4 text-secondary placeholder-secondary/75   focus:outline-none focus:ring-2 focus:ring-secondary "
              />
              
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-primary border border-slate-700 rounded-lg p-4 text-secondary placeholder-secondary/75   focus:outline-none focus:ring-2 focus:ring-secondary "
              />
              
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-primary border border-slate-700 rounded-lg p-4 text-secondary placeholder-secondary/75   focus:outline-none focus:ring-2 focus:ring-secondary "
              />
              
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-primary border border-slate-700 rounded-lg p-4 text-secondary placeholder-secondary/75   focus:outline-none focus:ring-2 focus:ring-secondary "
              />
              
              <button
                type="submit"
                disabled={isLoading}
                className={`${
                  isLoading 
                    ? 'bg-yellow-500/50 cursor-not-allowed'
                    : 'bg-yellow-500 hover:bg-yellow-400'
                } text-secondary px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
          
          {/* Rest of your component remains the same */}
          <div className="text-primary pt-14">
                   {/* Contact Info Section */}
                  <div className="text-primary pt-14">
                              
                              <div className="space-y-6 mb-12">
                                <div className="flex items-start gap-4">
                                  <Mail className="w-6 h-6 text-yellow-500 mt-1" />
                                  <div>
                                    <h3 className="font-semibold mb-1 ">Email</h3>
                                    <p className="text-primary/65">pakeducareer2020@gmail.com</p>
                                  </div>
                                </div>
                                
                          
                                
                                <div className="flex items-start gap-4">
                                  <MapPin className="w-6 h-6 text-yellow-500 mt-1" />
                                  <div>
                                    <h3 className="font-semibold mb-1">Address</h3>
                                    <p className="text-primary/65">Ali Town, Faisalabad, Pakistan
                                    </p>
                                  </div>
                                </div>
                              </div>
                          
                          
                  </div>
                      
                     {/* Social Links Section */}
                  <div>
                  <h2 className="text-2xl font-bold mb-6">Social Links</h2>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={`https://whatsapp.com/channel/0029VaDL9eoEwEk2fJOps31j`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary border border-primary  p-3 rounded-lg transition-colors hover:bg-secondary duration-200 group hover:border-secondary"
                      aria-label="WhatsApp"
                    >
                      <svg 
                        viewBox="0 0 24 24" 
                        className="w-6 h-6 text-secondary  transition-colors duration-200 group-hover:text-primary "
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </a>
                    
                    <a 
                      href="https://www.instagram.com/pakeducareer" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary hover:bg-secondary border border-primary hover:border-secondary  p-3 rounded-lg transition-colors duration-200 group"
                    >
                      <Instagram className="w-6 h-6 text-secondary transition-colors duration-200 group-hover:text-primary " />
                    </a>
                    
                    <a 
                      href="https://www.youtube.com/c/PakEduCareer1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary hover:bg-secondary border border-primary hover:border-secondary  p-3 rounded-lg transition-colors duration-200 group"
                    >
                      <Youtube className="w-6 h-6 text-secondary transition-colors duration-200 group-hover:text-primary " />
                    </a>
                    
                    <a 
                      href="https://www.facebook.com/PakEduCareer" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary hover:bg-secondary border border-primary hover:border-secondary  p-3 rounded-lg transition-colors duration-200 group"
                    >
                      <Facebook className="w-6 h-6 text-secondary transition-colors duration-200 group-hover:text-primary " />
                    </a>
                  </div>
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactWithSocials;


