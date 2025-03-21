
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
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

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
                <p className="py-20 text-center text-gray-500">Flight management interface would go here.</p>
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
