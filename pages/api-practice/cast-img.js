import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

// const Images = () => {
//   const [myobj, setMyobj] = useState(null);
//   const rosh = async () => {
//     await fetch("https://dog.ceo/api/breeds/image/random")
//       .then((response) => response.json())
//       .then((json) => setMyobj(json));

//   };

//   useEffect(() => {
//     rosh();
//   }, []);
//   // console.log("hh", myobj);
//   if (!myobj) {
//     return;
//   }
//   return (
//     <div>
//       {/* <pre>{JSON.stringify(myobj, null, 2)}</pre> */}
//       <img src={myobj.message} style={{ width: 500, height: 500 }} />
//       {/* <img src="/images/agency-inside-header-wrapper-1.png" />  */}
//     </div>
//   );
// };

const Cast = () => {
  return (
    <div className="cast-page">
      <img src="/images/Ellipse 9.png" />
      <span>Radhika Apte </span>
    </div>
  );
};

const Crew = () => {
  return (
    <div className="crew-page">
      <img src="/images/arrahman.jpg" style={{width:500 ,height:500}}/>
      <span>A. R Rahaman</span>
    </div>
  );
};

function CastImgApi() {
  
  const rosh =async()=>{
  const data=await fetch("https://dog.ceo/api/breeds/image/random")
  const res=await data.json()
  return res
  }
  const [sections, setSection] = useState(0);
  const dataQuery=useQuery("mydata",()=>rosh())
  // console.log("my data",dataQuery.data)
  // console.log("hi", sections);
  return (
    <div className="cast-img-api">
      <div className="title">
        <h1 className="img" onClick={() => setSection(0)}>
          Images
        </h1>
        <h1 className="cast" onClick={() => setSection(1)}>
          Cast
        </h1>
        <h1 className="crew" onClick={() => setSection(2)}>
          Crew
        </h1>
      </div>
      <div className="handlechange">
        {sections===0 ? dataQuery.isSuccess&&<img src={dataQuery.data.message} style={{ width: 500, height: 500 }} /> :sections===1?<Cast />:sections===2? <Crew />:<Images />}
      </div>
    </div>
  );
}

export default CastImgApi;
