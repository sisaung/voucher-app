import { z } from "zod";
import { User } from "../stores/useUserStore";

export type EditProfile = {
  message: string;
  user: User;
};

export const userEditProfileSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must be at most 30 characters"),
});

export type UserEditProfileSchemaForm = z.infer<typeof userEditProfileSchema>;

export const userChangePasswordSchema = z
  .object({
    old_password: z.string({ message: "Please enter your old password" }),
    new_password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(30, "Name must be at most 30 characters"),
    new_password_confirmation: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .max(30, "Name must be at most 30 characters"),
  })
  .refine((data) => data.new_password === data.new_password_confirmation, {
    path: ["new_password_confirmation"],
    message: "Password must match",
  });

export type UserChangePasswordSchemaForm = z.infer<
  typeof userChangePasswordSchema
>;
