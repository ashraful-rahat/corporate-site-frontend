"use client";

import { cn } from "@/lib/utils";
import {
  Select as SelectPrimitive,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  error?: string;
  options: Option[];
  className?: string;
  description?: string;
  onChange?: (value: string) => void;
  value?: string;
  placeholder?: string;
}

const Select = ({
  label,
  error,
  options,
  className,
  description,
  onChange,
  value,
  placeholder = "Select an option",
}: SelectProps) => {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </label>
      )}
      <SelectPrimitive
        value={value}
        onValueChange={onChange}
      >
        <SelectTrigger
          className={cn(
            "w-full",
            error && "border-destructive focus:ring-destructive",
            className
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectPrimitive>
      {description && !error && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {error && (
        <p className="text-sm font-medium text-destructive">{error}</p>
      )}
    </div>
  );
};

export default Select; 