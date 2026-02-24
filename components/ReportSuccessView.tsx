
import React from 'react';
import { motion } from 'motion/react';

interface ReportSuccessViewProps {
  onAccept: () => void;
  onViewReport: () => void;
}

const ReportSuccessView: React.FC<ReportSuccessViewProps> = ({ onAccept, onViewReport }) => {
  return (
    <div className="flex flex-col h-full bg-[#F5F7F6] px-6 py-12">
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', damping: 12 }}
          className="w-32 h-32 bg-[#4D5D55] rounded-full flex items-center justify-center text-white mb-8 shadow-xl"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>

        <h1 className="text-[32px] font-black text-[#1A1C1B] mb-12 leading-tight">
          Reporte realizado con exito
        </h1>

        <div className="flex gap-4 w-full">
          <button 
            onClick={onAccept}
            className="flex-1 bg-[#1A1C1B] text-white py-5 rounded-2xl text-[18px] font-black shadow-lg active:scale-95 transition-transform"
          >
            Aceptar
          </button>
          <button 
            onClick={onViewReport}
            className="flex-1 bg-[#DDE4E1] text-[#1A1C1B] py-5 rounded-2xl text-[18px] font-black shadow-sm active:scale-95 transition-transform"
          >
            Ver reporte
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportSuccessView;
