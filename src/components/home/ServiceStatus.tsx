import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Droplets, 
  Construction, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  MapPin,
  ChevronRight
} from "lucide-react";

interface ServiceUpdate {
  id: string;
  type: 'power' | 'water' | 'construction';
  area: string;
  status: 'active' | 'resolved' | 'scheduled';
  title: string;
  description: string;
  eta?: string;
  lastUpdated: string;
}

const mockUpdates: ServiceUpdate[] = [
  {
    id: '1',
    type: 'power',
    area: 'Banjara Hills',
    status: 'active',
    title: 'Power Outage Due to Transformer Maintenance',
    description: 'Scheduled maintenance on main transformer affecting sectors 1-4',
    eta: '2 hours',
    lastUpdated: '10 minutes ago'
  },
  {
    id: '2',
    type: 'water',
    area: 'Jubilee Hills',
    status: 'resolved',
    title: 'Water Supply Restored',
    description: 'Pipeline repair completed, normal supply resumed',
    lastUpdated: '1 hour ago'
  },
  {
    id: '3',
    type: 'construction',
    area: 'Gachibowli',
    status: 'scheduled',
    title: 'Road Repair Work',
    description: 'Major road repair scheduled from 10 PM to 6 AM',
    eta: 'Starts at 10 PM',
    lastUpdated: '3 hours ago'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'destructive';
    case 'resolved':
      return 'default';
    case 'scheduled':
      return 'secondary';
    default:
      return 'default';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'active':
      return <AlertTriangle className="h-4 w-4" />;
    case 'resolved':
      return <CheckCircle className="h-4 w-4" />;
    case 'scheduled':
      return <Clock className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }
};

const getServiceIcon = (type: string) => {
  switch (type) {
    case 'power':
      return <Zap className="h-5 w-5 text-yellow-500" />;
    case 'water':
      return <Droplets className="h-5 w-5 text-blue-500" />;
    case 'construction':
      return <Construction className="h-5 w-5 text-orange-500" />;
    default:
      return <Clock className="h-5 w-5" />;
  }
};

export const ServiceStatus = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Live Service Updates
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-time status of public services across Hyderabad
          </p>
        </div>

        {/* Updates List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {mockUpdates.map((update) => (
            <Card key={update.id} className="border-border/50 hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    {getServiceIcon(update.type)}
                    <div>
                      <CardTitle className="text-lg">{update.title}</CardTitle>
                      <div className="flex items-center space-x-2 mt-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{update.area}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant={getStatusColor(update.status)} className="flex items-center gap-1">
                    {getStatusIcon(update.status)}
                    {update.status.charAt(0).toUpperCase() + update.status.slice(1)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{update.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    {update.eta && (
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>ETA: {update.eta}</span>
                      </div>
                    )}
                    <span>Updated {update.lastUpdated}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary">
                    View Details
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-govt text-white shadow-govt">
            View All Service Updates
            <ChevronRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};