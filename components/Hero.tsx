import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Loader2 } from 'lucide-react';
import { VoiceSimulation } from './VoiceSimulation';

export const Hero: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Sắp ra mắt (Coming Soon)
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Quản lý kho <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300">
                không cần gõ phím
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Trợ lý ảo AI biến giọng nói thành đơn hàng. Chúng tôi đang hoàn thiện sản phẩm để mang đến trải nghiệm tốt nhất.
            </p>
            
            {/* Early Access Form */}
            <div id="waitlist" className="max-w-md mx-auto lg:mx-0">
                {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3 bg-zinc-900/50 p-5 rounded-xl border border-zinc-800 backdrop-blur-sm shadow-2xl shadow-black/50">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <Sparkles className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm">Đăng ký Early Access</h3>
                                <p className="text-xs text-zinc-500">Nhận ưu đãi trọn đời khi ra mắt</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-3">
                            <div>
                                <input 
                                    required
                                    type="text" 
                                    placeholder="Họ và tên của bạn" 
                                    className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-3 outline-none transition-all placeholder:text-zinc-600"
                                />
                            </div>
                            <div>
                                <input 
                                    required
                                    type="email" 
                                    placeholder="Email của bạn" 
                                    className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg focus:ring-primary focus:border-primary block p-3 outline-none transition-all placeholder:text-zinc-600"
                                />
                            </div>
                            <button 
                                disabled={isLoading}
                                className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-1"
                            >
                                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Tham gia danh sách chờ'}
                                {!isLoading && <ArrowRight className="w-4 h-4" />}
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-xl text-center animate-in fade-in zoom-in duration-300">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Check className="w-6 h-6 text-green-500" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-1">Đã đăng ký thành công!</h3>
                        <p className="text-zinc-400 text-sm">
                            Cảm ơn bạn. Chúng tôi sẽ gửi thông báo qua email ngay khi KhoGPT sẵn sàng trải nghiệm.
                        </p>
                    </div>
                )}
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-zinc-500">
                <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Không cần Wifi</span>
                </div>
                <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span>Hiểu giọng vùng miền</span>
                </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex-1 w-full max-w-[500px] lg:max-w-none hidden md:block">
            <VoiceSimulation />
          </div>

        </div>
      </div>

    </section>
  );
};