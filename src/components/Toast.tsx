import { useEffect, useState } from 'react';
import { Clock, Check } from 'lucide-react';

interface ToastProps {
  message: string;
  visible: boolean;
  onHide: () => void;
  success?: boolean;
}

const Toast = ({ message, visible, onHide, success = true }: ToastProps) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(onHide, 3000);
      return () => clearTimeout(timer);
    }
  }, [visible, onHide]);

  if (!visible) return null;

  return (
    <div className="fixed top-20 right-4 z-[90] bg-white dark:bg-brand-card border border-neutral-200 dark:border-brand-border-light rounded-xl shadow-2xl px-5 py-3.5 toast-slide max-w-sm">
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${success ? 'bg-green-50 dark:bg-green-900/15' : 'bg-yellow-100 dark:bg-yellow-900/30'}`}>
          {success ? (
            <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
          ) : (
            <Clock className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
          )}
        </div>
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  );
};

export default Toast;
