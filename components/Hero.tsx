import React, { useState } from 'react';
import { ArrowRight, Check, Loader2, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { VoiceSimulation } from './VoiceSimulation';
import { ParticleBackground } from './ParticleBackground';

// REPLACE THIS WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxv7M2m4knBwmuLtrn33y_EL7-Ccl6aN3XD0Ti90XSxDJlznQEZVc_KbFNGnCLZifVM/exec";

export const Hero: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);
  const yVisual = useTransform(scrollY, [0, 500], [0, -50]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // We use 'no-cors' mode because Google Apps Script doesn't support CORS headers perfectly for simple POSTs.
      // This means we won't get a readable JSON response, but the data WILL be sent to the sheet.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' 
      });

      // Since we can't read the response in no-cors, we assume success if no network error occurred.
      setIsSubmitted(true);
      form.reset();
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Có lỗi xảy ra. Vui lòng thử lại sau.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-32 overflow-hidden min-h-screen flex items-center bg-[#050505]">
      
      {/* Dynamic Particle Background */}
      <ParticleBackground />

      {/* Spotlight Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent opacity-40 pointer-events-none blur-3xl z-0"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent z-0"></div>

      {/* Static Grid Background (Lower opacity to blend with particles) */}
      <div className="absolute inset-0 z-0 bg-grid-white opacity-10 pointer-events-none mask-image-gradient"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* Left Content */}
          <motion.div 
            style={{ y: yText, opacity: opacityText }}
            className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none mx-auto"
          >
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs font-semibold text-zinc-300 mb-8 backdrop-blur-sm shadow-[0_0_15px_-3px_rgba(249,115,22,0.15)] hover:border-primary/30 transition-colors cursor-default"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="tracking-wide uppercase">AI Warehouse Agent</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-white mb-6 leading-[1.1]"
            >
              Quản lý kho <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
                chỉ bằng lời nói
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Trợ lý AI đầu tiên giúp bạn nhập hàng, kiểm kho và xem báo cáo ngay lập tức. 
              <span className="text-white font-medium"> Không chạm. Không độ trễ.</span>
            </motion.p>
            
            {/* Early Access Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              id="waitlist" 
              className="max-w-md mx-auto lg:mx-0 relative group"
            >
                {/* Glow behind form */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-pink-600/30 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                
                <div className="relative bg-[#0A0A0C] border border-zinc-800/80 p-6 rounded-2xl shadow-2xl backdrop-blur-sm">
                  {!isSubmitted ? (
                      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                          <div className="flex items-center gap-3 mb-2">
                              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                                  <Sparkles className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                  <h3 className="text-white font-bold font-heading text-lg">Tham gia Early Access</h3>
                                  <p className="text-xs text-zinc-500">Nhận ưu đãi 50% trọn đời</p>
                              </div>
                          </div>
                          
                          <div className="space-y-3">
                              <div className="relative group/input">
                                  <input 
                                      required
                                      name="name"
                                      type="text" 
                                      placeholder="Họ và tên" 
                                      className="w-full bg-zinc-900/40 border border-zinc-800 focus:border-primary/50 focus:bg-zinc-900/60 text-white text-sm rounded-xl block p-3.5 outline-none transition-all placeholder:text-zinc-600"
                                  />
                              </div>
                              <div className="relative group/input">
                                  <input 
                                      required
                                      name="email"
                                      type="email" 
                                      placeholder="Email công việc" 
                                      className="w-full bg-zinc-900/40 border border-zinc-800 focus:border-primary/50 focus:bg-zinc-900/60 text-white text-sm rounded-xl block p-3.5 outline-none transition-all placeholder:text-zinc-600"
                                  />
                              </div>
                              <button 
                                  disabled={isLoading}
                                  className="relative w-full bg-white hover:bg-zinc-200 text-black font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-2 overflow-hidden group/btn"
                              >
                                  {/* Shimmer effect */}
                                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover/btn:animate-shimmer" />
                                  
                                  <span className="relative z-10 flex items-center gap-2">
                                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Đăng ký ngay'}
                                    {!isLoading && <ArrowRight className="w-4 h-4" />}
                                  </span>
                              </button>
                              {error && <p className="text-red-500 text-xs text-center mt-2">{error}</p>}
                          </div>
                      </form>
                  ) : (
                      <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                          <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-green-500/5">
                              <Check className="w-8 h-8 text-green-500" />
                          </div>
                          <h3 className="text-white font-bold text-xl mb-2 font-heading">Đã đăng ký thành công!</h3>
                          <p className="text-zinc-400 text-sm max-w-xs mx-auto">
                              Cảm ơn bạn đã quan tâm. Chúng tôi sẽ gửi quyền truy cập sớm qua email của bạn.
                          </p>
                      </div>
                  )}
                </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-medium text-zinc-500"
            >
                <div className="flex items-center gap-2 bg-zinc-900/50 px-3 py-1.5 rounded-lg border border-zinc-800">
                    <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Bảo mật dữ liệu tuyệt đối</span>
                </div>
                <div className="flex items-center gap-2 bg-zinc-900/50 px-3 py-1.5 rounded-lg border border-zinc-800">
                    <Check className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Setup trong 5 phút</span>
                </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            style={{ y: yVisual }}
            className="flex-1 w-full flex justify-center items-center relative perspective-1000 min-h-[800px] lg:min-h-[900px]"
          >
             {/* Ambient Light Behind Phone */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full pointer-events-none z-0"></div>
             
             {/* Phone Component */}
             <div className="relative z-10 transform rotate-y-[-6deg] rotate-x-[2deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out">
                <VoiceSimulation />
             </div>
          </motion.div>

        </div>
      </div>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
};