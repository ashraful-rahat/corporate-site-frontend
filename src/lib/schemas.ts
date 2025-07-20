import * as z from "zod";

// User Schema
export const userSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(50, "Username must be less than 50 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.string().min(1, "Role is required"), // Added role field
  status: z.enum(["active", "inactive"]), // Remove .default("active")
});

export const updateUserSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(50, "Username must be less than 50 characters")
    .optional(),
  email: z.string().email("Invalid email address").optional(),
  role: z.string().optional(),
  isActive: z.boolean().optional(),
  status: z.enum(["active", "inactive"]).optional(),
});

// Service Schema
export const serviceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  subtitle: z.string().min(1, "Subtitle is required"),
  image: z.array(z.instanceof(File)).optional(),
  features: z.array(z.string()).min(1, "At least one feature is required"),
  metaTitle: z.string().min(1, "Meta title is required"),
  metaDescription: z
    .string()
    .min(10, "Meta description must be at least 10 characters"),
  metaTags: z.array(z.string()).min(1, "At least one meta tag is required"),
  metaImageAlt: z.string().min(1, "Meta image alt text is required"),
});

// Solution Schema
export const solutionSchema = z.object({
  title: z.string().min(1, "Title is required"),
  subtitle: z.string().min(1, "Subtitle is required"),
  image: z.array(z.instanceof(File)).optional(),
  features: z.array(z.string()).min(1, "At least one feature is required"),
  buttonTitle: z.string().min(1, "Button title is required"),
  metaTitle: z.string().min(1, "Meta title is required"),
  metaDescription: z
    .string()
    .min(10, "Meta description must be at least 10 characters"),
  metaTags: z.array(z.string()).min(1, "At least one meta tag is required"),
  metaImageAlt: z.string().min(1, "Meta image alt text is required"),
});

// Works Schema
export const worksSchema = z.object({
  title: z.string().min(1, "Title is required"),
  subtitle: z.string().min(1, "Subtitle is required"),
  image: z.array(z.instanceof(File)).optional(),
  category: z.string().min(1, "Category is required"),
  year: z
    .string()
    .min(4, "Year must be at least 4 characters")
    .max(4, "Year must be 4 characters"),
  client: z.string().min(1, "Client is required"),
  duration: z.string().min(1, "Duration is required"),
  team: z.string().min(1, "Team is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  challange: z.string().min(10, "Challenge must be at least 10 characters"),
  solutions: z.string().min(10, "Solutions must be at least 10 characters"),
  technologies: z.string().min(1, "Technologies is required"),
  liveLink: z.string().url("Must be a valid URL"),
  metaTitle: z.string().min(1, "Meta title is required"),
  metaDescription: z
    .string()
    .min(10, "Meta description must be at least 10 characters"),
  metaTags: z.array(z.string()).min(1, "At least one meta tag is required"),
  metaImageAlt: z.string().min(1, "Meta image alt text is required"),
});

// Hiring Schema
export const hiringSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  experience: z.string().min(1, "Experience is required"),
  requirements: z
    .string()
    .min(10, "Requirements must be at least 10 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  location: z.string().min(1, "Location is required"),
  workingHours: z.string().min(1, "Working hours is required"),
  jobNature: z.string().min(1, "Job nature is required"),
  benefits: z.string().min(10, "Benefits must be at least 10 characters"),
  reponsibilities: z
    .string()
    .min(10, "Responsibilities must be at least 10 characters"),
  applicationDeadline: z.string().min(1, "Application deadline is required"),
  skillsRequired: z.array(z.string()).min(1, "At least one skill is required"),
  category: z.string().min(1, "Category is required"),
  metaTitle: z.string().min(1, "Meta title is required"),
  metaDescription: z
    .string()
    .min(10, "Meta description must be at least 10 characters"),
  metaTags: z.array(z.string()).min(1, "At least one meta tag is required"),
  metaImageAlt: z.string().min(1, "Meta image alt text is required"),
});

// Team Member Schema
export const teamMemberSchema = z.object({
  name: z.string().min(1, "Name is required"),
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  profileImage: z.array(z.instanceof(File)).optional(),
  socials: z.object({
    facebook: z
      .string()
      .url("Must be a valid URL")
      .optional()
      .or(z.literal("")),
    linkedin: z
      .string()
      .url("Must be a valid URL")
      .optional()
      .or(z.literal("")),
    behance: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  }),
  category: z.string().min(1, "Category is required"),
  role: z.string().min(1, "Role is required"),
});

// Application Schema
export const applicationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  position: z.string().min(1, "Position is required"),
  resume: z.array(z.instanceof(File)).min(1, "Resume file is required"),
  coverLetter: z
    .string()
    .min(10, "Cover letter must be at least 10 characters"),
  status: z.string().min(1, "Status is required"),
  metaTitle: z.string().min(1, "Meta title is required"),
  metaDescription: z
    .string()
    .min(10, "Meta description must be at least 10 characters"),
  metaTags: z.array(z.string()).min(1, "At least one meta tag is required"),
  metaImageAlt: z.string().min(1, "Meta image alt text is required"),
});

// Application Form Schema (for job applications)
export const jobApplicationSchema = z.object({
  // Step 1: Basic Information
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  contactInformation: z.string().min(1, "Contact information is required"),
  employeeDetails:  z.object({
    availableFrom: z.string().min(1, "Available from date is required"),
  }),
  resume: z.array(z.instanceof(File)).min(1, "Resume file is required"),
  onlineProfiles: z.object({
    linkedin: z
      .string()
      .url("Must be a valid URL")
      .optional()
      .or(z.literal("")),
    github: z.string().url("Must be a valid URL").optional().or(z.literal("")),
    portfolio: z
      .string()
      .url("Must be a valid URL")
      .optional()
      .or(z.literal("")),
  }),

  // Step 3: Motivation (now step 2)
  whyShouldHire: z.string().optional(),
  coverLetter: z.string().optional(),
  applicationDetails: z.string().optional(),

  // System fields
  jobId: z.string().min(1, "Job ID is required"),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormType = z.infer<typeof contactFormSchema>;

// Type exports
export type UserFormData = z.infer<typeof userSchema>;
export type UpdateUserFormData = z.infer<typeof updateUserSchema>;
export type ServiceFormData = z.infer<typeof serviceSchema>;
export type SolutionFormData = z.infer<typeof solutionSchema>;
export type WorksFormData = z.infer<typeof worksSchema>;
export type HiringFormData = z.infer<typeof hiringSchema>;
export type TeamMemberFormData = z.infer<typeof teamMemberSchema>;
export type ApplicationFormData = z.infer<typeof applicationSchema>;
export type JobApplicationFormData = z.infer<typeof jobApplicationSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;

// Product Schema
export const productSchema = z.object({
  title: z.string().min(1, "Title is required"),
  mode: z.string().min(1, "Mode is required"),
  image: z.array(z.instanceof(File)).optional(),
  brand: z.string().min(1, "Brand is required"),
  coreBrand: z.string().min(1, "Core brand is required"),
  category: z.string().min(1, "Category is required"),
  features: z.array(z.string()).optional(),
  description: z.string().min(1, "Description is required"),
  metaTitle: z.string().min(1, "Meta title is required"),
  metaDescription: z.string().min(10, "Meta description must be at least 10 characters"),
  metaImageAlt: z.string().min(1, "Meta image alt text is required"),
  metaTags: z.array(z.string()).optional(),
});

export type ProductFormData = z.infer<typeof productSchema>;
