import toast from "react-hot-toast";

/**
 * Handles API and validation errors, displaying user-friendly toast notifications.
 * @param error The error object caught from API or validation
 * @param context Optional context string for the operation (e.g., 'Service creation')
 */
export function handleApiError(error: any, context: string = "Operation") {
  // If error is falsy or not an object, show a generic message
  if (!error || typeof error !== "object") {
    toast.error(`Something went wrong during ${context}. Please try again.`);
 
    return;
  }

  // If error is an empty object
  if (Object.keys(error).length === 0) {
    toast.error(`Something went wrong during ${context}. Please try again.`);
 
    return;
  }

  if (error.errors) {
    // Zod validation errors
    const errorMessages = error.errors.map((err: any) => err.message).join(", ");
    toast.error(`Validation error: ${errorMessages}`);
  } else if (error.data) {
    // API error response
 
    toast.error(error.data.message || `${context} failed due to API error.`);
  } else if (error.status) {
    // HTTP error
 
    toast.error(`HTTP Error: ${error.status}`);
  } else {
    toast.error(`Something went wrong during ${context}. Please try again.`);
 
  }
} 