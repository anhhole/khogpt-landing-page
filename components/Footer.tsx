import React from 'react';
import { Mic } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center">
                        <Mic className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg font-bold text-white">KhoGPT</span>
                </div>
                <p className="text-zinc-500 text-sm max-w-xs">
                    Giải pháp quản lý kho bằng giọng nói tiên phong tại Việt Nam. Giúp chủ cửa hàng rảnh tay, bớt việc.
                </p>
            </div>
            
            <div className="flex gap-16 text-sm">
                <div>
                    <h4 className="font-bold text-white mb-4">Sản phẩm</h4>
                    <ul className="space-y-2 text-zinc-500">
                        <li><a href="#" className="hover:text-white">Tính năng</a></li>
                        <li><a href="#" className="hover:text-white">Bảng giá</a></li>
                        <li><a href="#" className="hover:text-white">Tải ứng dụng</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-4">Liên hệ</h4>
                    <ul className="space-y-2 text-zinc-500">
                        <li><a href="#" className="hover:text-white">Facebook</a></li>
                        <li><a href="#" className="hover:text-white">Telegram Channel</a></li>
                        <li><a href="#" className="hover:text-white">Hotline: 1900 xxxx</a></li>
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