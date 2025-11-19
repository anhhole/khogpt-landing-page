import React from 'react';
import { Mic2, WifiOff, Send, Smartphone, Bell, Zap } from 'lucide-react';

const features = [
    {
        icon: <Mic2 className="w-6 h-6" />,
        title: "Hiểu giọng địa phương",
        desc: "Dù giọng Bắc, Trung hay Nam, KhoGPT đều hiểu. Nhận biết đơn vị lóng như '1 lốc', '1 cây', '1 bịch'."
    },
    {
        icon: <WifiOff className="w-6 h-6" />,
        title: "Offline First",
        desc: "Sử dụng giao thức TOON tối ưu dữ liệu. Hoạt động mượt mà ngay cả khi mất mạng hoặc dùng 3G hết dung lượng."
    },
    {
        icon: <Send className="w-6 h-6" />,
        title: "Tích hợp Telegram",
        desc: "Không cần cài thêm app quản lý phức tạp cho chủ. Nhận báo cáo doanh thu, tồn kho ngay trên Telegram."
    },
    {
        icon: <Smartphone className="w-6 h-6" />,
        title: "Giao diện tối giản",
        desc: "Chữ to, độ tương phản cao, nền tối giúp tiết kiệm pin và dễ nhìn trong điều kiện kho thiếu sáng."
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Tốc độ cực nhanh",
        desc: "Không loading, không quay vòng tròn. Mở app là nói, nói là xong."
    },
    {
        icon: <Bell className="w-6 h-6" />,
        title: "Cảnh báo sắp hết hàng",
        desc: "Thiết lập định mức tối thiểu. Nhận cảnh báo đỏ trên app và tin nhắn Telegram ngay khi hàng sắp hết."
    }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Tính năng cốt lõi</h2>
          <p className="text-zinc-400">Được xây dựng từ thực tế vận hành của 100+ chủ tạp hóa.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
                <div key={i} className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors group">
                    <div className="w-12 h-12 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-primary/50 group-hover:text-primary transition-colors text-zinc-300">
                        {f.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                    <p className="text-zinc-400 leading-relaxed text-sm">
                        {f.desc}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};