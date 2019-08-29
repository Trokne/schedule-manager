const getErrorMessage = error => {
  let message;
  const response = error.response;
  if (response !== undefined && response.data.Message !== null) {
    message = response.data.Message.toString();
  } else if (error !== undefined) {
    message = error.toString();
  } else {
    message = '';
  }

  return message;
};

export default getErrorMessage;
