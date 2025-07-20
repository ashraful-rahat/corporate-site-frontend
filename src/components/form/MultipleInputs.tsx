"use client";

import { useState, KeyboardEvent } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface MultipleInputsProps {
  value: string[];
  onChange: (value: string[]) => void;
  placeholder?: string;
  className?: string;
  label?: string;
  error?: string;
  maxTags?: number;
  separator?: string;
  description?: string;
}

const MultipleInputs = ({
  value,
  onChange,
  placeholder = "Type and press enter...",
  className,
  label,
  error,
  maxTags = 10,
  separator = ",",
  description,
}: MultipleInputsProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === separator) {
      e.preventDefault();
      const newTag = inputValue.trim();
      
      if (newTag && !value.includes(newTag) && value.length < maxTags) {
        onChange([...value, newTag]);
        setInputValue("");
      }
    } else if (e.key === "Backspace" && !inputValue && value.length > 0) {
      // Remove last tag when backspace is pressed and input is empty
      onChange(value.slice(0, -1));
    }
  };

  const removeTag = (tagToRemove: string) => {
    onChange(value.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </label>
      )}
      <div
        className={cn(
          "flex flex-wrap gap-2 p-2 border rounded-md bg-background",
          error
            ? "border-destructive focus-within:ring-2 focus-within:ring-destructive"
            : "border-input focus-within:ring-2 focus-within:ring-ring",
          className
        )}
      >
        {value.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 px-2 py-1 text-sm bg-accent text-accent-foreground rounded-md"
          >
            {tag}
            <Button
              type="button"
              onClick={() => removeTag(tag)}
              className="hover:text-accent-foreground/80"
            >
              <X className="h-3 w-3" />
            </Button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={value.length < maxTags ? placeholder : ""}
          className="flex-1 min-w-[120px] bg-transparent border-none outline-none text-sm"
          disabled={value.length >= maxTags}
        />
      </div>
      {description && !error && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {error && (
        <p className="text-sm font-medium text-destructive">{error}</p>
      )}
      {value.length >= maxTags && (
        <p className="text-sm text-muted-foreground">
          Maximum {maxTags} tags reached
        </p>
      )}
    </div>
  );
};

export default MultipleInputs; 