import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import statgridLogo from "@/assets/statgrid-logo.png";

interface LoginFormProps {
  userType: 'government' | 'public';
}

export const LoginForm = ({ userType }: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const success = await login(email, password, userType);
      if (success) {
        toast({
          title: "Login successful!",
          description: `Welcome back, ${email}`,
        });
        navigate("/");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred during login");
    }
  };

  const isGovernment = userType === 'government';

  // Mock credentials for demo
  const mockCredentials = isGovernment 
    ? { email: "admin@ghmc.gov.in", password: "admin123" }
    : { email: "citizen@example.com", password: "citizen123" };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 p-4">
      {/* Logo in top left */}
      <div className="absolute top-4 left-4">
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img src={statgridLogo} alt="StatGrid" className="h-10 w-10" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary">StatGrid</span>
            <span className="text-xs text-muted-foreground">Government of Telangana</span>
          </div>
        </Link>
      </div>

      <Card className="w-full max-w-md shadow-xl border-border/50">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            {isGovernment ? (
              <div className="p-3 bg-gradient-govt rounded-full">
                <Building2 className="h-8 w-8 text-white" />
              </div>
            ) : (
              <div className="p-3 bg-gradient-public rounded-full">
                <Users className="h-8 w-8 text-white" />
              </div>
            )}
          </div>
          <CardTitle className="text-2xl font-bold">
            {isGovernment ? 'Government Portal' : 'Public Portal'}
          </CardTitle>
          <CardDescription>
            {isGovernment 
              ? 'Login for GHMC Officials & Service Providers' 
              : 'Login for Citizens & Residents'
            }
          </CardDescription>
          <Badge 
            variant="outline" 
            className={isGovernment ? 'border-govt-primary text-govt-primary' : 'border-public-primary text-public-primary'}
          >
            {isGovernment ? 'Official Access' : 'Citizen Access'}
          </Badge>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="flex items-center space-x-2 p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                <AlertCircle className="h-4 w-4 text-destructive" />
                <span className="text-sm text-destructive">{error}</span>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link 
                to="/forgot-password" 
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button 
              type="submit" 
              className={`w-full ${isGovernment ? 'bg-gradient-govt shadow-govt' : 'bg-gradient-public shadow-public'}`}
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>

            {/* Demo credentials */}
            <div className="mt-4 p-3 bg-muted/50 rounded-md">
              <p className="text-xs text-muted-foreground mb-2">Demo credentials:</p>
              <p className="text-xs">
                <strong>Email:</strong> {mockCredentials.email}
              </p>
              <p className="text-xs">
                <strong>Password:</strong> {mockCredentials.password}
              </p>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              {isGovernment ? (
                <>Not a government official? <Link to="/public/login" className="text-primary hover:underline">Citizen Portal</Link></>
              ) : (
                <>Government official? <Link to="/government/login" className="text-primary hover:underline">Official Portal</Link></>
              )}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};