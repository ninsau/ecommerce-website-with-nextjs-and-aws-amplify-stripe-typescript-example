import InfoPagesComponent from "../components/InfoPages";
import MetaComponent from "../components/Meta";
import { BRAND_NAME } from "../lib";

const InfoPages = () => {
  return (
    <>
      <MetaComponent title={`Info Pages | ${BRAND_NAME}`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Info Pages</h1>
      </div>

      <InfoPagesComponent />
    </>
  );
};

export default InfoPages;

InfoPages.auth = true;
