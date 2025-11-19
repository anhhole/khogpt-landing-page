import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Box, ArrowRight, CheckCircle2, Send, Bell } from 'lucide-react';

export const VoiceSimulation: React.FC = () => {
  const [step, setStep] = useState<0 | 1 | 2 | 3 | 4>(0);

  useEffect(() => {
    const loop = async () => {
      // Step 0: Idle/Listening
      setStep(0);
      await new Promise(r => setTimeout(r, 1000));
      
      // Step 1: Speaking "Về 50 thùng Hảo Hảo"
      setStep(1);
      await new Promise(r => setTimeout(r, 2500)); // Time to read text

      // Step 2: Processing/Generative UI
      setStep(2);
      await new Promise(r => setTimeout(r, 1500));

      // Step 3: Success/Telegram Push
      setStep(3);
      await new Promise(r => setTimeout(r, 2000));
      
      // Step 4: Telegram Low Stock Alert
      setStep(4);
      await new Promise(r => setTimeout(r, 3500));

      loop();
    };
    loop();
  }, []);

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Phone Mockup Frame */}
      <div className="relative z-10 bg-zinc-900 border-[8px] border-zinc-800 rounded-[3rem] h-[600px] overflow-hidden shadow-2xl shadow-black/50">
        
        {/* Status Bar */}
        <div className="absolute top-0 w-full h-6 bg-zinc-950 flex justify-between px-6 py-2 items-center z-20">
          <div className="text-[10px] text-zinc-500 font-mono">VN MOBIFONE</div>
          <div className="flex gap-1">
             <div className="w-3 h-3 rounded-full bg-zinc-800"></div>
          </div>
        </div>

        {/* Dynamic Notch/Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>

        {/* Main Screen Content */}
        <div className="h-full flex flex-col bg-zinc-950 pt-12 px-4 pb-8 relative">
            
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10" 
                 style={{ backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col justify-center items-center relative">
                <AnimatePresence mode='wait'>
                    
                    {/* STATE 0: Idle */}
                    {step === 0 && (
                        <motion.div 
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center relative">
                                <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping"></div>
                                <Mic className="w-8 h-8 text-primary" />
                            </div>
                            <p className="text-zinc-500 text-sm">Đang lắng nghe...</p>
                        </motion.div>
                    )}

                    {/* STATE 1: Speech Text */}
                    {step === 1 && (
                        <motion.div 
                            key="speech"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="text-center px-4"
                        >
                            <p className="text-2xl font-bold text-white leading-relaxed">
                                "Về <span className="text-primary">50 thùng</span><br/>mì Hảo Hảo"
                            </p>
                        </motion.div>
                    )}

                    {/* STATE 2: Generative Card UI */}
                    {step === 2 && (
                        <motion.div 
                            key="card"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 1.1, opacity: 0 }}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-lg"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex gap-3">
                                    <div className="w-12 h-12 bg-pink-100 rounded-md flex items-center justify-center">
                                       <Box className="text-pink-600" /> 
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Mì Hảo Hảo</h3>
                                        <p className="text-xs text-zinc-400">Tôm Chua Cay</p>
                                    </div>
                                </div>
                                <span className="px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded font-mono">
                                    NHẬP KHO
                                </span>
                            </div>
                            
                            <div className="flex items-center justify-between bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                                <span className="text-zinc-400 text-sm">Số lượng</span>
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl font-bold text-primary">+50</span>
                                    <span className="text-sm text-zinc-500">Thùng</span>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* STATE 3: Success / Telegram */}
                    {step === 3 && (
                        <motion.div 
                            key="success"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/20">
                                <CheckCircle2 className="w-8 h-8 text-black" />
                            </div>
                            <p className="text-white font-medium">Đã lưu & Báo cáo Telegram</p>
                            
                            <div className="flex items-center gap-2 mt-4 px-4 py-2 bg-[#229ED9]/10 border border-[#229ED9]/30 rounded-full">
                                <Send className="w-3 h-3 text-[#229ED9]" />
                                <span className="text-[#229ED9] text-xs font-bold">Telegram Sent</span>
                            </div>
                        </motion.div>
                    )}

                    {/* STATE 4: Low Stock Alert (Telegram) */}
                    {step === 4 && (
                        <motion.div 
                            key="alert"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            className="w-full"
                        >
                             <div className="bg-zinc-800/90 backdrop-blur border-l-4 border-red-500 rounded-lg p-4 shadow-xl relative overflow-hidden">
                                <div className="absolute right-2 top-2 opacity-10">
                                    <Bell className="w-12 h-12 text-red-500" />
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 bg-[#229ED9] rounded-full flex items-center justify-center">
                                        <Send className="w-4 h-4 text-white ml-0.5" />
                                    </div>
                                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Telegram Alert</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Cảnh báo tồn kho thấp!</h4>
                                    <p className="text-sm text-zinc-300">
                                        Sản phẩm <span className="text-white font-bold">Bia Tiger</span> chỉ còn <span className="text-red-400 font-bold">2 thùng</span> (Định mức: 10).
                                    </p>
                                </div>
                             </div>
                             <div className="mt-4 text-center">
                                <span className="text-xs text-zinc-500 animate-pulse">Đang tự động gửi tin nhắn cho Chủ Shop...</span>
                             </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>

            {/* Bottom Floating Action Button (Simulated) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-orange-500/20 cursor-pointer hover:scale-105 transition-transform">
                <Mic className="w-6 h-6 text-white" />
            </div>
        </div>
      </div>
      
      {/* Decorative Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] -z-10 rounded-full"></div>
    </div>
  );
};