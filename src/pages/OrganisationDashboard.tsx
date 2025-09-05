import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Package,
  Users,
  DollarSign,
  Star,
  TrendingUp,
  Calendar,
  FileText,
  CreditCard,
  MessageSquare,
  BarChart3,
  Clock,
  CheckCircle,
  AlertTriangle,
  Plus,
  Eye
} from "lucide-react";

const OrganisationDashboard = () => {
  const stats = [
    { label: "Total Bookings", value: "248", icon: Users, color: "text-blue-600" },
    { label: "Active Packages", value: "12", icon: Package, color: "text-green-600" },
    { label: "Monthly Revenue", value: "₹2.4L", icon: DollarSign, color: "text-red-600" },
    { label: "Partner Rating", value: "4.8", icon: Star, color: "text-yellow-600" }
  ];

  const tourPackages = [
    { name: "Manali Adventure Trek", departures: 3, bookings: 24, status: "Active", revenue: "₹1.2L" },
    { name: "Goa Beach Paradise", departures: 5, bookings: 45, status: "Active", revenue: "₹2.1L" },
    { name: "Kashmir Valley Tour", departures: 2, bookings: 18, status: "Pending Approval", revenue: "₹0.9L" },
    { name: "Kerala Backwaters", departures: 4, bookings: 32, status: "Draft", revenue: "₹0" }
  ];

  const recentBookings = [
    { customer: "Priya Sharma", package: "Manali Adventure", date: "Dec 15", amount: "₹12,500", status: "Paid" },
    { customer: "Rahul Kumar", package: "Goa Beach", date: "Dec 20", amount: "₹8,900", status: "Pending" },
    { customer: "Anita Singh", package: "Kashmir Valley", date: "Dec 25", amount: "₹15,600", status: "Paid" }
  ];

  const pendingApprovals = [
    { item: "Kashmir Valley Tour", type: "Package Review", submitted: "2 days ago" },
    { item: "Himachal Trek Series", type: "New Package", submitted: "1 week ago" },
    { item: "Payout Request #1234", type: "Finance", submitted: "3 days ago" }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Partner Dashboard 🏢</h1>
        <p className="text-green-100">Manage your tour packages, bookings, and grow your business with Xplorevo.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                  </div>
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Tour Packages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-green-500" />
                Tour Packages
              </div>
              <Button size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Create New
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {tourPackages.map((pkg, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium">{pkg.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {pkg.departures} departures • {pkg.bookings} bookings
                  </p>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={pkg.status === 'Active' ? 'default' : pkg.status === 'Pending Approval' ? 'secondary' : 'outline'}
                  >
                    {pkg.status}
                  </Badge>
                  <p className="text-sm font-medium text-green-600">{pkg.revenue}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Bookings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-500" />
              Recent Bookings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentBookings.map((booking, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium">{booking.customer}</h4>
                  <p className="text-sm text-muted-foreground">{booking.package} • {booking.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{booking.amount}</p>
                  <Badge variant={booking.status === 'Paid' ? 'default' : 'secondary'}>
                    {booking.status}
                  </Badge>
                </div>
              </div>
            ))}
            <Button className="w-full" variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              View All Bookings
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Pending Approvals & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-orange-500" />
              Pending Approvals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {pendingApprovals.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium">{item.item}</h4>
                  <p className="text-sm text-muted-foreground">{item.type} • {item.submitted}</p>
                </div>
                <AlertTriangle className="w-5 h-5 text-orange-500" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="hover:shadow-lg transition-all cursor-pointer">
            <CardContent className="p-4 text-center">
              <BarChart3 className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-medium">Analytics</h3>
              <p className="text-sm text-muted-foreground">Performance insights</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-all cursor-pointer">
            <CardContent className="p-4 text-center">
              <CreditCard className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <h3 className="font-medium">Payouts</h3>
              <p className="text-sm text-muted-foreground">Request payment</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-all cursor-pointer">
            <CardContent className="p-4 text-center">
              <MessageSquare className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <h3 className="font-medium">Messages</h3>
              <p className="text-sm text-muted-foreground">Customer queries</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-all cursor-pointer">
            <CardContent className="p-4 text-center">
              <FileText className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <h3 className="font-medium">Reports</h3>
              <p className="text-sm text-muted-foreground">Export data</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrganisationDashboard;