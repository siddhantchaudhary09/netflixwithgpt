export const validate = (email, password) => {
  const validemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  if (!validemail) return "Email is not valid";
  if (!validpass) return "Password is not valid";
  return null;
};
