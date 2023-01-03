import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Books from "./Components/Books";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/books")
      .then((response) => setData(response.data));
  }, []);
  console.log(data);
  return (
    <div className="App">
      <Books data={data} />
    </div>
  );
}

export default App;
