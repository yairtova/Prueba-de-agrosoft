
import React from 'react';
import { CropItem } from '../types';

interface CropCardProps {
  crop: CropItem;
  onClick?: () => void;
}

const CropCard: React.FC<CropCardProps> = ({ crop, onClick }) => {
  const isHecho = crop.status === 'Hecho';

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-[2rem] p-6 flex flex-col items-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-transform active:scale-[0.98] cursor-pointer"
    >
      <div className="w-[68px] h-[68px] bg-[#4D5D55] rounded-full flex items-center justify-center text-white mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C12 2 12 6 8 6C8 6 4 6 4 2C4 2 4 10 12 10V22H14V10C22 10 22 2 22 2C22 2 18 6 14 6C14 6 12 6 12 2Z" />
          <path d="M6 19H18V21C18 22.1 17.1 23 16 23H8C6.9 23 6 22.1 6 21V19Z" opacity="0.8" />
        </svg>
      </div>
      
      <h3 className="text-[19px] font-extrabold text-[#1A1C1B] mb-4 text-center leading-tight tracking-tight">
        {crop.name}
      </h3>
      
      <div className="w-full flex items-center justify-between mt-auto">
        <span className="text-[14px] font-bold text-[#1A1C1B] opacity-60">Dia {crop.day}</span>
        <div className={`px-4 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-tight ${
          isHecho ? 'bg-[#1A1C1B] text-white' : 'bg-[#E6EFEC] text-[#516C63]'
        }`}>
          {crop.status}
        </div>
      </div>
    </div>
  );
};

export default CropCard;
