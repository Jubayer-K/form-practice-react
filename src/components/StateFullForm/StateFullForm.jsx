import { useState } from "react";

const StateFullForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.length < 6) {
      setError("Password must contain at least 6 characters");
    } else {
      setError("");
      console.log(name, email, phone, password);
    }
  };
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center text-center"
      >
        <input
          className="bg-gray-300 rounded-lg p-2"
          name="name"
          type="text"
          placeholder="Enter your Name"
          onChange={handleChangeName}
        />
        <br />
        <input
          className="bg-gray-300 rounded-lg p-2"
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={handleChangeEmail}
        />
        <br />
        <input
          className="bg-gray-300 rounded-lg p-2"
          name="phone"
          type="tel"
          placeholder="Enter your Phone number"
          onChange={handleChangePhone}
        />
        <br />
        <input
          className="bg-gray-300 rounded-lg p-2"
          name="phone"
          type="tel"
          placeholder="Enter your Password"
          onChange={handleChangePassword}
        />
        <br />
        <input
          className="bg-slate-700 text-white p-2 rounded-lg"
          type="submit"
          value="Submit"
        />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default StateFullForm;
