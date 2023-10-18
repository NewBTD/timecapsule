import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import InputForm from "./components/InputForm";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl =
      "https://45e5-124-121-138-221.ngrok-free.app/api/timecapsules"; // Replace with your API URL
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Nav></Nav>
      <InputForm></InputForm>
    </>
  );
}

export default App;
