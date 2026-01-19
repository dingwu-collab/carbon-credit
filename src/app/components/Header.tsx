import React from 'react';
import { Bell, ChevronDown, Shield } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const Header = () => {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 lg:px-8">
      {/*Logo and Name*/}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <a href="index.html">
                    <Shield className="w-6 h-6 text-white" />
                </a>
              </div>
              <div>
                <h1 className="text-xl">Verdi</h1>
                <p className="text-xs text-gray-500">Blockchain-Powered Carbon Credit Ecosystem</p>
              </div>
            </div>
      
      <h1 className="text-xl font-bold text-gray-900">User Profile</h1>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-50 rounded-lg transition-colors">
          <Avatar className="h-8 w-8">
            <AvatarImage 
              src="https://github.com/shadc.png" 
            />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;
