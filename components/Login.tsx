import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const LoginComponent = () => {
  const router = useRouter();

  return (
    <>
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="xl:inline">Welcome</span>{" "}
            <span className="text-indigo-600 xl:inline">Admin</span>
          </h1>
          <p className="mt-3 text-base  text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            If you are here, you know what to do. Use the button below to sign
            in to the portal.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center ">
            <div className="rounded-md shadow">
              <span
                onClick={() =>
                  signIn("google", {
                    callbackUrl:
                      (router.query.callbackUrl as string) ??
                      `${window.location.origin as string}`,
                  })
                }
                className="w-full cursor flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
              >
                Sign In With Google
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginComponent;
