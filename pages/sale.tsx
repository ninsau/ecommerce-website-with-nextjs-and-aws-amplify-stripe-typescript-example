import MetaComponent from "../components/Meta";
import SaleComponent from "../components/Sale";
import { BRAND_NAME } from "../lib";

const Sale = () => {
  return (
    <>
      <MetaComponent title={`Sale | ${BRAND_NAME}`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Sale</h1>
      </div>
      <SaleComponent />
    </>
  );
};

export default Sale;

Sale.auth = true;
