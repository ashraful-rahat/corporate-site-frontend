"use client";

import type {
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrors,
} from "react-hook-form";
import type { ContactForm as ContactFormType } from "@/lib/contactFormSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  register: UseFormRegister<ContactFormType>;
  handleSubmit: UseFormHandleSubmit<ContactFormType>;
  errors: FieldErrors<ContactFormType>;
  isSubmitting: boolean;
  onSubmit: (data: ContactFormType) => void;
}

export const ContactForm = ({
  register,
  handleSubmit,
  errors,
  isSubmitting,
  onSubmit,
}: ContactFormProps) => {
  return (
    <div className="relative   lg:px-8  ">
      {/* Subtle background decoration - responsive */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-16 sm:top-32 right-10 sm:right-20 w-20 sm:w-40 h-20 sm:h-40 bg-gray-100/60 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-20 sm:bottom-40 left-10 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 bg-gray-50/80 rounded-full blur-xl sm:blur-2xl"></div>
      </div>

      <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-2xl">
        <Card className="shadow-xl border border-gray-100/50 bg-white/98 backdrop-blur-sm rounded-lg sm:rounded-none">
          <CardHeader className="text-center pb-6 sm:pb-10 pt-6 sm:pt-10 px-4 sm:px-10">
            <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
              Let&lsquo;s Work Together
            </CardTitle>
            <p className="text-gray-600 text-base sm:text-lg max-w-md mx-auto leading-relaxed">
              Share your project details and we&lsquo;ll get back to you within
              24 hours
            </p>
          </CardHeader>

          <CardContent className="px-4 sm:px-6 lg:px-10 pb-6 sm:pb-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 sm:space-y-8"
            >
              <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2">
                {/* First Name */}
                <div className="space-y-2 sm:space-y-3 col-span-2">
                  <Label
                    htmlFor="firstName"
                    className="text-sm sm:text-base font-medium text-gray-900 flex items-center gap-2 sm:gap-3"
                  >
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                    Name
                  </Label>
                  <div className="relative">
                    <Input
                      {...register("firstName")}
                      id="firstName"
                      placeholder="John"
                      className={cn(
                        "h-10 sm:h-12 px-3 sm:px-4 text-base sm:text-lg border-2 border-gray-200 rounded-lg sm:rounded-xl transition-all duration-200 focus:border-gray-400 focus:ring-4 focus:ring-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-300",
                        errors.firstName &&
                          "border-red-300 focus:border-red-400 focus:ring-red-100 bg-red-50/30"
                      )}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-xs sm:text-sm text-red-600 flex items-center gap-2 mt-2">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2 sm:space-y-3">
                <Label
                  htmlFor="email"
                  className="text-sm sm:text-base font-medium text-gray-900 flex items-center gap-2 sm:gap-3"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  Email address
                </Label>
                <div className="relative">
                  <Input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className={cn(
                      "h-10 sm:h-12 px-3 sm:px-4 text-base sm:text-lg border-2 border-gray-200 rounded-lg sm:rounded-xl transition-all duration-200 focus:border-gray-400 focus:ring-4 focus:ring-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-300",
                      errors.email &&
                        "border-red-300 focus:border-red-400 focus:ring-red-100 bg-red-50/30"
                    )}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs sm:text-sm text-red-600 flex items-center gap-2 mt-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-2 sm:space-y-3">
                <Label
                  htmlFor="phoneNumber"
                  className="text-sm sm:text-base font-medium text-gray-900 flex items-center gap-2 sm:gap-3"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  Phone number
                </Label>
                <div className="relative">
                  <Input
                    {...register("phoneNumber")}
                    id="phoneNumber"
                    type="tel"
                    placeholder="+880 1XXX XXX XXX"
                    className={cn(
                      "h-10 sm:h-12 px-3 sm:px-4 text-base sm:text-lg border-2 border-gray-200 rounded-lg sm:rounded-xl transition-all duration-200 focus:border-gray-400 focus:ring-4 focus:ring-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-300",
                      errors.phoneNumber &&
                        "border-red-300 focus:border-red-400 focus:ring-red-100 bg-red-50/30"
                    )}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-xs sm:text-sm text-red-600 flex items-center gap-2 mt-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2 sm:space-y-3">
                <Label
                  htmlFor="message"
                  className="text-sm sm:text-base font-medium text-gray-900 flex items-center gap-2 sm:gap-3"
                >
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                  Message
                </Label>
                <div className="relative">
                  <Textarea
                    {...register("message")}
                    id="message"
                    rows={4}
                    placeholder="Tell us about your project, goals, and how we can help you achieve them..."
                    className={cn(
                      "px-3 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-2 border-gray-200 rounded-lg sm:rounded-xl transition-all duration-200 focus:border-gray-400 focus:ring-4 focus:ring-gray-100 bg-gray-50/50 hover:bg-white hover:border-gray-300 resize-none min-h-[120px] sm:min-h-[140px]",
                      errors.message &&
                        "border-red-300 focus:border-red-400 focus:ring-red-100 bg-red-50/30"
                    )}
                  />
                </div>
                {errors.message && (
                  <p className="text-xs sm:text-sm text-red-600 flex items-center gap-2 mt-2">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4 sm:pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 sm:h-14 bg-gray-900 hover:bg-gray-800 text-white font-semibold text-base sm:text-lg rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01] disabled:transform-none disabled:hover:scale-100"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 animate-spin" />
                      <span className="hidden sm:inline">
                        Sending your message...
                      </span>
                      <span className="sm:hidden">Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>

              {/* Info Message */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm sm:text-base text-gray-700">
                  <p className="font-medium">We&#39;ll get back to you soon</p>
                  <p className="text-gray-600 mt-1">
                    Typically we respond within 24 hours during business days.
                  </p>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
