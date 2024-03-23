const SimpleForm = () => {
  return (
    <div>
      <form className="flex flex-col justify-center items-center text-center">
        <input className="bg-gray-300 rounded-lg" type="text" />
        <hr />
        <input className="bg-slate-700 text-white p-2 rounded-lg" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
