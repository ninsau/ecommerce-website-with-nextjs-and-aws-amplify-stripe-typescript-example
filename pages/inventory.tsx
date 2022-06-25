import InventoryComponent from "../components/Inventory";
import MetaComponent from "../components/Meta";
import { BRAND_NAME } from "../lib";

const Inventory = () => {
  return (
    <>
      <MetaComponent title={`Inventory | ${BRAND_NAME}`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Inventory</h1>
      </div>

      <InventoryComponent />
    </>
  );
};

export default Inventory;

Inventory.auth = true;
