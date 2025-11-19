import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white opacity-[0.02] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-wide text-zinc-300 mb-6 uppercase">
            Bảng giá dự kiến
          </div>
          <h2 className="text-4xl font-heading font-bold text-white mb-4">Đơn giản & Minh bạch</h2>
          <p className="text-zinc-400 text-lg">Đăng ký danh sách chờ hôm nay để nhận ưu đãi <span className="text-primary font-bold">50% trọn đời</span>.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Free Tier */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-10 bg-zinc-900/30 border border-zinc-800 rounded-[2rem] flex flex-col hover:bg-zinc-900/50 transition-colors"
            >
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-white">Miễn phí</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                        <span className="text-5xl font-bold text-white tracking-tight">0đ</span>
                        <span className="text-zinc-500 font-medium">/tháng</span>
                    </div>
                    <p className="mt-4 text-zinc-400">Dành cho cửa hàng nhỏ mới bắt đầu làm quen với công nghệ.</p>
                </div>
                <ul className="space-y-5 mb-10 flex-1">
                    {[
                        "Dưới 50 mã hàng (SKU)",
                        "Nhập liệu giọng nói cơ bản",
                        "Xuất file Excel báo cáo",
                        "Sử dụng trên 1 thiết bị"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                            <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                                <Check className="w-3 h-3 text-white" />
                            </div>
                            {item}
                        </li>
                    ))}
                </ul>
                <a href="#waitlist" className="w-full py-4 rounded-xl border border-zinc-700 text-white font-bold hover:bg-white hover:text-black transition-all text-center block">
                    Đăng ký chờ
                </a>
            </motion.div>

            {/* Pro Tier */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-1 bg-gradient-to-b from-zinc-700 to-zinc-900 rounded-[2rem]"
            >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-primary to-red-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap">
                        <Sparkles className="w-3 h-3" /> PHỔ BIẾN NHẤT
                    </div>
                </div>
                <div className="bg-zinc-900 h-full rounded-[1.9rem] p-9 flex flex-col relative overflow-hidden">
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

                    <div className="mb-8 relative z-10">
                        <h3 className="text-xl font-bold text-white">Pro</h3>
                        <div className="mt-4 flex items-baseline gap-1">
                            <span className="text-5xl font-bold text-white tracking-tight">99k</span>
                            <span className="text-zinc-500 font-medium">/tháng</span>
                        </div>
                        <p className="mt-4 text-zinc-400">Đầy đủ sức mạnh AI cho chủ cửa hàng chuyên nghiệp.</p>
                    </div>
                    <ul className="space-y-5 mb-10 flex-1 relative z-10">
                        {[
                            "Không giới hạn mã hàng",
                            "Voice AI Pro (Hiểu ngôn ngữ tự nhiên)",
                            "Tích hợp Bot Telegram báo cáo",
                            "Cảnh báo tồn kho thời gian thực",
                            "Hỗ trợ ưu tiên 24/7"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-white text-sm font-medium">
                                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <a href="#waitlist" className="relative z-10 w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-1 text-center block">
                        Đăng ký chờ ngay
                    </a>
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
};