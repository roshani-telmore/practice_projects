import React, { useState } from "react";

function Description({ descriptionId }) {
  const [dsp, setDsp] = useState("");
  const [displyDescription, setDisplyDescription] = useState(true);

  const createDescript = async (id) => {
    // console.log("id", id);
    const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        description: dsp,
      }),
    });
    const incomingdsp = await response.json();

    if (!response.ok) {
      setDisplyDescription(false);
    }

    // console.log("response", response);

    console.log("incomingdsp", incomingdsp);
    return incomingdsp;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createDescript(descriptionId);
  };
  return (
    <div className="description-comp">
      <form onSubmit={handleSubmit}>
        {/* <input
          id="dsp"
          type="text"
          // value={descriptionDescript}
          autoComplete="off"
          placeholder="Description"
          style={{ height: 50 }}
          onBlur={(e) => (setDsp(e.target.value), console.log("target", dsp))}
        ></input> */}

        {displyDescription ? (
          <>
            <input
              id="dsp"
              type="text"
              // value={descriptionDescript}
              autoComplete="off"
              placeholder="Description"
              style={{ height: 50 }}
              onBlur={
                (e) => setDsp(e.target.value)
                // , console.log("target", dsp)
              }
            ></input>
            <button type="submit">Save</button>
            <button type="reset">Reset</button>
          </>
        ) : null}
      </form>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}

export default Description;
