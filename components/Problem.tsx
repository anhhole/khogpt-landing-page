import React from 'react';
import { X, Check, FileSpreadsheet, Keyboard, Smartphone, Mic, Zap, MessageCircle, AlertTriangle } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-zinc-900/50 border-y border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Tại sao kho hàng hỗn loạn?</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Phần mềm hiện tại được thiết kế cho nhân viên văn phòng ngồi điều hòa, 
            không phải cho người đang bưng bê thùng hàng.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* The Old Way */}
          <div className="bg-zinc-950/50 border border-red-900/20 rounded-2xl p-8 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0"></div>
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-red-200">Cách cũ (KiotViet, Excel)</h3>
             </div>
             
             <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <FileSpreadsheet className="w-5 h-5 text-zinc-500 mt-1" />
                    <div>
                        <strong className="text-zinc-300 block">Giao diện ma trận Excel</strong>
                        <p className="text-sm text-zinc-500">Quá nhiều cột, dòng, nút bấm nhỏ xíu.</p>
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <Keyboard className="w-5 h-5 text-zinc-500 mt-1" />
                    <div>
                        <strong className="text-zinc-300 block">Bàn phím ảo phiền phức</strong>
                        <p className="text-sm text-zinc-500">Tay dính dầu mỡ, mồ hôi bấm toàn sai.</p>
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-zinc-500 mt-1" />
                    <div>
                        <strong className="text-zinc-300 block">Quên nhập hàng</strong>
                        <p className="text-sm text-zinc-500">Hết hàng không biết, khách hỏi mới cuống cuồng đi tìm.</p>
                    </div>
                </li>
             </ul>
          </div>

          {/* The KhoGPT Way */}
          <div className="bg-zinc-900 border border-primary/20 rounded-2xl p-8 relative overflow-hidden shadow-2xl shadow-primary/5">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0"></div>
             <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Cách của KhoGPT</h3>
             </div>
             
             <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <Mic className="w-5 h-5 text-primary mt-1" />
                    <div>
                        <strong className="text-white block">Nói là Nhập</strong>
                        <p className="text-sm text-zinc-400">"Về 5 thùng bia" - Xong trong 1 giây.</p>
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-primary mt-1" />
                    <div>
                        <strong className="text-white block">Giao diện AI tự sinh</strong>
                        <p className="text-sm text-zinc-400">Chỉ hiện nút bạn cần (Nhập/Xuất) đúng lúc.</p>
                    </div>
                </li>
                <li className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-primary mt-1" />
                    <div>
                        <strong className="text-white block">Cảnh báo hết hàng</strong>
                        <p className="text-sm text-zinc-400">Tự động nhắn tin Telegram nhắc chủ shop nhập thêm.</p>
                    </div>
                </li>
             </ul>
          </div>

        </div>
      </div>
    </section>
  );
};