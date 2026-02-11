//error handlers
const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  // Operational error (expected)
  if (err.isOperational) {
    return res.status(statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors || null
    });
  }

  // Programming or unknown error
  console.error("UNEXPECTED PROGRAMMATIC ERROR:", err);

  return res.status(500).json({
    success: false,
    message: "Something went wrong"
  });
};

export default globalErrorHandler;
