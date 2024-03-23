const SimpleForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.phone.value);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center text-center"
      >
        <input className="bg-gray-300 rounded-lg" name="name" type="text" />
        <br />
        <input className="bg-gray-300 rounded-lg" name="email" type="email" />
        <br />
        <input className="bg-gray-300 rounded-lg" name="phone" type="tel" />
        <br />
        <input
          className="bg-slate-700 text-white p-2 rounded-lg"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default SimpleForm;
