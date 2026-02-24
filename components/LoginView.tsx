
import React, { useState } from 'react';
import { motion } from 'motion/react';

interface LoginViewProps {
  onLogin: () => void;
  onGoToRegister: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin, onGoToRegister }) => {
  const [email, setEmail] = useState('demo@email.com');
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col h-full bg-[#F5F7F6] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-[#4D5D55] rounded-b-[4rem] overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm66-3c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-40-39c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm29 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM32 5c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM54 96c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM66 30c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM4 49c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm88 37c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM80 63c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM16 20c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm20 0c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm20 0c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm20 0c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
      </div>

      <div className="flex-grow flex flex-col justify-end px-10 pb-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-[48px] font-black text-[#1A1C1B] mb-12">Login</h1>
          
          <div className="space-y-8 mb-12">
            <div className="space-y-2">
              <label className="text-[16px] font-bold text-[#4D5D55]">Correo</label>
              <div className="flex items-center gap-3 border-b-2 border-[#1A1C1B] pb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4D5D55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 w-full text-[18px] font-medium text-[#1A1C1B] placeholder-[#9CA3AF]"
                  placeholder="demo@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[16px] font-bold text-[#4D5D55]">Contraseña</label>
              <div className="flex items-center gap-3 border-b-2 border-[#1A1C1B] pb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#4D5D55]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-transparent border-none focus:ring-0 w-full text-[18px] font-medium text-[#1A1C1B] placeholder-[#9CA3AF]"
                  placeholder="Ingresa tu contraseña"
                />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#9CA3AF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onLogin}
            className="w-full bg-[#1A1C1B] text-white py-5 rounded-2xl text-[20px] font-black shadow-xl mb-8"
          >
            Login
          </motion.button>

          <p className="text-center text-[16px] font-medium text-[#4D5D55]">
            No tienes unca cuenta? <button onClick={onGoToRegister} className="font-black text-[#1A1C1B]">Crea una</button>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginView;
