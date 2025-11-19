import React from 'react';
import { X, Check, FileSpreadsheet, Keyboard, Mic, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-32 bg-zinc-950 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">Tại sao kho hàng luôn rối tung?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Phần mềm hiện tại được thiết kế cho nhân viên văn phòng ngồi điều hòa, 
            không phải cho người đang bưng bê thùng hàng đầy dầu mỡ.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Old Way */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
             <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 lg:p-10 hover:bg-zinc-900/50 transition-all duration-500">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-heading font-bold text-zinc-500">Cách cũ</h3>
                    <div className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center">
                        <X className="w-6 h-6 text-zinc-500" />
                    </div>
                </div>
                
                <div className="space-y-6">
                    <div className="flex gap-4 opacity-60 group-hover:opacity-100 transition-opacity">
                        <div className="mt-1"><FileSpreadsheet className="w-6 h-6 text-zinc-600" /></div>
                        <div>
                            <h4 className="text-zinc-300 font-bold text-lg">Ma trận Excel</h4>
                            <p className="text-zinc-500 mt-1">Hàng trăm cột, dòng rối mắt. Bấm nhầm một số là sai cả tháng.</p>
                        </div>
                    </div>
                    <div className="flex gap-4 opacity-60 group-hover:opacity-100 transition-opacity">
                        <div className="mt-1"><Keyboard className="w-6 h-6 text-zinc-600" /></div>
                        <div>
                            <h4 className="text-zinc-300 font-bold text-lg">Nhập liệu thủ công</h4>
                            <p className="text-zinc-500 mt-1">Tay bẩn, mồ hôi rất khó thao tác trên màn hình cảm ứng hay bàn phím.</p>
                        </div>
                    </div>
                </div>
             </div>
          </motion.div>

          {/* The KhoGPT Way */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
             {/* Glow Effect */}
             <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
             
             <div className="relative bg-zinc-900 border border-zinc-700/50 rounded-3xl p-8 lg:p-10 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-heading font-bold text-white">KhoGPT</h3>
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                        <Check className="w-6 h-6 text-white" />
                    </div>
                </div>
                
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="mt-1 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <Mic className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">Nói là xong</h4>
                            <p className="text-zinc-400 mt-1">"Về 5 thùng bia" - Xử lý trong 1 giây. Không cần chạm tay vào điện thoại.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="mt-1 w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                            <MessageCircle className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">Báo cáo qua Telegram</h4>
                            <p className="text-zinc-400 mt-1">Tự động nhắn tin khi hàng sắp hết. Bạn không cần mở app để kiểm tra.</p>
                        </div>
                    </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};