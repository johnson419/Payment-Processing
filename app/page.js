export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div>
        <h1 class="text-4xl font-bold">Payment App</h1>
        <div>
          <p className="flex min-h-screen flex-col items-center justify-between text-2xl pt-4">Choose Payment Vendor</p>
          <p>hello</p>
          
  <label>
      <input type="checkbox" checked></input> 
  Browser default
  </label>
  <label className="flex items-center">
    <input type="checkbox" class="form-checkbox text-indigo-600"></input>
    <span className="ml-2 text-gray-800">Tigopesa</span>
  </label>
  <label className="flex items-center">
    <input type="checkbox" class="form-checkbox text-indigo-600"></input>
    <span className="ml-2 text-gray-800">Airtel Money</span>
  </label>


        </div>
      </div>
    </main>
  );
}
