import Donation from "@/components/Money/Donation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donation Page  - Donation Page",
  description: "This is Donation page ",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Donation />
    </>
  );
}
