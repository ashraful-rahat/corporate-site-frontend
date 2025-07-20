"use client";

import { AlertTriangle, Trash2, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./dialog";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  isLoading?: boolean;
  type?: "danger" | "warning" | "info";
}

const ConfirmModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  isLoading = false,
  type = "danger",
}: ConfirmModalProps) => {
  const getTypeStyles = () => {
    switch (type) {
      case "danger":
        return {
          icon: Trash2,
          iconColor: "text-red-600",
          bgColor: "bg-red-50",
          buttonColor: "bg-red-600 hover:bg-red-700",
        };
      case "warning":
        return {
          icon: AlertTriangle,
          iconColor: "text-yellow-600",
          bgColor: "bg-yellow-50",
          buttonColor: "bg-yellow-600 hover:bg-yellow-700",
        };
      default:
        return {
          icon: AlertTriangle,
          iconColor: "text-blue-600",
          bgColor: "bg-blue-50",
          buttonColor: "bg-blue-600 hover:bg-blue-700",
        };
    }
  };

  const styles = getTypeStyles();
  const IconComponent = styles.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white rounded-xl shadow-2xl border-0 p-0">
        <DialogHeader className="px-6 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold text-gray-900">{title}</DialogTitle>
            <button
              onClick={onClose}
              disabled={isLoading}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200 group disabled:opacity-50"
            >
              <X className="h-5 w-5 text-gray-500 group-hover:text-gray-700 transition-colors" />
            </button>
          </div>
        </DialogHeader>
        
        <div className="px-6 py-6">
          <div className="flex items-start space-x-4">
            <div className={`flex-shrink-0 w-12 h-12 ${styles.bgColor} rounded-full flex items-center justify-center`}>
              <IconComponent className={`h-6 w-6 ${styles.iconColor}`} />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-700 leading-relaxed">{message}</p>
            </div>
          </div>
          
          <div className="flex gap-3 mt-6">
            <button
              onClick={onConfirm}
              disabled={isLoading}
              className={`flex-1 text-white py-2.5 px-4 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] ${styles.buttonColor}`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Deleting...
                </div>
              ) : (
                confirmText
              )}
            </button>
            <button
              onClick={onClose}
              disabled={isLoading}
              className="px-4 py-2.5 border-2 border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {cancelText}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmModal; 