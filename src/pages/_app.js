import "@/styles/globals.css";
import { useEffect } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("preline");
  }, []);
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
