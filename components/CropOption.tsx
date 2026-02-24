
import React from 'react';

interface CropOptionProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

const CropOption: React.FC<CropOptionProps> = ({ label, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-6 rounded-[1.8rem] transition-all border-2 ${
        isSelected 
          ? 'bg-[#EAF1EE] border-transparent' // En la imagen parecen no tener borde oscuro sino fondo sólido
          : 'bg-[#F9FAFA] border-transparent'
      } ${isSelected ? 'scale-[1.02]' : 'scale-100'}`}
    >
      <div className="w-[68px] h-[68px] bg-[#4D5D55] rounded-full flex items-center justify-center text-white mb-4 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C12 2 12 6 8 6C8 6 4 6 4 2C4 2 4 10 12 10V22H14V10C22 10 22 2 22 2C22 2 18 6 14 6C14 6 12 6 12 2Z" />
          <path d="M6 19H18V21C18 22.1 17.1 23 16 23H8C6.9 23 6 22.1 6 21V19Z" opacity="0.8" />
        </svg>
      </div>
      <span className="text-[17px] font-bold text-[#1A1C1B]">{label}</span>
    </button>
  );
};

export default CropOption;
