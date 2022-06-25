import DashboardComponent from "../components/Dashboard";

const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>

      <DashboardComponent />
    </>
  );
};

export default Home;

Home.auth = true;
