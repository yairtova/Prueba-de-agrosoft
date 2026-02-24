import React from 'react';
import { motion } from 'motion/react';
import { CropItem } from '../types';

interface CropDetailProps {
  crop: CropItem;
  onBack: () => void;
  onReport: () => void;
  onHistory: () => void;
  onAIAnalysis: () => void;
  onAIAlerts: () => void;
}

const CropDetail: React.FC<CropDetailProps> = ({ 
  crop, 
  onBack, 
  onReport, 
  onHistory, 
  onAIAnalysis, 
  onAIAlerts 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col h-full overflow-y-auto no-scrollbar pb-32"
    >
      {/* Header */}
      <header className="px-6 pt-10 pb-6 flex items-center gap-4">
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={onBack}
          className="w-12 h-12 bg-[#1A1C1B] text-white rounded-full flex items-center justify-center shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </motion.button>
        <h1 className="text-[24px] font-bold tracking-tight text-[#1A1C1B]">Crear cultivo</h1>
      </header>

      <div className="px-6 space-y-6">
        {/* Main Crop Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col items-center"
        >
          <div className="w-24 h-24 bg-[#DDE4E1] rounded-[1.5rem] flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-[#4D5D55]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C12 2 12 6 8 6C8 6 4 6 4 2C4 2 4 10 12 10V22H14V10C22 10 22 2 22 2C22 2 18 6 14 6C14 6 12 6 12 2Z" />
              <path d="M6 19H18V21C18 22.1 17.1 23 16 23H8C6.9 23 6 22.1 6 21V19Z" opacity="0.8" />
            </svg>
          </div>
          <h2 className="text-[28px] font-black text-[#1A1C1B] mb-6">{crop.type}</h2>
          
          <div className="w-full space-y-2">
            <div className="flex justify-between items-end">
              <div className="flex flex-col">
                <span className="text-[20px] font-bold text-[#1A1C1B]">Ciclo floracion</span>
                <span className="text-[14px] font-medium text-[#4D5D55] opacity-70">
                  Día {crop.day} de {crop.totalDays} {crop.progress}% completado
                </span>
              </div>
            </div>
            <div className="w-full h-3 bg-[#E5E7EB] rounded-full overflow-hidden mt-2">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${crop.progress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-[#8BB29E] to-[#4D5D55] rounded-full"
              ></motion.div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Crear reporte', icon: 'plus', primary: true, action: onReport },
            { label: 'Ver análisis IA', icon: 'user', primary: false, action: onAIAnalysis },
            { label: 'Historial', icon: 'history', primary: true, action: onHistory },
            { label: 'Alertas', icon: 'alert', primary: false, action: onAIAlerts },
          ].map((btn, i) => (
            <motion.button 
              key={btn.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={btn.action}
              className={`${
                btn.primary ? 'bg-[#4D5D55] text-white' : 'bg-white text-[#1A1C1B] border border-gray-100'
              } py-4 px-6 rounded-[1.2rem] flex items-center gap-3 font-bold shadow-sm`}
            >
              {btn.icon === 'plus' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
              )}
              {btn.icon === 'user' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              )}
              {btn.icon === 'history' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              {btn.icon === 'alert' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              )}
              {btn.label}
            </motion.button>
          ))}
        </div>


        {/* Status Indicators */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Salud', value: crop.health, icon: 'check', color: 'bg-[#E6EFEC]' },
            { label: 'Fase actual', value: crop.phase, icon: 'leaf', color: 'bg-[#E6EFEC]' },
            { label: 'Riesgo actual', value: crop.risk, icon: 'alert-circle', color: 'bg-[#FEE2E2]', textColor: 'text-[#EF4444]' },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-white p-4 rounded-[1.5rem] shadow-sm flex flex-col items-center text-center"
            >
              <span className="text-[13px] font-bold text-[#1A1C1B] mb-2">{stat.label}</span>
              <div className={`w-8 h-8 ${stat.color} rounded-full flex items-center justify-center mb-2`}>
                {stat.icon === 'check' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4D5D55]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                {stat.icon === 'leaf' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4D5D55]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C12 2 12 6 8 6C8 6 4 6 4 2C4 2 4 10 12 10V22H14V10C22 10 22 2 22 2C22 2 18 6 14 6C14 6 12 6 12 2Z" />
                  </svg>
                )}
                {stat.icon === 'alert-circle' && (
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${stat.textColor}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <span className="text-[14px] font-bold text-[#4D5D55]">{stat.value}</span>
            </motion.div>
          ))}
        </div>

        {/* AI Engine Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-[#1F2923] rounded-[2.5rem] p-8 text-white"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="bg-white text-[#1F2923] px-4 py-1.5 rounded-full text-[14px] font-black uppercase tracking-wider">
              motor inteligente del cultivo
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[20px]">💧</span>
              <span className="text-[18px] font-bold">Riego: Óptimo ✓</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[20px]">🌱</span>
              <span className="text-[18px] font-bold">Nutrición: Adecuada ✓</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[20px]">🛡️</span>
              <span className="text-[18px] font-bold">Plagas: Sin indicios ✓</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CropDetail;
