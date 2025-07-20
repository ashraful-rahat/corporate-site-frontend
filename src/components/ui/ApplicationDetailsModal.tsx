"use client";

import { User, X, Calendar, Phone, FileText, Globe } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { TApplication } from "@/types/application";

interface ApplicationDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  application: TApplication | null;
}

const ApplicationDetailsModal = ({
  isOpen,
  onClose,
  application,
}: ApplicationDetailsModalProps) => {
  if (!application) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl bg-white rounded-xl shadow-2xl border-0 p-0 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="px-6 py-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold text-sky-700 flex items-center gap-2">
              <User className="h-5 w-5" />
              Application Details
            </DialogTitle>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200 group"
            >
              <X className="h-5 w-5 text-gray-500 group-hover:text-gray-700 transition-colors" />
            </button>
          </div>
        </DialogHeader>
        
        <div className="px-6 py-6 space-y-6">
          {/* Basic Information */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <User className="h-4 w-4" />
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">Name:</span>
                <span className="text-gray-900">{application.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">Email:</span>
                <span className="text-gray-900">{application.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-500" />
                <span className="font-medium text-gray-700">Contact:</span>
                <span className="text-gray-900">{application.contactInformation || application.phone || '-'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">Position:</span>
                <span className="text-gray-900">{typeof application.jobId === 'object' ? application.jobId.title : application.position}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="font-medium text-gray-700">Applied:</span>
                <span className="text-gray-900">
                  {application.createdAt ? new Date(application.createdAt).toLocaleDateString() : "-"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-gray-500" />
                <span className="font-medium text-gray-700">Resume:</span>
                {application.resumeDriveLink || application.resume ? (
                  (application.resumeDriveLink || application.resume).endsWith('.pdf') ? (
                    <iframe
                      src={application.resumeDriveLink || application.resume}
                      title="Resume Preview"
                      className="w-full h-64 border rounded"
                    />
                  ) : (
                    <a
                      href={application.resumeDriveLink || application.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline hover:text-blue-800"
                    >
                      View Resume
                    </a>
                  )
                ) : (
                  <span className="text-gray-500">No resume uploaded.</span>
                )}
              </div>
            </div>
          </div>

          {/* Cover Letter */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Cover Letter
            </h3>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {application.coverLetter || "No cover letter provided."}
            </p>
          </div>

          {/* Why Should We Hire */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Why Should We Hire You?
            </h3>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {application.whyShouldHire || "No response provided."}
            </p>
          </div>

          {/* Application Details */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Additional Details
            </h3>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
              {application.applicationDetails || "No additional details provided."}
            </p>
          </div>

          {/* Online Profiles */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Online Profiles
            </h3>
            <div className="space-y-2">
              {application.onlineProfiles?.linkedin && (
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-700">LinkedIn:</span>
                  <a
                    href={application.onlineProfiles.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    View Profile
                  </a>
                </div>
              )}
              {application.onlineProfiles?.github && (
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-700">GitHub:</span>
                  <a
                    href={application.onlineProfiles.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    View Profile
                  </a>
                </div>
              )}
              {application.onlineProfiles?.portfolio && (
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-700">Portfolio:</span>
                  <a
                    href={application.onlineProfiles.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    View Portfolio
                  </a>
                </div>
              )}
              {!application.onlineProfiles?.linkedin && !application.onlineProfiles?.github && !application.onlineProfiles?.portfolio && (
                <p className="text-gray-500">No online profiles provided.</p>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationDetailsModal; 