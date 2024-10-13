'use client';
import WalletWrapper from './WalletWrapper';

export default function RegisterButton() {
  return (
    <WalletWrapper
      className="min-w-[90px]"
      text="Log in"
      withWalletAggregator={true}
    />
  );
}