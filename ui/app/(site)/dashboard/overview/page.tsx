import ConnectWallet from "@/components/Money/ConnectWallet";
import Donation from "@/components/Money/Donation";
import Wallet from "@/components/Money/Wallet";
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
    <ConnectWallet />
      {/* <Wallet /> */}
    </>
  );
}
