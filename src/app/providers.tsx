"use client"; // Required for using Redux in Next.js App Router

import { Provider } from "react-redux";
import { store } from "./store/store";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
