import React from 'react';
import { Plus } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const ProfileHeader = () => {
  return (
    <Card className="w-full bg-white border-gray-100 shadow-sm overflow-hidden mb-6">
      <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 w-full" />
      
      <div className="px-8 pb-8 relative">
        <div className="flex flex-col md:flex-row justify-between items-end">
          
          {/* Left: Action Button */}
          <div className="hidden md:block mb-4 w-1/3">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md rounded-lg">
              <Plus className="mr-2 h-4 w-4" /> New Profile
            </Button>
          </div>

          {/* Center: Avatar & Name */}
          <div className="flex flex-col items-center -mt-20 w-1/3 z-10">
            <Avatar className="h-40 w-40 border-4 border-white shadow-lg">
              <AvatarImage 
                src="https://github.com/shadc.png" 
                alt="Alex" 
                className="object-cover"
              />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <h2 className="mt-4 text-3xl font-bold text-gray-900">Alex</h2>
          </div>

          {/* Right: Stats */}
          <div className="w-full md:w-1/3 flex justify-end mt-6 md:mt-0">
            <div className="text-right space-y-2">
              <h3 className="text-lg font-semibold text-gray-500">Account Balance</h3>
              <div className="space-y-1">
                <div className="flex justify-end items-center gap-4">
                  <span className="text-gray-400 text-sm">Total</span>
                  <span className="text-xl font-bold text-gray-900">$---------</span>
                </div>
                <div className="flex justify-end items-center gap-4">
                  <span className="text-gray-400 text-sm">Minimum Balance</span>
                  <span className="text-gray-700 font-medium">$---------</span>
                </div>
                <div className="flex justify-end items-center gap-4">
                  <span className="text-gray-400 text-sm">Average Balance</span>
                  <span className="text-gray-700 font-medium">$---------</span>
                </div>
                <div className="flex justify-end items-center gap-4">
                  <span className="text-gray-400 text-sm">Account Balance</span>
                  <span className="text-gray-700 font-medium">$---------</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileHeader;
