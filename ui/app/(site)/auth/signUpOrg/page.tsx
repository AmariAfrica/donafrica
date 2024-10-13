import { Metadata } from "next";
import SignupOrg from "@/components/Auth/SignupOrg";
export const metadata: Metadata = {
  title: "Sign Up Page - Solid SaaS Boilerplate",
  description: "This is Sign Up page for Startup Pro",
  // other metadata
};

export default function Register() {
  return (
    <>
      <SignupOrg />
    </>
  );
}