import React from 'react';
import { Mic2, WifiOff, Send, Bell, Zap, LayoutDashboard } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, desc, icon, className }: { title: string, desc: string, icon: React.ReactNode, className?: string }) => (
    <div className={cn("group relative rounded-3xl bg-zinc-900/20 border border-zinc-800/50 p-8 hover:bg-zinc-900/40 transition-all duration-500", className)}>
        {/* Hover Gradient Border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border border-white/5"></div>
        
        <div className="relative z-10">
            <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/30 transition-all duration-500 shadow-lg shadow-black/50">
                {React.cloneElement(icon as React.ReactElement, { className: "w-6 h-6 text-zinc-400 group-hover:text-primary transition-colors duration-300" })}
            </div>
            <h3 className="text-xl font-heading font-bold text-white mb-3">{title}</h3>
            <p className="text-zinc-400 leading-relaxed text-sm group-hover:text-zinc-300 transition-colors">
                {desc}
            </p>
        </div>
    </div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 bg-zinc-950 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-4xl font-heading font-bold text-white mb-6">Công nghệ lõi</h2>
          <p className="text-xl text-zinc-400">
            Được xây dựng từ con số 0 với tư duy "AI First" - Giải quyết triệt để những nỗi đau của chủ cửa hàng tạp hóa Việt Nam.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
            <motion.div variants={itemVariants} className="md:col-span-2">
                <FeatureCard 
                    title="Hiểu giọng địa phương" 
                    desc="Công nghệ Voice-to-Text được tinh chỉnh cho tiếng Việt, hiểu rõ giọng vùng miền Bắc - Trung - Nam và các đơn vị lóng như 'lốc', 'két', 'cây'."
                    icon={<Mic2 />}
                    className="h-full"
                />
            </motion.div>
            <motion.div variants={itemVariants}>
                <FeatureCard 
                    title="Offline First" 
                    desc="Mất mạng? Không sao. Dữ liệu tự động đồng bộ khi có kết nối trở lại."
                    icon={<WifiOff />}
                    className="h-full"
                />
            </motion.div>
            <motion.div variants={itemVariants}>
                <FeatureCard 
                    title="Tích hợp Telegram" 
                    desc="Nhận báo cáo doanh thu, tồn kho ngay trên ứng dụng chat quen thuộc."
                    icon={<Send />}
                    className="h-full"
                />
            </motion.div>
            <motion.div variants={itemVariants}>
                <FeatureCard 
                    title="Giao diện tối giản" 
                    desc="Thiết kế High Contrast giúp dễ nhìn trong kho tối. Nút bấm lớn, thao tác một tay."
                    icon={<LayoutDashboard />}
                    className="h-full"
                />
            </motion.div>
            <motion.div variants={itemVariants}>
                <FeatureCard 
                    title="Tốc độ thời gian thực" 
                    desc="Phản hồi trong <100ms. Không độ trễ, không quay vòng tròn."
                    icon={<Zap />}
                    className="h-full"
                />
            </motion.div>
            <motion.div variants={itemVariants} className="md:col-span-3">
                <FeatureCard 
                    title="Cảnh báo thông minh" 
                    desc="Hệ thống tự động tính toán tốc độ bán hàng để cảnh báo nhập hàng trước khi kho trống rỗng."
                    icon={<Bell />}
                    className="bg-gradient-to-br from-zinc-900/40 to-zinc-900/10 h-full"
                />
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};