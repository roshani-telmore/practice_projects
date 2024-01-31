import React from "react";

function BasicLayoutOne() {
  return (
    <div class="wrapper">
      <div class="first">
        <div class="first1-wrapper">
          <div class="one">@</div>
          <div class="two">LOGO</div>
        </div>
        <div class="three">MENU</div>
        <div class="first2-wrapper">
          <nav>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">store</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="four">
          Powered <br />
          by
          <br /> Roshani
        </div>
      </div>
      <div class="second">
        <div class="five"></div>
        <div class="second1-wrapper">
          <div class="six">
            <img class="fit-picture" scr="flower.jpg"></img>
          </div>
          <div class="seven">img2</div>
        </div>
        <div class="second2-wrapper">
          <div class="eight">
            <p>
              <strong>Layering background images</strong>
              <br />
              Note that the star image is partially
              <br />
              transparent and is layered over the cat image.
            </p>
          </div>
          <div class="nine">
            <p>
              <strong>Anatomy of an HTML element</strong> <br />
              Let's explore this paragraph element a bit further.
            </p>
          </div>
        </div>
        <div class="second3-wrapper">
          <div class="ten"> Email :</div>
          <div class="eleven">Enter Email</div>
        </div>
        <div class="button">Submit</div>
      </div>
    </div>
  );
}

// export default BasicLayoutOne;

// function FlexCheck() {
//   return (
//     <div>
//       <div className="exmaple-1">
//         <h2>Example 1</h2>
//         <div className="container-01">
//           <div className="box-white">1</div>
//           <div className="box-pink">2</div>
//           <div className="box-pink">3</div>
//           <div className="box-pink">4</div>
//           <div className="box-pink">5</div>
//           <div className="box-pink">6</div>
//         </div>
//       </div>

//       <div className="exmaple-2">
//         <h2>Example 2</h2>
//         <div className="container-02">
//           <div className="box-white">1</div>
//           <div className="box-pink">2</div>
//           <div className="box-pink">3</div>
//           <div className="box-pink">4</div>
//           <div className="box-pink">5</div>
//           <div className="box-pink">6</div>
//         </div>
//       </div>

//       <div className="exmaple-3">
//         <h2>Example 3</h2>
//         <div className="container-03">
//           <div className="box-white">1</div>
//           <div className="box-pink">2</div>
//           <div className="box-pink">3</div>
//           <div className="box-pink">4</div>
//           <div className="box-pink">5</div>
//           <div className="box-pink">6</div>
//         </div>
//       </div>

//       <div className="exmaple-4">
//         <h2>Example 4</h2>
//         <div className="container-04">
//           <div className="box-white">1</div>
//           <div className="box-pink">2</div>
//           <div className="box-pink">3</div>
//           <div className="box-pink">4</div>
//           <div className="box-pink">5</div>
//           <div className="box-pink">6</div>
//         </div>
//       </div>

//       <div className="exmaple-5">
//         <h2>Example 5</h2>
//         <div className="container-05">
//           <div className="box-white">1</div>
//           <div className="box-pink">2</div>
//           <div className="box-pink">3</div>
//           <div className="box-pink">4</div>
//           <div className="box-pink">5</div>
//           <div className="box-pink">6</div>
//         </div>
//       </div>

//       <div className="exmaple-6">
//         <h2>Example 6</h2>
//         <div className="container-06">
//           <div className="box-white">1</div>
//           <div className="box-pink">2</div>
//           <div className="box-pink">3</div>
//           <div className="box-pink">4</div>
//           <div className="box-pink">5</div>
//           <div className="box-pink">6</div>
//         </div>
//       </div>

//       <div className="exmaple-7">
//         <h2>Example 7</h2>
//         <div className="container-07">
//           <div className="box-white">1</div>
//           <div className="box-pink">2</div>
//           <div className="box-pink">3</div>
//           <div className="box-pink">4</div>
//           <div className="box-pink">5</div>
//           <div className="box-pink">6</div>
//         </div>
//       </div>

