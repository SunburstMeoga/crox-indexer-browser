import { useEffect } from "react";


function App() {
  useEffect(() => {
    console.log(process.env.REACT_APP_API_PATH)
  }, [])
  return (
    <div className="App">
      <div className="bg-blue-500 text-white p-4">
        This is a Tailwind CSS styled component.
      </div>
    </div>
  );
}

export default App;
