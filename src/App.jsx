import { Button } from "flowbite-react";
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>


    <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800">
        Blue
      </Button>

      <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800">
        Purple to Pink
      </Button>
    </>
  );
}

export default App;
