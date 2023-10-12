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

export { isValidEmail, isValueEmpty };
