
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AuthFormFieldsProps {
  isLogin: boolean;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  fullName: string;
  setFullName: (fullName: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  collegeName: string;
  setCollegeName: (collegeName: string) => void;
  userType: string;
}

const AuthFormFields = ({
  isLogin,
  email,
  setEmail,
  password,
  setPassword,
  fullName,
  setFullName,
  phone,
  setPhone,
  collegeName,
  setCollegeName,
  userType,
}: AuthFormFieldsProps) => {
  return (
    <>
      <div className="space-y-2 animate-fade-in delay-400">
        <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
        />
      </div>

      <div className="space-y-2 animate-fade-in delay-500">
        <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
        />
      </div>

      {!isLogin && (
        <>
          <div className="space-y-2 animate-fade-in delay-600">
            <Label htmlFor="fullName" className="text-gray-700 font-medium">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div className="space-y-2 animate-fade-in delay-700">
            <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
            />
          </div>

          {userType === "ambassador" && (
            <div className="space-y-2 animate-fade-in delay-800">
              <Label htmlFor="collegeName" className="text-gray-700 font-medium">College Name</Label>
              <Input
                id="collegeName"
                type="text"
                placeholder="Enter your college name"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                required
                className="h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AuthFormFields;
