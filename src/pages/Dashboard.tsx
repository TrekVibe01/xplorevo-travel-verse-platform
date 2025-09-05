import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import Layout from "@/components/Layout";
import UserDashboard from "./UserDashboard";
import OrganisationDashboard from "./OrganisationDashboard";  
import SuperadminDashboard from "./SuperadminDashboard";

const Dashboard = () => {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      window.location.href = '/auth';
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const getDashboardTitle = () => {
    switch (user.role) {
      case 'user':
        return 'Travel Dashboard';
      case 'organisation':
        return 'Partner Dashboard';
      case 'superadmin':
        return 'Admin Control Center';
      default:
        return 'Dashboard';
    }
  };

  const renderDashboard = () => {
    switch (user.role) {
      case 'user':
        return <UserDashboard />;
      case 'organisation':
        return <OrganisationDashboard />;
      case 'superadmin':
        return <SuperadminDashboard />;
      default:
        return <UserDashboard />;
    }
  };

  return (
    <Layout title={getDashboardTitle()}>
      {renderDashboard()}
    </Layout>
  );
};

export default Dashboard;
