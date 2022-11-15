const handleError = (error, req, res, next) => {
  const { errorContent, message } = error;
  console.log("capturando el error");
  res.status(500).json({
    message,
    error: errorContent?.message,
  });
};

module.exports = handleError;