//       <div className="exmaple-8">
//         <h2>Example 8</h2>
//         <div className="container-08">
//           <div className="box-white">1</div>
//           <div className="box-pink">2</div>
//           <div className="box-pink">3</div>
//           <div className="box-pink">4</div>
//           <div className="box-pink">5</div>
//           <div className="box-pink">6</div>
//         </div>
//       </div>

//       <div className="exmaple-9">
//         <h2>Example 9</h2>
//         <div className="container-09">
//           <div className="box-white">1</div>
//           <div className="box-pink">2</div>
//           <div className="box-pink">3</div>
//           <div className="box-pink">4</div>
//           <div className="box-pink">5</div>
//           <div className="box-pink">6</div>
//         </div>
//       </div>

//       <div className="exmaple-10">
//         <h2>Example 10</h2>
//         <div className="container-10">
//           <div className="box-white">1</div>
//           <div className="box-pink">2</div>
//           <div className="box-pink">3</div>
//           <div className="box-pink">4</div>
//           <div className="box-pink">5</div>
//           <div className="box-pink">6</div>
//         </div>
//       </div>

//       <div className="exmaple-11">
//         <h2>Example 11</h2>
//         <div className="container-11">
//           <div className="box-white">1</div>
//           <div className="box-pink">2</div>
//           <div className="box-pink">3</div>
//           <div className="box-pink">4</div>
//           <div className="box-pink">5</div>
//           <div className="box-pink">6</div>
//         </div>
//       </div>

//       <div className="exmaple-12">
//         <h2>Example 12</h2>
//         <div className="container-12">
//           <div className="box-white">1</div>
//           <div className="box-pink">2</div>
//           <div className="box-pink">3</div>
//           <div className="box-pink">4</div>
//           <div className="box-pink">5</div>
//           <div className="box-pink">6</div>
//           <div className="box-pink">7</div>
//           <div className="box-pink">8</div>
//           <div className="box-pink">9</div>
//           <div className="box-pink">10</div>
//           <div className="box-pink">11</div>
//           <div className="box-pink">12</div>
//           <div className="box-pink">13</div>
//           <div className="box-pink">14</div>
//           <div className="box-pink">15</div>
//           <div className="box-pink">16</div>
//           <div className="box-pink">17</div>
//         </div>
//       </div>

//       <div className="exmaple-13">
//         <h2>Example 13</h2>
//         <div className="container-13">
//           <div className="box-white">1</div>
//           <div className="box-pink">2</div>
//           <div className="box-pink">3</div>
//           <div className="box-pink">4</div>
//           <div className="box-pink">5</div>
//           <div className="box-pink">6</div>
//           <div className="box-pink">7</div>
//           <div className="box-pink">8</div>
//           <div className="box-pink">9</div>
//           <div className="box-pink">10</div>
//           <div className="box-pink">11</div>
//           <div className="box-pink">12</div>
//           <div className="box-pink">13</div>
//           <div className="box-pink">14</div>
//           <div className="box-pink">15</div>
//           <div className="box-pink">16</div>
//         </div>
//       </div>

//       <div className="exmaple-14">
//         <h2>Example 14</h2>
//         <div className="container-14">
//           <div className="box-white">1</div>
//           <div className="box-pink">2</div>
//           <div className="box-pink">3</div>
//           <div className="box-pink">4</div>
//           <div className="box-pink">5</div>
//           <div className="box-pink">6</div>
//           <div className="box-pink">7</div>
//           <div className="box-pink">8</div>
//           <div className="box-pink">9</div>
//           <div className="box-pink">10</div>
//           <div className="box-pink">11</div>
//           <div className="box-pink">12</div>
//           <div className="box-pink">13</div>
//           <div className="box-pink">14</div>
//           <div className="box-pink">15</div>
//           <div className="box-pink">16</div>
//         </div>
//       </div>

//       <div className="exmaple-15">
//         <h2>Example 15</h2>
//         <div className="container-15">
//           <div className="box-white">1</div>
//           <div className="box-pink">2</div>
//           <div className="box-pink">3</div>
//           <div className="box-pink">4</div>
//           <div className="box-pink">5</div>
//           <div className="box-pink">6</div>
//         </div>
//       </div>


//     </div>
//   );
// }

// export default FlexCheck;
