import { NextPage } from "next";
import Link from "next/link";
import MetaComponent from "../components/Meta";
import { HOME_IMAGE_URL } from "../lib";

const PageNotFound: NextPage = () => {
  return (
    <>
      <MetaComponent
        title={"Page Not Found"}
        description={"The page you're looking for does not exist."}
      />
      <main
        className="min-h-full bg-cover bg-top sm:bg-top"
        style={{
          backgroundImage: `url(${HOME_IMAGE_URL})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <p className="text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide">
            404 error
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Uh oh! I think you’re lost.
          </h1>
          <p className="mt-2 text-lg font-medium text-black text-opacity-50">
            It looks like the page you’re looking for doesn&apos;t exist.
          </p>
          <div className="mt-6">
            <Link href="/">
              <div className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50">
                Go back home
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default PageNotFound;
