"use client";

import { ReactNode } from "react";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import Modal from "./Modal";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  onSubmit: () => void;
  onCancel: () => void;
  isSubmitting: boolean;
  submitText: string;
  children: ReactNode;
}

const FormModal = ({
  isOpen,
  onClose,
  title,
  onSubmit,
  onCancel,
  isSubmitting,
  submitText,
  children,
}: FormModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {children}
        </div>
        
        <div className="flex gap-4 pt-6 border-t border-gray-200 mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <CheckCircle className="h-4 w-4" />
                {submitText}
              </>
            )}
          </button>
          <button
            type="button"
            onClick={onCancel}
            disabled={isSubmitting}
            className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center gap-2"
          >
            <XCircle className="h-4 w-4" />
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default FormModal; 