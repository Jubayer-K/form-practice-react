import useInputState from "../../hooks/useInputState";

const HookForm = () => {
  const [name, handleNameChane] = useInputState("Mac");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center text-center"
      >
        <input value={name} onChange={handleNameChane} className="bg-gray-300 rounded-lg" name="name" type="text" />
        <br />
        <input value={name} onChange={handleNameChane} className="bg-gray-300 rounded-lg" name="email" type="email" />
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

export default HookForm;
