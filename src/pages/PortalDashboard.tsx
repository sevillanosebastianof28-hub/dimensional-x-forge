import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Upload, 
  Download, 
  FileText, 
  Package, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  AlertCircle,
  LogOut,
  User
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const PortalDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out",
    });
    navigate("/portal");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      toast({
        title: "File Selected",
        description: `${e.target.files[0].name} ready to upload`,
      });
    }
  };

  const handleSubmitRFQ = () => {
    toast({
      title: "RFQ Submitted",
      description: "Your quote request has been submitted successfully",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-primary/20 bg-gradient-to-r from-black/80 to-black/60 backdrop-blur-xl sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,255,255,0.1)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/40">
              <span className="text-lg font-bold text-primary">DX</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">DimensionalX Portal</h1>
              <p className="text-xs text-muted-foreground">Customer Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg border border-primary/30">
              <User size={18} className="text-primary" />
              <span className="text-sm text-foreground">Welcome, Customer</span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleLogout}
              className="border-primary/30 hover:bg-primary/10"
            >
              <LogOut size={16} className="mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-black/60 to-black/40 border-primary/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active Orders</p>
                  <p className="text-3xl font-bold text-primary">12</p>
                </div>
                <Package className="text-primary/60" size={40} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-black/60 to-black/40 border-primary/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">In Production</p>
                  <p className="text-3xl font-bold text-primary">8</p>
                </div>
                <TrendingUp className="text-primary/60" size={40} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-black/60 to-black/40 border-primary/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending Quotes</p>
                  <p className="text-3xl font-bold text-primary">3</p>
                </div>
                <Clock className="text-primary/60" size={40} />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-black/60 to-black/40 border-primary/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-3xl font-bold text-primary">47</p>
                </div>
                <CheckCircle className="text-primary/60" size={40} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="rfq" className="space-y-6">
          <TabsList className="bg-black/40 border border-primary/30">
            <TabsTrigger value="rfq">New RFQ</TabsTrigger>
            <TabsTrigger value="orders">My Orders</TabsTrigger>
            <TabsTrigger value="files">File Upload</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          {/* RFQ Tab */}
          <TabsContent value="rfq">
            <Card className="bg-gradient-to-br from-black/60 to-black/40 border-primary/30">
              <CardHeader>
                <CardTitle className="text-primary">Submit Quote Request</CardTitle>
                <CardDescription>Upload drawings and specifications for a new quote</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Part Name</Label>
                    <Input placeholder="e.g., Custom Bracket Assembly" className="bg-black/40 border-primary/30" />
                  </div>
                  <div className="space-y-2">
                    <Label>Quantity</Label>
                    <Input type="number" placeholder="100" className="bg-black/40 border-primary/30" />
                  </div>
                  <div className="space-y-2">
                    <Label>Material</Label>
                    <Input placeholder="e.g., 6061 Aluminum, 316 Stainless" className="bg-black/40 border-primary/30" />
                  </div>
                  <div className="space-y-2">
                    <Label>Tolerance Requirements</Label>
                    <Input placeholder="e.g., ±0.001" className="bg-black/40 border-primary/30" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Additional Specifications</Label>
                  <Textarea 
                    placeholder="Enter any special requirements, finishes, or notes..." 
                    className="bg-black/40 border-primary/30 min-h-[100px]"
                  />
                </div>
                <Button onClick={handleSubmitRFQ} className="w-full bg-primary hover:bg-primary/90">
                  <FileText className="mr-2" size={18} />
                  Submit Quote Request
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card className="bg-gradient-to-br from-black/60 to-black/40 border-primary/30">
              <CardHeader>
                <CardTitle className="text-primary">Order History</CardTitle>
                <CardDescription>View and track your manufacturing orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: "PO-2024-001", part: "Precision Gear Assembly", status: "In Production", progress: 75 },
                    { id: "PO-2024-002", part: "CNC Shaft Components", status: "Quality Control", progress: 90 },
                    { id: "PO-2024-003", part: "Hydraulic Block", status: "Completed", progress: 100 },
                  ].map((order) => (
                    <div key={order.id} className="p-4 bg-black/40 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-bold text-foreground">{order.part}</h4>
                          <p className="text-sm text-muted-foreground">{order.id}</p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full border border-primary/30">
                          <div className={`w-2 h-2 rounded-full ${order.progress === 100 ? 'bg-green-500' : 'bg-primary animate-pulse'}`} />
                          <span className="text-sm font-medium text-foreground">{order.status}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Progress</span>
                          <span>{order.progress}%</span>
                        </div>
                        <div className="h-2 bg-black/60 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                            style={{ width: `${order.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* File Upload Tab */}
          <TabsContent value="files">
            <Card className="bg-gradient-to-br from-black/60 to-black/40 border-primary/30">
              <CardHeader>
                <CardTitle className="text-primary">Secure File Upload</CardTitle>
                <CardDescription>ITAR/EAR compliant file sharing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-primary/30 rounded-xl p-12 text-center hover:border-primary/50 transition-colors">
                  <Upload className="mx-auto text-primary mb-4" size={48} />
                  <p className="text-lg font-semibold text-foreground mb-2">Drop files here or click to browse</p>
                  <p className="text-sm text-muted-foreground mb-4">Upload CAD files, drawings, specifications, or documentation</p>
                  <Input 
                    type="file" 
                    onChange={handleFileUpload}
                    className="max-w-xs mx-auto"
                  />
                  {selectedFile && (
                    <p className="mt-4 text-sm text-primary">Selected: {selectedFile.name}</p>
                  )}
                </div>
                <div className="flex items-center gap-2 p-4 bg-primary/10 rounded-lg border border-primary/30">
                  <AlertCircle className="text-primary flex-shrink-0" size={20} />
                  <p className="text-sm text-foreground/90">
                    All uploads are encrypted and stored on our private Synology NAS. Files are automatically scanned and logged for ITAR compliance.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports">
            <Card className="bg-gradient-to-br from-black/60 to-black/40 border-primary/30">
              <CardHeader>
                <CardTitle className="text-primary">Inspection Reports & Documentation</CardTitle>
                <CardDescription>Download quality certifications and shipping records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "First Article Inspection Report - PO-2024-001", date: "2024-01-15", type: "FAIR" },
                    { name: "CMM Inspection Results - Gear Assembly", date: "2024-01-14", type: "CMM" },
                    { name: "Material Certification - 316 SS", date: "2024-01-12", type: "CERT" },
                    { name: "PPAP Package - Hydraulic Components", date: "2024-01-10", type: "PPAP" },
                  ].map((report, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors">
                      <div className="flex items-center gap-3">
                        <FileText className="text-primary" size={20} />
                        <div>
                          <p className="font-medium text-foreground">{report.name}</p>
                          <p className="text-sm text-muted-foreground">{report.date}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="border-primary/30 hover:bg-primary/10">
                        <Download size={16} className="mr-2" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PortalDashboard;
