import HookForm from "./components/HookForm/HookForm";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import StateFullForm from "./components/StateFullForm/StateFullForm";

function App() {
  return (
    <>
      <main className="p-10 text-center">
          <SimpleForm></SimpleForm>
          <br />
          <h1 className="mb-4 text-4xl">This is a state full form</h1>
          <StateFullForm></StateFullForm>
          <HookForm></HookForm>
      </main>
    </>
  );
}

export default App;
