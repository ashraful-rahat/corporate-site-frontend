"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";

interface FileUploadProps {
  onChange: (files: File[]) => void;
  value?: File[];
  maxFiles?: number;
  maxSize?: number;
  accept?: Record<string, string[]>;
  className?: string;
  label?: string;
  error?: string;
}

const FileUpload = ({
  onChange,
  value = [],
  maxFiles = 1,
  maxSize = 10 * 1024 * 1024,  
  accept = {
    "image/*": [".png", ".jpg", ".jpeg", ".gif"],
  },
  className,
  label,
  error,
}: FileUploadProps) => {

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length + value.length > maxFiles) {
        return;
      }

      // Create preview URLs for images
      // const newPreviews = acceptedFiles.map((file) => URL.createObjectURL(file));
      // setPreviews((prev) => [...prev, ...newPreviews]);

      onChange([...value, ...acceptedFiles]);
    },
    [maxFiles, onChange, value]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles,
    maxSize,
    accept,
  });

  // Remove unused removeFile function

  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
          {label}
        </label>
      )}
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
          isDragActive
            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
            : "border-gray-300 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-600",
          error && "border-red-500",
          className
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-2">
          <Upload className="h-8 w-8 text-gray-400" />
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>
                Drag & drop files here, or click to select files
                <br />
                <span className="text-xs">
                  (Max {maxFiles} file{maxFiles > 1 ? "s" : ""}, up to{" "}
                  {maxSize / 1024 / 1024}MB)
                </span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Remove preview rendering logic */}
      {error && (
        <p className="text-sm text-red-500 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};

export default FileUpload; 