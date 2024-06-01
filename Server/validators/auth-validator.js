const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "Name atleast of 3 characters" }),
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Invalid email Address" })
    .min(3, { message: "Email atleast of 3 characters" })
    .max(255, { message: "Email not more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone is Required" })
    .trim()
    .min(3, { message: "Phone atleast of 3 characters" }),
  password: z
    .string({ required_error: "Password is Required" })
    .min(5, { message: "Password atleast of 4 characters" }),
});

module.exports = signupSchema;
