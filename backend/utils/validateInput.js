// external dependencies
import validator from 'validator';

export const validateWaitlistInput = ({ email, userName }) => {
  if (!email || !validator.isEmail(email)) return "Invalid email";
  if (!userName || userName.length < 2) return "Invalid username";
  return null;
};
