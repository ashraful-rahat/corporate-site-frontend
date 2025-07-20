import { ReactNode } from "react";
import { UseFormReturn, FieldValues, SubmitHandler } from "react-hook-form";
import { cn } from "@/lib/utils";

interface FormProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  children: ReactNode;
  className?: string;
}

const Form = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  className,
}: FormProps<T>) => {
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn("space-y-6", className)}
    >
      {children}
    </form>
  );
};

export default Form; 