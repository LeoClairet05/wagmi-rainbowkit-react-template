import { Chain } from "@rainbow-me/rainbowkit";

export const avalancheChain: Chain = {
    id: 43_114,
    name: "Avalanche",
    network:"avalanche",
    iconUrl: 'https://example.com/icon.svg',
    iconBackground: '#fff',
    nativeCurrency: {
      decimals: 18,
      name: "Avalanche",
      symbol: "AVAX",
    },
    rpcUrls: {
      default: "https://api.avax.network/ext/bc/C/rpc",
    },
    blockExplorers: {
      default: { name: "SnowTrace", url: "https://snowtrace.io" },
      snowtrace: { name: "SnowTrace", url: "https://snowtrace.io" },
    },
    testnet: false,
};
  
export const fujiChain: Chain = {
    id: 43_113,
    name: "Fuji",
    network: "fuji",
    iconUrl: 'https://example.com/icon.svg',
    iconBackground: '#fff',
    nativeCurrency: {
        decimals: 18,
        symbol: "AVAX",
        name: "Avalanche"
    },
    rpcUrls: {
        default: "https://api.avax-test.network/ext/bc/C/rpc"
    },
    blockExplorers: {
        default: { name: 'SnowTrace', url: 'https://testnet.snowtrace.io/' },
    },
    testnet:true
}

export const custom_chains = [avalancheChain, fujiChain];