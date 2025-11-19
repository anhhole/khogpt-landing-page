import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Box, CheckCircle2, Send } from 'lucide-react';

export const VoiceSimulation: React.FC = () => {
  const [step, setStep] = useState<0 | 1 | 2 | 3 | 4>(0);

  useEffect(() => {
    const loop = async () => {
      setStep(0);
      await new Promise(r => setTimeout(r, 1500));
      setStep(1);
      await new Promise(r => setTimeout(r, 2500)); 
      setStep(2);
      await new Promise(r => setTimeout(r, 2000));
      setStep(3);
      await new Promise(r => setTimeout(r, 2500));
      setStep(4);
      await new Promise(r => setTimeout(r, 4000));
      loop();
    };
    loop();
  }, []);

  return (
    <div className="relative mx-auto animate-float z-20" style={{ width: '370px', height: '780px' }}>
      
      {/* iPhone 17 Frame Container */}
      <div className="relative h-full w-full bg-zinc-950 rounded-[56px] shadow-[0_0_2px_2px_rgba(255,255,255,0.05),0_20px_50px_-12px_rgba(0,0,0,0.9)] overflow-hidden border-[6px] border-[#27272a]">
        
        {/* Titanium Frame Simulation */}
        <div className="absolute inset-0 rounded-[50px] border border-white/10 z-50 pointer-events-none"></div>
        <div className="absolute -inset-[2px] rounded-[58px] border border-zinc-800/50 z-0 pointer-events-none"></div>
        
        {/* Status Bar */}
        <div className="absolute top-0 w-full h-14 flex justify-between px-8 items-center z-30 pt-2">
          <span className="text-[15px] font-semibold text-white tracking-wide">9:41</span>
          <div className="flex gap-2 items-center">
             <div className="w-[18px] h-[11px] rounded-[2px] border-[1.5px] border-zinc-500 flex items-center justify-start px-[1px]">
                <div className="w-3 h-[5px] bg-white rounded-[1px]"></div>
             </div>
          </div>
        </div>

        {/* Dynamic Island - Refined */}
        <div className="absolute top-[11px] left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-40 flex items-center justify-center ring-1 ring-zinc-800/50">
           <div className="w-20 h-20 bg-black rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-md opacity-50"></div>
        </div>

        {/* Main Screen Content */}
        <div className="h-full flex flex-col bg-gradient-to-b from-zinc-900 to-zinc-950 pt-20 px-6 pb-10 relative">
            
            {/* Subtle Grid on Screen */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center relative w-full">
                <AnimatePresence mode='wait'>
                    
                    {/* STATE 0: Idle */}
                    {step === 0 && (
                        <motion.div 
                            key="idle"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="flex flex-col items-center gap-6"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
                                <div className="w-28 h-28 rounded-full bg-gradient-to-b from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center shadow-xl relative z-10">
                                    <Mic className="w-12 h-12 text-primary" />
                                </div>
                            </div>
                            <p className="text-zinc-400 font-medium text-lg">Đang nghe...</p>
                        </motion.div>
                    )}

                    {/* STATE 1: Speech Text */}
                    {step === 1 && (
                        <motion.div 
                            key="speech"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="text-center w-full"
                        >
                            <div className="bg-zinc-800/50 backdrop-blur-md rounded-2xl p-8 border border-zinc-700/50 shadow-lg">
                                <p className="text-2xl font-medium text-white leading-relaxed">
                                    "Về <span className="text-primary font-bold">50 thùng</span><br/>mì Hảo Hảo"
                                </p>
                            </div>
                        </motion.div>
                    )}

                    {/* STATE 2: Generative UI Card */}
                    {step === 2 && (
                        <motion.div 
                            key="card"
                            initial={{ scale: 0.9, opacity: 0, rotateX: -10 }}
                            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                            exit={{ scale: 1.1, opacity: 0 }}
                            className="w-full bg-zinc-900/90 backdrop-blur-md border border-zinc-700/50 rounded-2xl p-6 shadow-2xl"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-xl flex items-center justify-center border border-pink-500/20">
                                       <Box className="w-8 h-8 text-pink-500" /> 
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-xl">Mì Hảo Hảo</h3>
                                        <p className="text-sm text-zinc-400 mt-1">Tôm Chua Cay</p>
                                    </div>
                                </div>
                                <span className="px-3 py-1.5 bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold rounded-lg tracking-wider">
                                    NHẬP
                                </span>
                            </div>
                            
                            <div className="flex items-center justify-between bg-black/40 p-5 rounded-xl border border-zinc-800/50">
                                <span className="text-zinc-400 font-medium">Số lượng</span>
                                <div className="flex items-end gap-2">
                                    <span className="text-5xl font-bold text-white tracking-tight">+50</span>
                                    <span className="text-base text-zinc-500 pb-1.5 font-medium">Thùng</span>
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
                            className="flex flex-col items-center gap-6"
                        >
                            <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                >
                                   <CheckCircle2 className="w-12 h-12 text-white" />
                                </motion.div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-white font-bold text-xl">Đã cập nhật kho</h3>
                                <p className="text-zinc-500 text-base mt-1">Đang đồng bộ...</p>
                            </div>
                            
                            <div className="flex items-center gap-2 mt-2 px-6 py-3 bg-[#229ED9]/10 border border-[#229ED9]/30 rounded-full">
                                <Send className="w-5 h-5 text-[#229ED9]" />
                                <span className="text-[#229ED9] text-sm font-bold">Đã gửi Telegram</span>
                            </div>
                        </motion.div>
                    )}

                    {/* STATE 4: Telegram Notification */}
                    {step === 4 && (
                        <motion.div 
                            key="alert"
                            initial={{ y: -50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            className="w-full"
                        >
                             <div className="bg-[#1c242d] border border-zinc-700/50 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
                                <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-4">
                                    <div className="w-12 h-12 bg-[#229ED9] rounded-full flex items-center justify-center shrink-0">
                                        <Send className="w-6 h-6 text-white ml-0.5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-base">KhoGPT Bot</h4>
                                        <p className="text-xs text-blue-400">vừa xong</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-base text-zinc-200 leading-relaxed">
                                        🚨 <b>CẢNH BÁO TỒN KHO</b><br/>
                                        ------------------<br/>
                                        Sản phẩm: <b>Bia Tiger</b><br/>
                                        Hiện tại: <span className="text-red-400 font-bold">02 thùng</span> 📉<br/>
                                        Định mức: 10 thùng<br/>
                                        <i className="text-zinc-500 text-sm block mt-2">Vui lòng nhập hàng gấp!</i>
                                    </p>
                                </div>
                             </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>

            {/* Bottom Action Button */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-to-r from-primary to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 ring-4 ring-black/20">
                <Mic className="w-8 h-8 text-white" />
            </div>
            
            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-white rounded-full opacity-40"></div>
        </div>
      </div>
      
      {/* Reflection on Screen */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent z-20 rounded-r-[50px] pointer-events-none"></div>
    </div>
  );
};