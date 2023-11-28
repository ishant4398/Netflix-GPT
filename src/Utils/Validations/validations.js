export const validateSignIn = (isSignIn, email, password, name, setError) => {
  let isValid = true;

  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = name && name.trim() ? true : false;

  if (!isEmailValid) {
    isValid = false;

    setError((err) => {
      return { ...err, email: "Please enter valid email" };
    });
  } else {
    setError((err) => {
      return { ...err, email: null };
    });
  }

  if (!isPasswordValid) {
    isValid = false;

    setError((err) => {
      return { ...err, password: "Please enter valid password" };
    });
  } else {
    setError((err) => {
      return { ...err, password: null };
    });
  }

  if (!isSignIn) {
    if (!isNameValid) {
      isValid = false;

      setError((err) => {
        return { ...err, name: "Please enter valid name" };
      });
    } else {
      setError((err) => {
        return { ...err, name: null };
      });
    }
  }

  return isValid;
};
