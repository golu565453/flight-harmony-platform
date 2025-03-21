import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  CreditCard,
  Plane,
  Calendar,
  Clock,
  User,
  Map,
  Luggage,
  Settings,
  ChevronRight,
  Filter,
  Search,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Sample data
  const upcomingFlights = [
    {
      id: 'AH1234',
      from: 'JFK',
      fromCity: 'New York',
      to: 'LAX',
      toCity: 'Los Angeles',
      date: 'Sep 28, 2023',
      time: '10:00 AM',
      status: 'Confirmed',
    },
    {
      id: 'AH5678',
      from: 'LAX',
      fromCity: 'Los Angeles',
      to: 'SFO',
      toCity: 'San Francisco',
      date: 'Oct 15, 2023',
      time: '2:30 PM',
      status: 'Confirmed',
    },
  ];

  const recentFlights = [
    {
      id: 'AH9012',
      from: 'SFO',
      fromCity: 'San Francisco',
      to: 'JFK',
      toCity: 'New York',
      date: 'Aug 05, 2023',
      time: '6:15 PM',
      status: 'Completed',
    },
  ];

  // Extended flights data for the flights tab
  const allFlights = [
    {
      id: 'AH1234',
      from: 'JFK',
      fromCity: 'New York',
      to: 'LAX',
      toCity: 'Los Angeles',
      date: 'Sep 28, 2023',
      time: '10:00 AM',
      status: 'Confirmed',
      aircraft: 'Boeing 787',
      terminal: 'T4',
      gate: 'G12',
    },
    {
      id: 'AH5678',
      from: 'LAX',
      fromCity: 'Los Angeles',
      to: 'SFO',
      toCity: 'San Francisco',
      date: 'Oct 15, 2023',
      time: '2:30 PM',
      status: 'Confirmed',
      aircraft: 'Airbus A321',
      terminal: 'T1',
      gate: 'G5',
    },
    {
      id: 'AH9012',
      from: 'SFO',
      fromCity: 'San Francisco',
      to: 'JFK',
      toCity: 'New York',
      date: 'Aug 05, 2023',
      time: '6:15 PM',
      status: 'Completed',
      aircraft: 'Boeing 777',
      terminal: 'T2',
      gate: 'G22',
    },
    {
      id: 'AH3456',
      from: 'ORD',
      fromCity: 'Chicago',
      to: 'MIA',
      toCity: 'Miami',
      date: 'Jul 20, 2023',
      time: '1:45 PM',
      status: 'Completed',
      aircraft: 'Airbus A320',
      terminal: 'T3',
      gate: 'G8',
    },
    {
      id: 'AH7890',
      from: 'ATL',
      fromCity: 'Atlanta',
      to: 'DFW',
      toCity: 'Dallas',
      date: 'Nov 10, 2023',
      time: '8:20 AM',
      status: 'Scheduled',
      aircraft: 'Boeing 737',
      terminal: 'T1',
      gate: 'G3',
    },
    {
      id: 'AH2345',
      from: 'DEN',
      fromCity: 'Denver',
      to: 'SEA',
      toCity: 'Seattle',
      date: 'Nov 18, 2023',
      time: '3:10 PM',
      status: 'Scheduled',
      aircraft: 'Airbus A321',
      terminal: 'T5',
      gate: 'G15',
    },
  ];

  // Filter flights based on status
  const filteredFlights = allFlights.filter(flight => {
    if (selectedFilter === 'all') return true;
    return flight.status.toLowerCase() === selectedFilter.toLowerCase();
  });

  // Search flights by ID, cities, or dates
  const searchedFlights = filteredFlights.filter(flight => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      flight.id.toLowerCase().includes(query) ||
      flight.fromCity.toLowerCase().includes(query) ||
      flight.toCity.toLowerCase().includes(query) ||
      flight.date.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="pt-24 pb-12 bg-white shadow-sm">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-airline-navy mb-2">Your Dashboard</h1>
          <p className="text-gray-600">Manage your flights and travel details</p>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-8 bg-white p-1 rounded-lg border border-gray-200 w-full md:w-auto inline-flex">
            <TabsTrigger value="overview" className="text-sm py-2 px-4 data-[state=active]:bg-airline-blue data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="flights" className="text-sm py-2 px-4 data-[state=active]:bg-airline-blue data-[state=active]:text-white">
              My Flights
            </TabsTrigger>
            <TabsTrigger value="profile" className="text-sm py-2 px-4 data-[state=active]:bg-airline-blue data-[state=active]:text-white">
              Profile
            </TabsTrigger>
            <TabsTrigger value="preferences" className="text-sm py-2 px-4 data-[state=active]:bg-airline-blue data-[state=active]:text-white">
              Preferences
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Welcome Card */}
                <Card className="glass-panel backdrop-blur-none bg-white">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-2xl font-bold text-airline-navy">Welcome back, John</CardTitle>
                    <CardDescription>Here's a summary of your travel activity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                      <div className="bg-airline-light-blue/30 rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">Miles Earned</p>
                        <p className="text-2xl font-bold text-airline-navy">24,580</p>
                        <div className="mt-2">
                          <p className="text-xs text-gray-500 mb-1">Toward Gold Status</p>
                          <Progress value={65} className="h-1.5 bg-gray-200" />
                          <p className="text-xs text-gray-500 mt-1">15,420 miles to go</p>
                        </div>
                      </div>
                      
                      <div className="bg-airline-light-blue/30 rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">Flights This Year</p>
                        <p className="text-2xl font-bold text-airline-navy">14</p>
                        <div className="flex items-center mt-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                          <p className="text-xs text-gray-600">+3 from last year</p>
                        </div>
                      </div>
                      
                      <div className="bg-airline-light-blue/30 rounded-lg p-4">
                        <p className="text-sm text-gray-600 mb-1">Destinations</p>
                        <p className="text-2xl font-bold text-airline-navy">8</p>
                        <p className="text-xs text-gray-500 mt-2">Most visited: Los Angeles</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                      <div>
                        <Button className="btn-primary">Book New Flight</Button>
                      </div>
                      <div className="flex space-x-3">
                        <Button variant="outline" className="btn-secondary">
                          <Clock className="mr-2 h-4 w-4" />
                          Check Status
                        </Button>
                        <Button variant="outline" className="btn-secondary">
                          <Calendar className="mr-2 h-4 w-4" />
                          Manage Booking
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Upcoming Flights */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-airline-navy">Upcoming Flights</CardTitle>
                    <CardDescription>Your scheduled flights</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {upcomingFlights.length === 0 ? (
                      <p className="text-center py-8 text-gray-500">No upcoming flights</p>
                    ) : (
                      <div className="space-y-4">
                        {upcomingFlights.map((flight) => (
                          <div key={flight.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:border-airline-blue/50 hover-lift transition-all">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                              <div className="flex items-center mb-3 sm:mb-0">
                                <div className="bg-airline-light-blue p-2 rounded-lg mr-4">
                                  <Plane size={24} className="text-airline-blue" />
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold text-airline-navy">{flight.id}</h4>
                                  <p className="text-sm text-gray-500">
                                    {flight.date} • {flight.time}
                                  </p>
                                </div>
                              </div>
                              
                              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                <div>
                                  <p className="text-sm text-gray-500">{flight.fromCity}</p>
                                  <p className="text-lg font-semibold">{flight.from}</p>
                                </div>
                                
                                <div className="w-16 flex justify-center">
                                  <div className="w-12 h-0.5 bg-gray-300 relative">
                                    <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t border-r border-gray-300 transform rotate-45"></div>
                                  </div>
                                </div>
                                
                                <div>
                                  <p className="text-sm text-gray-500">{flight.toCity}</p>
                                  <p className="text-lg font-semibold">{flight.to}</p>
                                </div>
                              </div>
                              
                              <div className="mt-3 sm:mt-0 flex items-center">
                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mr-2">
                                  {flight.status}
                                </span>
                                <button className="text-airline-blue hover:text-airline-navy">
                                  <ChevronRight size={20} />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                        <div className="text-center">
                          <button className="text-airline-blue hover:text-airline-navy text-sm font-medium mt-3">
                            View All Flights
                          </button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                {/* Profile Card */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-airline-navy">Your Profile</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-airline-blue flex items-center justify-center text-white font-bold text-xl mr-4">
                        JD
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">John Doe</h3>
                        <p className="text-gray-500 text-sm">Gold Member</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <User size={16} className="text-gray-500 mr-3" />
                        <p>Membership ID: AH86752401</p>
                      </div>
                      <div className="flex items-center text-sm">
                        <Map size={16} className="text-gray-500 mr-3" />
                        <p>San Francisco, USA</p>
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar size={16} className="text-gray-500 mr-3" />
                        <p>Member since January 2020</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button variant="outline" className="w-full">Edit Profile</Button>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Recent Activity */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-airline-navy">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentFlights.map((flight) => (
                        <div key={flight.id} className="flex items-start">
                          <div className="bg-airline-light-blue/50 p-2 rounded-lg mr-3">
                            <Plane size={16} className="text-airline-blue" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">
                              Flight {flight.id} • {flight.from} to {flight.to}
                            </p>
                            <p className="text-xs text-gray-500">{flight.date}</p>
                          </div>
                        </div>
                      ))}
                      <div className="flex items-start">
                        <div className="bg-airline-light-blue/50 p-2 rounded-lg mr-3">
                          <CreditCard size={16} className="text-airline-blue" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Payment Processed</p>
                          <p className="text-xs text-gray-500">Aug 1, 2023</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-airline-light-blue/50 p-2 rounded-lg mr-3">
                          <Luggage size={16} className="text-airline-blue" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Baggage Preference Updated</p>
                          <p className="text-xs text-gray-500">July 25, 2023</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Quick Links */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-bold text-airline-navy">Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-airline-light-blue/50 transition-colors flex items-center">
                        <Settings size={16} className="mr-3 text-airline-blue" />
                        <span>Account Settings</span>
                      </button>
                      <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-airline-light-blue/50 transition-colors flex items-center">
                        <CreditCard size={16} className="mr-3 text-airline-blue" />
                        <span>Payment Methods</span>
                      </button>
                      <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-airline-light-blue/50 transition-colors flex items-center">
                        <Luggage size={16} className="mr-3 text-airline-blue" />
                        <span>Baggage Information</span>
                      </button>
                      <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-airline-light-blue/50 transition-colors flex items-center">
                        <Map size={16} className="mr-3 text-airline-blue" />
                        <span>Travel Documents</span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="flights" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-airline-navy">My Flights</CardTitle>
                <CardDescription>View and manage your upcoming and past flights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Search and Filter */}
                  <div className="flex flex-col md:flex-row gap-4 justify-between">
                    <div className="relative w-full md:w-72">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input 
                        placeholder="Search by flight, city or date" 
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-2 items-center">
                      <Filter className="text-gray-500 h-4 w-4" />
                      <span className="text-sm text-gray-500">Filter:</span>
                      <div className="flex gap-2">
                        <Button 
                          variant={selectedFilter === 'all' ? 'default' : 'outline'} 
                          size="sm"
                          onClick={() => setSelectedFilter('all')}
                          className={selectedFilter === 'all' ? 'bg-airline-blue' : ''}
                        >
                          All
                        </Button>
                        <Button 
                          variant={selectedFilter === 'scheduled' ? 'default' : 'outline'} 
                          size="sm"
                          onClick={() => setSelectedFilter('scheduled')}
                          className={selectedFilter === 'scheduled' ? 'bg-airline-blue' : ''}
                        >
                          Scheduled
                        </Button>
                        <Button 
                          variant={selectedFilter === 'confirmed' ? 'default' : 'outline'} 
                          size="sm"
                          onClick={() => setSelectedFilter('confirmed')}
                          className={selectedFilter === 'confirmed' ? 'bg-airline-blue' : ''}
                        >
                          Confirmed
                        </Button>
                        <Button 
                          variant={selectedFilter === 'completed' ? 'default' : 'outline'} 
                          size="sm"
                          onClick={() => setSelectedFilter('completed')}
                          className={selectedFilter === 'completed' ? 'bg-airline-blue' : ''}
                        >
                          Completed
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Flights Table */}
                  <div className="rounded-lg border overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead>Flight</TableHead>
                          <TableHead>Route</TableHead>
                          <TableHead className="hidden md:table-cell">Date & Time</TableHead>
                          <TableHead className="hidden md:table-cell">Aircraft</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {searchedFlights.length > 0 ? (
                          searchedFlights.map((flight) => (
                            <TableRow key={flight.id} className="hover:bg-gray-50">
                              <TableCell className="font-medium">{flight.id}</TableCell>
                              <TableCell>
                                <div className="flex flex-col">
                                  <div className="flex items-center space-x-1">
                                    <span className="font-medium">{flight.from}</span>
                                    <span className="text-gray-500 text-xs">→</span>
                                    <span className="font-medium">{flight.to}</span>
                                  </div>
                                  <span className="text-xs text-gray-500">{flight.fromCity} to {flight.toCity}</span>
                                </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                <div className="flex flex-col">
                                  <span>{flight.date}</span>
                                  <span className="text-xs text-gray-500">{flight.time}</span>
                                </div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">
                                <div className="flex flex-col">
                                  <span>{flight.aircraft}</span>
                                  <span className="text-xs text-gray-500">Terminal {flight.terminal}, Gate {flight.gate}</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  flight.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                                  flight.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                                  'bg-gray-100 text-gray-800'
                                }`}>
                                  {flight.status}
                                </span>
                              </TableCell>
                              <TableCell className="text-right">
                                <Button variant="ghost" size="sm">
                                  <ChevronRight size={16} />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                              No flights found matching your criteria
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="profile" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-airline-navy">Profile Settings</CardTitle>
                <CardDescription>Manage your personal information and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="py-20 text-center text-gray-500">Profile settings interface would go here.</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="preferences" className="animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-airline-navy">Travel Preferences</CardTitle>
                <CardDescription>Set your seat, meal, and other travel preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="py-20 text-center text-gray-500">Preferences interface would go here.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
