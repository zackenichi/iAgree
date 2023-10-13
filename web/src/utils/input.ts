import { z } from 'zod';

const emailSchema = z.string().email();

const isValueEmpty = (value: string): boolean => {
  return value.trim() === '';
};

const isValidEmail = (email: string): boolean => {
  if (isValueEmpty(email)) {
    return false;
  }
  return emailSchema.safeParse(email).success;
};

const isStrongPassword = (password: string): boolean => {
  const passwordSchema = z
    .string()
    .min(8)
    .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])/);
  return passwordSchema.safeParse(password).success;
};

export { isValidEmail, isValueEmpty, isStrongPassword };
