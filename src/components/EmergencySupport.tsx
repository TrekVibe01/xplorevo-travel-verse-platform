
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Phone, MapPin, Clock, Users, AlertTriangle } from "lucide-react";

const EmergencySupport = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Emergency Support &
            <span className="block bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Safety First
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your safety is our priority. Advanced emergency features and 24x7 support ensure you're never alone on your adventures
          </p>
        </div>

        {/* Emergency SOS Feature */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-red-500 to-orange-600 text-white border-0 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold">
                      Emergency SOS
                    </h3>
                  </div>
                  <p className="text-lg text-red-100 mb-8">
                    One-tap emergency button that instantly sends your live location to our support team, local authorities, and emergency contacts
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-red-200" />
                      <span>Live GPS location sharing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-red-200" />
                      <span>Instant alert to emergency contacts</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-red-200" />
                      <span>24x7 support team activation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-red-200" />
                      <span>Local authority notification</span>
                    </div>
                  </div>
                  <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 font-semibold">
                    <Shield className="w-5 h-5 mr-2" />
                    Test SOS Feature
                  </Button>
                </div>
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                    <div className="w-32 h-32 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse shadow-2xl">
                      <AlertTriangle className="w-16 h-16 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2">Emergency SOS</h4>
                    <p className="text-red-100 mb-4">Hold for 3 seconds to activate</p>
                    <div className="text-sm text-red-200">
                      Location: Live Tracking Enabled
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Safety Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold">
                Women-Only Groups
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Special travel groups exclusively for women with verified female guides and safe accommodations
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Verified female tour guides</li>
                <li>• Women-only group bookings</li>
                <li>• Safe accommodation partners</li>
                <li>• 24x7 women helpline</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold">
                24x7 Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Round-the-clock support team ready to assist with any travel emergencies or queries
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Instant chat support</li>
                <li>• Emergency helpline</li>
                <li>• Local coordinator network</li>
                <li>• Medical assistance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl font-bold">
                Verified Partners
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                All tour operators and accommodations are thoroughly verified for safety and reliability
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Background verified guides</li>
                <li>• Licensed tour operators</li>
                <li>• Safety certified vehicles</li>
                <li>• Insurance coverage</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Contacts */}
        <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white border-0">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Emergency Helpline Numbers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <Phone className="w-8 h-8 mx-auto mb-4 text-red-400" />
                <h4 className="text-xl font-semibold mb-2">General Emergency</h4>
                <p className="text-2xl font-bold text-red-400">+91-911-HELP-NOW</p>
              </div>
              <div>
                <Users className="w-8 h-8 mx-auto mb-4 text-purple-400" />
                <h4 className="text-xl font-semibold mb-2">Women Helpline</h4>
                <p className="text-2xl font-bold text-purple-400">+91-181-SAFE-NOW</p>
              </div>
              <div>
                <Shield className="w-8 h-8 mx-auto mb-4 text-blue-400" />
                <h4 className="text-xl font-semibold mb-2">Medical Emergency</h4>
                <p className="text-2xl font-bold text-blue-400">+91-108-MED-HELP</p>
              </div>
            </div>
            <p className="text-gray-300">
              These numbers are available 24x7 and connect you directly to our emergency response team
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EmergencySupport;
