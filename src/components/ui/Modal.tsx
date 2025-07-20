"use client";

import { ReactNode } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./dialog";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-5xl max-h-[90vh]   bg-white rounded-xl shadow-2xl border-0 p-0">
        <DialogHeader className="px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white rounded-t-xl">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold text-gray-900">{title}</DialogTitle>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 group"
            >
              <X className="h-5 w-5 text-gray-500 group-hover:text-gray-700 transition-colors" />
            </button>
          </div>
        </DialogHeader>
        <div className="px-8 py-6 max-h-[calc(90vh-140px)] overflow-y-auto">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal; 