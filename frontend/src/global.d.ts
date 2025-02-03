import { ExternalProvider } from "@ethersproject/providers";

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    ethereum?: ExternalProvider;
  }
}
