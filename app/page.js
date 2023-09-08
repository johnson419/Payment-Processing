import Checkbox from "./components/Checkbox";
const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div>
        <h1 class="text-4xl font-bold">Payment App</h1>
        <div>
          <p className="flex flex-col items-center justify-between text-2xl pt-4">
            Choose Payment Vendor
          </p>
          <Checkbox />
        </div>
      </div>
    </main>
  );
};

export default Home;
