import React from 'react';
import Header from './components/Header';
import ProfileHeader from './components/ProfileHeader';
import EditProfile from './components/EditProfile';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Header />
      
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          <ProfileHeader />
          <EditProfile />
        </div>
      </main>
    </div>
  );
};

export default App;
