import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
                <div className="flex items-center gap-3 mb-4 group cursor-default">
                    <div className="w-8 h-8 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg border border-zinc-700 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                        <Logo className="w-5 h-5 text-zinc-100" />
                    </div>
                    <span className="text-lg font-bold text-white tracking-tight">KhoGPT</span>
                </div>
                <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
                    Giải pháp quản lý kho bằng giọng nói tiên phong tại Việt Nam. Giúp chủ cửa hàng rảnh tay, bớt việc.
                </p>
            </div>
            
            <div className="flex gap-16 text-sm">
                <div>
                    <h4 className="font-bold text-white mb-4">Sản phẩm</h4>
                    <ul className="space-y-2 text-zinc-500">
                        <li><a href="#features" className="hover:text-white transition-colors">Tính năng</a></li>
                        <li><a href="#pricing" className="hover:text-white transition-colors">Bảng giá</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Tải ứng dụng</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-4">Liên hệ</h4>
                    <ul className="space-y-2 text-zinc-500">
                        <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Telegram Channel</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Hotline: 1900 xxxx</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-900 text-center text-xs text-zinc-600">
            © 2024 KhoGPT. Made with precision for Vietnam.
        </div>
      </div>
    </footer>
  );
};