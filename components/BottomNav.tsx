
import React from 'react';
import { motion } from 'motion/react';
import { View } from '../types';

interface BottomNavProps {
  currentView: View;
  onChangeView: (view: View) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, onChangeView }) => {
  const isHome = currentView === 'home';
  const isDashboard = currentView === 'dashboard';
  const isProfile = currentView === 'profile';

  const navItems = [
    { id: 'home' as View, label: 'Inicio', icon: (active: boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={`h-7 w-7 ${active ? 'text-[#1A1C1B]' : 'text-[#4D5D55]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )},
    { id: 'dashboard' as View, label: 'Cultivos', icon: (active: boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={`h-7 w-7 ${active ? 'text-[#1A1C1B]' : 'text-[#4D5D55]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C12 2 12 6 8 6C8 6 4 6 4 2C4 2 4 10 12 10V22H14V10C22 10 22 2 22 2C22 2 18 6 14 6C14 6 12 6 12 2Z" />
      </svg>
    )},
    { id: 'profile' as View, label: 'Perfil', icon: (active: boolean) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={`h-7 w-7 ${active ? 'text-[#1A1C1B]' : 'text-[#4D5D55]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )},
  ];

  if (['splash', 'login', 'register'].includes(currentView)) return null;

  return (
    <footer className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#DDE4E1] py-4 px-10 flex justify-between items-center z-50 rounded-t-[2.5rem] shadow-[0_-8px_24px_rgba(0,0,0,0.05)]">
      {navItems.map((item) => {
        const active = currentView === item.id;
        return (
          <motion.button
            key={item.id}
            whileTap={{ scale: 0.9 }}
            onClick={() => onChangeView(item.id)}
            className={`flex flex-col items-center gap-1 transition-opacity ${active ? 'opacity-100' : 'opacity-40'}`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${active ? 'bg-white shadow-sm' : ''}`}>
              {item.icon(active)}
            </div>
            <span className="text-[12px] font-black text-[#1A1C1B] tracking-tight">{item.label}</span>
          </motion.button>
        );
      })}
    </footer>
  );
};

export default BottomNav;

