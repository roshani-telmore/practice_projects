import React, { useEffect, useState } from "react";

export default function ApiPractice() {
  const [myobj, setMyobj] = useState(null);

  const rosh = async () => {
    await fetch("https://www.fishwatch.gov/api/species")
      .then((response) => response.json())
      .then((json) => setMyobj(json));
  };

  // rosh();
  useEffect(() => {
    // const rosh = async () => {
    //   const response = await fetch("https://dog.ceo/api/breeds/image/random");
    //   const data = await response.json();
    //   setMyobj(data);
    //   return data;

    //   await fetch("https://dog.ceo/api/breeds/image/random")
    //     .then((response) => response.json())
    //     .then((json) => setMyobj(json));
    // };
    rosh();
  }, []);

//   console.log("hh", myobj);
  if (!myobj) {
    return;
  }

  return (
    <div>
      hi
      <pre>{JSON.stringify(myobj, null, 2)}</pre>
      <img src={myobj.message} />
      {/* <button onClick={() => rosh()}>click</button> */}
    </div>
  );
}
