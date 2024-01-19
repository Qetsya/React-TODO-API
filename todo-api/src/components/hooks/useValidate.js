const validEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]+$"
);

export const useValidate = () => {
  const isValid = (email) => {
    if (validEmail.test(email)) {
      return true;
    }
    return false;
  };

  return { isValid };
};
