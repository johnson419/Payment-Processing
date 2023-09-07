 const Checkbox = () => {
  return (
    <div>
      <label>
        <input type="checkbox" class="checked:bg-blue-500" checked=""></input>
        <span className="ml-2 text-gray-800">M-pesa</span>
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
  );
};

export default Checkbox;
