
import React, { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';

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

const FlightSearchForm = () => {
  const [tripType, setTripType] = useState('roundtrip');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departDate, setDepartDate] = useState<Date | undefined>(undefined);
  const [returnDate, setReturnDate] = useState<Date | undefined>(undefined);
  const [passengers, setPassengers] = useState('1');
  const [cabinClass, setCabinClass] = useState('economy');

  // Function to swap departure and arrival cities
  const swapCities = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would trigger flight search
    console.log({
      tripType,
      from,
      to,
      departDate,
      returnDate,
      passengers,
      cabinClass
    });
  };

  return (
    <div className="glass-card rounded-2xl p-8 w-full max-w-4xl mx-auto animate-scale-in">
      {/* Trip Type Selection */}
      <div className="flex mb-8 bg-gray-100 p-1 rounded-lg w-full max-w-md mx-auto">
        {['roundtrip', 'oneway', 'multicity'].map((type) => (
          <button
            key={type}
            className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all ${
              tripType === type
                ? 'bg-white text-airline-navy shadow-sm'
                : 'text-gray-500 hover:text-airline-navy'
            }`}
            onClick={() => setTripType(type)}
          >
            {type === 'roundtrip' ? 'Round Trip' : type === 'oneway' ? 'One Way' : 'Multi-City'}
          </button>
        ))}
      </div>

      <form onSubmit={handleSearch} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* From */}
          <div className="relative">
            <label htmlFor="from" className="form-label flex items-center">
              <MapPin size={16} className="mr-1 text-airline-blue" />
              From
            </label>
            <Select value={from} onValueChange={setFrom}>
              <SelectTrigger id="from" className="input-field">
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

          {/* Swap Button */}
          <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:block">
            <button
              type="button"
              onClick={swapCities}
              className="bg-white rounded-full w-10 h-10 shadow-md flex items-center justify-center text-airline-blue hover:text-airline-navy transition-colors"
            >
              <ArrowRight size={20} className="transform rotate-90" />
            </button>
          </div>

          {/* To */}
          <div className="relative">
            <label htmlFor="to" className="form-label flex items-center">
              <MapPin size={16} className="mr-1 text-airline-blue" />
              To
            </label>
            <Select value={to} onValueChange={setTo}>
              <SelectTrigger id="to" className="input-field">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Depart Date */}
          <div>
            <label htmlFor="depart" className="form-label flex items-center">
              <Calendar size={16} className="mr-1 text-airline-blue" />
              Depart
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <button
                  id="depart"
                  type="button"
                  className="input-field flex justify-between items-center text-left"
                >
                  {departDate ? format(departDate, 'MMM dd, yyyy') : 'Select date'}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white">
                <CalendarComponent
                  mode="single"
                  selected={departDate}
                  onSelect={setDepartDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Return Date */}
          {tripType === 'roundtrip' && (
            <div>
              <label htmlFor="return" className="form-label flex items-center">
                <Calendar size={16} className="mr-1 text-airline-blue" />
                Return
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    id="return"
                    type="button"
                    className="input-field flex justify-between items-center text-left"
                  >
                    {returnDate ? format(returnDate, 'MMM dd, yyyy') : 'Select date'}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white">
                  <CalendarComponent
                    mode="single"
                    selected={returnDate}
                    onSelect={setReturnDate}
                    initialFocus
                    disabled={(date) => 
                      departDate ? date < departDate : false
                    }
                  />
                </PopoverContent>
              </Popover>
            </div>
          )}

          {/* Passengers */}
          <div>
            <label htmlFor="passengers" className="form-label flex items-center">
              <Users size={16} className="mr-1 text-airline-blue" />
              Passengers
            </label>
            <Select value={passengers} onValueChange={setPassengers}>
              <SelectTrigger id="passengers" className="input-field">
                <SelectValue placeholder="Passengers" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {[...Array(9)].map((_, i) => (
                  <SelectItem key={i + 1} value={(i + 1).toString()}>
                    {i + 1} {i === 0 ? 'Passenger' : 'Passengers'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Cabin Class */}
          <div>
            <label htmlFor="cabinClass" className="form-label">
              Cabin Class
            </label>
            <Select value={cabinClass} onValueChange={setCabinClass}>
              <SelectTrigger id="cabinClass" className="input-field">
                <SelectValue placeholder="Select cabin class" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="economy">Economy</SelectItem>
                <SelectItem value="premium">Premium Economy</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="first">First Class</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="pt-2 text-center">
          <Button type="submit" className="btn-primary w-full max-w-xs">
            Search Flights
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FlightSearchForm;
