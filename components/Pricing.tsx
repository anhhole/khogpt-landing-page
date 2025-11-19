import React from 'react';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-zinc-900/30 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 mb-4">
            Dự kiến
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Bảng giá chính thức</h2>
          <p className="text-zinc-400">Đăng ký danh sách chờ để nhận ưu đãi 50% trọn đời.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            
            {/* Free Tier */}
            <div className="p-8 bg-zinc-950 border border-zinc-800 rounded-2xl flex flex-col opacity-75 hover:opacity-100 transition-opacity">
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-white">Miễn phí</h3>
                    <div className="mt-2 flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-white">0đ</span>
                        <span className="text-zinc-500">/tháng</span>
                    </div>
                    <p className="mt-4 text-sm text-zinc-400">Dành cho cửa hàng nhỏ mới bắt đầu.</p>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-center gap-3 text-zinc-300 text-sm">
                        <Check className="w-4 h-4 text-zinc-500" /> Dưới 50 mã hàng (SKU)
                    </li>
                    <li className="flex items-center gap-3 text-zinc-300 text-sm">
                        <Check className="w-4 h-4 text-zinc-500" /> Nhập liệu giọng nói cơ bản
                    </li>
                    <li className="flex items-center gap-3 text-zinc-300 text-sm">
                        <Check className="w-4 h-4 text-zinc-500" /> Xuất file Excel
                    </li>
                </ul>
                <a href="#waitlist" className="w-full py-3 rounded-lg border border-zinc-700 text-white font-bold hover:bg-zinc-900 transition-colors text-center block">
                    Đăng ký chờ
                </a>
            </div>

            {/* Pro Tier */}
            <div className="p-8 bg-zinc-900 border border-primary/50 rounded-2xl flex flex-col relative">
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                    DỰ KIẾN
                </div>
                <div className="mb-6">
                    <h3 className="text-xl font-bold text-white">Pro</h3>
                    <div className="mt-2 flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-white">99.000đ</span>
                        <span className="text-zinc-500">/tháng</span>
                    </div>
                    <p className="mt-4 text-sm text-zinc-400">Dành cho cửa hàng tạp hóa, nhà phân phối.</p>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-center gap-3 text-white text-sm">
                        <Check className="w-4 h-4 text-primary" /> Không giới hạn mã hàng
                    </li>
                    <li className="flex items-center gap-3 text-white text-sm">
                        <Check className="w-4 h-4 text-primary" /> Giọng nói nâng cao (AI Pro)
                    </li>
                    <li className="flex items-center gap-3 text-white text-sm">
                        <Check className="w-4 h-4 text-primary" /> <strong>Cảnh báo tồn kho (Telegram)</strong>
                    </li>
                    <li className="flex items-center gap-3 text-white text-sm">
                        <Check className="w-4 h-4 text-primary" /> Báo cáo tự động qua Telegram
                    </li>
                    <li className="flex items-center gap-3 text-white text-sm">
                        <Check className="w-4 h-4 text-primary" /> Hỗ trợ ưu tiên 24/7
                    </li>
                </ul>
                <a href="#waitlist" className="w-full py-3 rounded-lg bg-primary text-white font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 text-center block">
                    Đăng ký chờ
                </a>
            </div>

        </div>
      </div>
    </section>
  );
};