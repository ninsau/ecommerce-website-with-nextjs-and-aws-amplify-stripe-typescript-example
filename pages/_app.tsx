import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import config from "../src/aws-exports.js";
import { useSession, SessionProvider } from "next-auth/react";
import { NextComponentType } from "next";
import LayoutComponent from "../components/Layout";

Amplify.configure({
  ...config,
  ssr: true,
});

type CustomAppProps = AppProps & {
  Component: NextComponentType & { auth?: boolean }; // add auth type
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <LayoutComponent>
            <Component {...pageProps} />
          </LayoutComponent>
        </Auth>
      ) : (
        <>
          <Component {...pageProps} />
        </>
      )}
    </SessionProvider>
  );
}

export default MyApp;

const Auth = ({ children }: any) => {
  // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
  const { data: session, status } = useSession({ required: true });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (
    status === "authenticated" &&
    (session?.user?.email === process.env.NEXT_PUBLIC_ADMIN_ONE! ||
      session?.user?.email === process.env.NEXT_PUBLIC_ADMIN_TWO! ||
      session?.user?.email === process.env.NEXT_PUBLIC_ADMIN_THRREE!)
  ) {
    return children;
  } else {
    return <div>You are not authorized to view this page</div>;
  }
};
