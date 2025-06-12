// utils/handleApiError.js
export function handleApiError(error, customMessage = 'Something went wrong') {
  if (!error.response) {
    console.error('Network or server error:', error);
    return { message: 'Network error. Please check your connection.', status: null };
  }

  const { status, data } = error.response;

  let message = customMessage;

  if (data?.message) {
    message = data.message; // Backend provided message
  } else if (status === 400) {
    message = 'Bad Request';
  } else if (status === 401) {
    message = 'Unauthorized. Please log in again.';
  } else if (status === 403) {
    message = 'Access denied.';
  } else if (status === 404) {
    message = 'Resource not found.';
  } else if (status >= 500) {
    message = 'Server error. Please try again later.';
  }

  console.error(`API Error [${status}]:`, message);

  return { message, status };
}
