import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generatePassword = (
  length: number,
  includeUppercase: boolean,
  includeLowercase: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean,
) => {
  let charSet = "";

  if (includeUppercase) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeLowercase) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeNumbers) {
    charSet += "0123456789";
  }
  if (includeSymbols) {
    charSet += "!@#$%^&*()-_=+[]{};':\"\\|,.<>/?";
  }

  // Handle cases where no character sets are selected
  if (charSet === "") {
    return "Please select at least one option.";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  return password;
};
