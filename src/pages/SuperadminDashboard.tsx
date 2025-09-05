import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users,
  Package,
  DollarSign,
  TrendingUp,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  BarChart3,
  FileText,
  Settings,
  UserCheck,
  CreditCard,
  Flag,
  Eye,
  Activity
} from "lucide-react";

const SuperadminDashboard = () => {
  const platformStats = [
    { label: "Total Users", value: "10,248", icon: Users, color: "text-blue-600", change: "+12%" },
    { label: "Active Packages", value: "450", icon: Package, color: "text-green-600", change: "+8%" },
    { label: "Monthly Revenue", value: "₹15.2L", icon: DollarSign, color: "text-red-600", change: "+15%" },
    { label: "Platform Rating", value: "4.7", icon: TrendingUp, color: "text-yellow-600", change: "+0.2" }
  ];

  const approvalQueue = [
    { 
      type: "Organisation", 
      item: "Mountain Adventures Pvt Ltd", 
      submitted: "2 hours ago", 
      risk: "Low",
      documents: 5
    },
    { 
      type: "Package", 
      item: "Himalayan Base Camp Trek", 
      submitted: "1 day ago", 
      risk: "Medium",
      documents: 8
    },
    { 
      type: "Finance", 
      item: "Payout Request - ₹85,000", 
      submitted: "3 hours ago", 
      risk: "High",
      documents: 3
    }
  ];

  const contentModeration = [
    { type: "Reel", content: "Ladakh Adventure Video", reporter: "User123", reason: "Inappropriate content" },
    { type: "Comment", content: "Spam promotional message", reporter: "TravelLover", reason: "Spam" },
    { type: "Review", content: "Fake positive review", reporter: "AuthenticTraveler", reason: "Fake content" }
  ];

  const recentTransactions = [
    { user: "Priya S.", amount: "₹12,500", type: "Booking", status: "Completed", fee: "₹625" },
    { user: "Adventure Co.", amount: "₹85,000", type: "Payout", status: "Pending", fee: "₹4,250" },
    { user: "Rahul K.", amount: "₹8,900", type: "Refund", status: "Processing", fee: "-₹445" }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600 to-red-600 rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Superadmin Control Center 🛡️</h1>
        <p className="text-purple-100">Monitor platform health, approve requests, and ensure quality standards.</p>
      </div>

      {/* Platform KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {platformStats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                  </div>
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Approval Queue */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-500" />
              Approval Queue ({approvalQueue.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {approvalQueue.map((item, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{item.type}</Badge>
                  <Badge 
                    variant={item.risk === 'High' ? 'destructive' : item.risk === 'Medium' ? 'secondary' : 'default'}
                  >
                    {item.risk} Risk
                  </Badge>
                </div>
                <h4 className="font-medium mb-1">{item.item}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {item.submitted} • {item.documents} documents
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="default">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Approve
                  </Button>
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-1" />
                    Review
                  </Button>
                  <Button size="sm" variant="destructive">
                    <XCircle className="w-4 h-4 mr-1" />
                    Reject
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Content Moderation */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flag className="w-5 h-5 text-red-500" />
              Content Moderation ({contentModeration.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {contentModeration.map((item, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{item.type}</Badge>
                  <AlertTriangle className="w-4 h-4 text-orange-500" />
                </div>
                <h4 className="font-medium mb-1">{item.content}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Reported by {item.reporter} • {item.reason}
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="destructive">
                    Remove
                  </Button>
                  <Button size="sm" variant="outline">
                    Review
                  </Button>
                  <Button size="sm" variant="secondary">
                    Dismiss
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Finance Overview & System Health */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-green-500" />
              Recent Transactions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentTransactions.map((transaction, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <h4 className="font-medium">{transaction.user}</h4>
                  <p className="text-sm text-muted-foreground">{transaction.type}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{transaction.amount}</p>
                  <p className="text-sm text-green-600">Fee: {transaction.fee}</p>
                  <Badge variant={transaction.status === 'Completed' ? 'default' : 'secondary'}>
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* System Management */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="hover:shadow-lg transition-all cursor-pointer">
            <CardContent className="p-4 text-center">
              <BarChart3 className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h3 className="font-medium">Analytics</h3>
              <p className="text-sm text-muted-foreground">Platform insights</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-all cursor-pointer">
            <CardContent className="p-4 text-center">
              <UserCheck className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <h3 className="font-medium">User Management</h3>
              <p className="text-sm text-muted-foreground">Roles & permissions</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-all cursor-pointer">
            <CardContent className="p-4 text-center">
              <FileText className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <h3 className="font-medium">Reports</h3>
              <p className="text-sm text-muted-foreground">Export data</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-all cursor-pointer">
            <CardContent className="p-4 text-center">
              <Settings className="w-8 h-8 text-gray-500 mx-auto mb-2" />
              <h3 className="font-medium">System Config</h3>
              <p className="text-sm text-muted-foreground">Platform settings</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* System Health Indicators */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-purple-500" />
            System Health
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <p className="font-medium">API Status</p>
              <p className="text-sm text-green-600">Operational</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <BarChart3 className="w-6 h-6 text-blue-600" />
              </div>
              <p className="font-medium">Performance</p>
              <p className="text-sm text-blue-600">98.5% uptime</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <p className="font-medium">Security</p>
              <p className="text-sm text-purple-600">All secure</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <p className="font-medium">Active Users</p>
              <p className="text-sm text-orange-600">1,247 online</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SuperadminDashboard;