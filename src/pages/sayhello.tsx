import { useEffect, useState } from "react";

const SayHello = () => {
  const [data, setData] = useState({ name: "" });
  useEffect(() => {
    fetch("api/hello")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return <div>hello {data.name}</div>;
};

export default SayHello;
