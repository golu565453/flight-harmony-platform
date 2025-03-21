
import React, { useState } from 'react';
import { Search, Plane, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';

// Sample flight statuses
const sampleFlightStatuses = [
  {
    id: 'AH123',
    from: 'JFK',
    fromCity: 'New York',
    to: 'LAX',
    toCity: 'Los Angeles',
    scheduled: '10:00 AM',
    estimated: '10:10 AM',
    status: 'Delayed',
    statusColor: 'text-yellow-500',
    gate: 'A12',
    terminal: 'T2',
  },
  {
    id: 'AH456',
    from: 'LHR',
    fromCity: 'London',
    to: 'DXB',
    toCity: 'Dubai',
    scheduled: '2:30 PM',
    estimated: '2:30 PM',
    status: 'On Time',
    statusColor: 'text-green-500',
    gate: 'B8',
    terminal: 'T3',
  },
  {
    id: 'AH789',
    from: 'SIN',
    fromCity: 'Singapore',
    to: 'HND',
    toCity: 'Tokyo',
    scheduled: '8:15 PM',
    estimated: '8:15 PM',
    status: 'Boarding',
    statusColor: 'text-blue-500',
    gate: 'C5',
    terminal: 'T1',
  },
];

const FlightStatusTracker = () => {
  const [searchMethod, setSearchMethod] = useState('flightNumber');
  const [flightNumber, setFlightNumber] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [showResults, setShowResults] = useState(false);

  // Sample list of cities
  const cities = [
    { code: 'JFK', name: 'New York', country: 'USA' },
    { code: 'LAX', name: 'Los Angeles', country: 'USA' },
    { code: 'LHR', name: 'London', country: 'UK' },
    { code: 'CDG', name: 'Paris', country: 'France' },
    { code: 'DXB', name: 'Dubai', country: 'UAE' },
    { code: 'HND', name: 'Tokyo', country: 'Japan' },
    { code: 'SYD', name: 'Sydney', country: 'Australia' },
    { code: 'SIN', name: 'Singapore', country: 'Singapore' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app this would fetch flight data
    setShowResults(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="glass-card rounded-2xl p-8 animate-scale-in">
        <h2 className="text-2xl font-semibold text-airline-navy mb-6 text-center">
          Track Your Flight
        </h2>
        
        <Tabs 
          defaultValue={searchMethod} 
          onValueChange={setSearchMethod}
          className="w-full"
        >
          <TabsList className="w-full mb-6 grid grid-cols-2">
            <TabsTrigger value="flightNumber" className="py-3">
              <Plane size={18} className="mr-2" />
              By Flight Number
            </TabsTrigger>
            <TabsTrigger value="route" className="py-3">
              <Search size={18} className="mr-2" />
              By Route
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="flightNumber">
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="flightNumber" className="form-label flex items-center">
                    <Plane size={16} className="mr-1 text-airline-blue" />
                    Flight Number
                  </label>
                  <Input
                    id="flightNumber"
                    value={flightNumber}
                    onChange={(e) => setFlightNumber(e.target.value)}
                    placeholder="e.g. AH123"
                    className="input-field"
                  />
                </div>
                
                <div>
                  <label htmlFor="date" className="form-label flex items-center">
                    <Calendar size={16} className="mr-1 text-airline-blue" />
                    Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        id="date"
                        type="button"
                        className="input-field flex justify-between items-center text-left"
                      >
                        {date ? format(date, 'MMM dd, yyyy') : 'Select date'}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white">
                      <CalendarComponent
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              
              <div className="pt-2 text-center">
                <Button type="submit" className="btn-primary w-full max-w-xs">
                  Track Flight
                </Button>
              </div>
            </form>
          </TabsContent>
          
          <TabsContent value="route">
            <form onSubmit={handleSearch} className="space-y-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* From */}
                  <div>
                    <label htmlFor="fromRoute" className="form-label flex items-center">
                      From
                    </label>
                    <Select value={from} onValueChange={setFrom}>
                      <SelectTrigger id="fromRoute" className="input-field">
                        <SelectValue placeholder="Select departure city" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {cities.map((city) => (
                          <SelectItem key={city.code} value={city.code}>
                            <div className="flex flex-col">
                              <span className="font-medium">{city.name} ({city.code})</span>
                              <span className="text-xs text-gray-500">{city.country}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* To */}
                  <div>
                    <label htmlFor="toRoute" className="form-label flex items-center">
                      To
                    </label>
                    <Select value={to} onValueChange={setTo}>
                      <SelectTrigger id="toRoute" className="input-field">
                        <SelectValue placeholder="Select arrival city" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {cities.map((city) => (
                          <SelectItem key={city.code} value={city.code}>
                            <div className="flex flex-col">
                              <span className="font-medium">{city.name} ({city.code})</span>
                              <span className="text-xs text-gray-500">{city.country}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="routeDate" className="form-label flex items-center">
                    <Calendar size={16} className="mr-1 text-airline-blue" />
                    Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <button
                        id="routeDate"
                        type="button"
                        className="input-field flex justify-between items-center text-left"
                      >
                        {date ? format(date, 'MMM dd, yyyy') : 'Select date'}
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-white">
                      <CalendarComponent
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              
              <div className="pt-2 text-center">
                <Button type="submit" className="btn-primary w-full max-w-xs">
                  Find Flights
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Results */}
      {showResults && (
        <div className="mt-8 animate-fade-up">
          <h3 className="text-xl font-semibold text-airline-navy mb-4">
            Flight Status Results
          </h3>
          
          <div className="space-y-4">
            {sampleFlightStatuses.map((flight) => (
              <div 
                key={flight.id}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <div className="flex items-center mb-3 sm:mb-0">
                      <div className="bg-airline-light-blue p-2 rounded-lg mr-4">
                        <Plane size={24} className="text-airline-blue" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-airline-navy">{flight.id}</h4>
                        <p className={`font-medium ${flight.statusColor}`}>{flight.status}</p>
                      </div>
                    </div>
                    
                    <div className="h-10 border-r border-gray-200 mx-4 hidden sm:block"></div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-3 sm:mt-0">
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
                  </div>
                  
                  <div className="mt-4 lg:mt-0">
                    <div className="flex items-center space-x-6">
                      <div>
                        <p className="text-sm text-gray-500 flex items-center">
                          <Clock size={14} className="mr-1" />
                          Scheduled
                        </p>
                        <p className="font-medium">{flight.scheduled}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500 flex items-center">
                          <Clock size={14} className="mr-1" />
                          Estimated
                        </p>
                        <p className="font-medium">{flight.estimated}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Gate</p>
                        <p className="font-medium">{flight.gate}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm text-gray-500">Terminal</p>
                        <p className="font-medium">{flight.terminal}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightStatusTracker;
