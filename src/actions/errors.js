const getErrorMessage = error => {
  let message;
  const response = error.response;
  if (response !== undefined && response.data.Message !== null) {
    message = response.data.Message.toString();
  } else message = error.toString();

  return message;
};

export default getErrorMessage;
