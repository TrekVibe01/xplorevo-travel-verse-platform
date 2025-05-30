
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Upload,
  CheckCircle,
  Star
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CampusAmbassadorRegistration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    course: '',
    city: '',
    instagram: '',
    facebook: '',
    twitter: '',
    followers: '',
    experience: '',
    motivation: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
  };

  const benefits = [
    { icon: <Star className="w-5 h-5 text-yellow-500" />, text: "Earn up to ₹5000 monthly" },
    { icon: <GraduationCap className="w-5 h-5 text-blue-500" />, text: "Official certificate & recommendation" },
    { icon: <MapPin className="w-5 h-5 text-green-500" />, text: "Free travel experiences" },
    { icon: <User className="w-5 h-5 text-purple-500" />, text: "Build network across colleges" }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <Navigation />
        <div className="pt-24 pb-16 flex items-center justify-center">
          <Card className="max-w-md w-full mx-4 text-center animate-scale-in">
            <CardContent className="p-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Submitted!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for applying! We'll review your application and get back to you within 48 hours.
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Your Ambassador ID: <span className="font-mono bg-gray-100 px-2 py-1 rounded">XPL-AMB-{Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
              </p>
              <Button onClick={() => window.location.href = '/'} className="w-full">
                Return to Home
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Navigation />
      
      <section className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Become a Campus Ambassador
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Represent Xplorevo in your college and earn amazing rewards!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 bg-white px-3 py-2 rounded-full shadow-sm">
                  {benefit.icon}
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-white/90 backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="pl-10"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="pl-10"
                        placeholder="your.email@college.edu"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="pl-10"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">College/University *</label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        required
                        value={formData.college}
                        onChange={(e) => setFormData({...formData, college: e.target.value})}
                        className="pl-10"
                        placeholder="e.g., Pune University"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Year of Study *</label>
                    <Input
                      required
                      value={formData.year}
                      onChange={(e) => setFormData({...formData, year: e.target.value})}
                      placeholder="e.g., 2nd Year"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Course/Stream *</label>
                    <Input
                      required
                      value={formData.course}
                      onChange={(e) => setFormData({...formData, course: e.target.value})}
                      placeholder="e.g., Computer Science"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">City *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                      <Input
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        className="pl-10"
                        placeholder="e.g., Pune"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Social Media Followers</label>
                    <Input
                      value={formData.followers}
                      onChange={(e) => setFormData({...formData, followers: e.target.value})}
                      placeholder="Total followers across platforms"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Social Media Profiles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Instagram</label>
                      <div className="relative">
                        <Instagram className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          value={formData.instagram}
                          onChange={(e) => setFormData({...formData, instagram: e.target.value})}
                          className="pl-10"
                          placeholder="@username"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Facebook</label>
                      <div className="relative">
                        <Facebook className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          value={formData.facebook}
                          onChange={(e) => setFormData({...formData, facebook: e.target.value})}
                          className="pl-10"
                          placeholder="facebook.com/username"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Twitter</label>
                      <div className="relative">
                        <Twitter className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <Input
                          value={formData.twitter}
                          onChange={(e) => setFormData({...formData, twitter: e.target.value})}
                          className="pl-10"
                          placeholder="@username"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Previous Event/Marketing Experience</label>
                  <textarea
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    rows={3}
                    placeholder="Tell us about any previous experience in organizing events, marketing, or promoting brands..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Why do you want to be a Campus Ambassador? *</label>
                  <textarea
                    required
                    value={formData.motivation}
                    onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    rows={4}
                    placeholder="Tell us what motivates you to represent Xplorevo and how you plan to promote travel among students..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 h-12 text-lg"
                >
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CampusAmbassadorRegistration;
