export type TApplication = {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  resume: string; // Drive link or uploaded file URL
  coverLetter: string;
  status: string;

  // Metadata
  metaTitle: string;
  metaDescription: string;
  metaTags: string[];
  metaImageAlt: string;

  // Additional fields from actual application
  resumeDriveLink?: string;
  contactInformation?: string;
  workExperience?: string;
  whyShouldHire?: string;
  applicationDetails?: string;

  // Nested objects
  onlineProfiles?: {
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };

  employeeDetails?: {
    currentCompany?: string;
    expectedSalary?: string;
    availableFrom?: string;
  };

  education?: {
    institution?: string;
    skills?: string[];
  };

  jobId?: string | {
    _id: string;
    title: string;
    // Add more job fields here if needed
  };

  createdAt?: Date;
  updatedAt?: Date;
};
