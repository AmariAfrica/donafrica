export const BASE_SEPOLIA_CHAIN_ID = 84531;
export const mintContractAddress = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
export const mintABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'public',
    type: 'function',
  },
] as const;
