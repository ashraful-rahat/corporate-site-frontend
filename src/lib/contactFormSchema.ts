import * as z from "zod";

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  email: z.string().email("Invalid email"),
  phoneNumber: z
    .string()
    .min(11, "Phone number must be at least 11 digits.")
    .max(14, "Phone number is too long."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactForm = z.infer<typeof contactFormSchema>;
