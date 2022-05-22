import WalletConnectProvider from "@walletconnect/web3-provider";

export const provider = new WalletConnectProvider({
  rpc: {
    80001: "https://rpc-mumbai.maticvigil.com/",
  },
  clientMeta: {
    name: "meshaApp",
    description: "Biggest airdrop is here! World ID example app.",
    url: "https://github.com/worldcoin/world-id-example-airdrop-dapp",
    icons: [
      document.head.querySelector<HTMLLinkElement>("link[rel~=icon]")!.href,
    ],
  },
});

export const CONTRACT_ADDRESS =
  process.env.WLD_CONTRACT_ADDRESS || // eslint-disable-line @typescript-eslint/prefer-nullish-coalescing
  " 0x2ad359e43F43D01322f6d3aEea546E7e0f4709E1";

export const CONTRACT_ABI = [
  // Function to claim the airdrop
  "function claim (address receiver, uint256 root, uint256 nullifierHash, uint256[8] calldata proof)",
];
