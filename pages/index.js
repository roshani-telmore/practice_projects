import React from "react";
import Link from "next/link";
function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>

      <ul>
        <li>
          <h2>Flexbox template</h2>
        </li>
        <ul>
          <li>
            <Link href="layouts/flex-box/one">Flexbox 01</Link>
          </li>
          <br />
          <li>
            <Link href="layouts/flex-box/two-old">Flexbox 02-old</Link>
          </li>
          <br />
          <li>
            <Link href="layouts/flex-box/two-new"> Flexbox 02-new</Link>
          </li>
          <br />
          <li>
            <Link href="layouts/flex-box/three">Flexbox 03</Link>
          </li>
          <br />
          <li>
            <Link href="layouts/flex-box/four">Flexbox 04</Link>
          </li>
          <br />
          <li>
            <Link href="layouts/flex-box/five">Flexbox 05</Link>
          </li>
          <br />
          <li>
            <Link href="layouts/flex-box/six">Flexbox 06</Link>
          </li>
          <br />
          <li>
            <Link href="layouts/flex-box/seven">Flexbox 07</Link>
          </li>
          <br />
          <li>
            <Link href="layouts/flex-box/eight-old">Flexbox 08-old</Link>
          </li>
          <br />
          <li>
            <Link href="layouts/flex-box/eight-new">Flexbox 08-new</Link>
          </li>
          <br />
          <li>
            <Link href="layouts/flex-box/nine">Flexbox 09</Link>
          </li>
          <br />
          <li>
            <Link href="layouts/flex-box/ten">Flexbox 10</Link>
          </li>
          <br />
          <li>
            <Link href="layouts/flex-box/eleven">Flexbox 11</Link>
          </li>
          <br />
          <li>
            <Link href="layouts/flex-box/twelve">Flexbox 12</Link>
          </li>
          <br />
          <li>
            <Link href="layouts/flex-box/thirteen">Flexbox 13</Link>
          </li>
          <br />
          <li>
            <Link href="layouts/flex-box/fourteen">Flexbox 14</Link>
          </li>
          <br />
        </ul>

        <li>
          <h3>
            <Link href="/agency">Agency</Link>
          </h3>
        </li>
        <li>
          <h3>Admin</h3>
        </li>
        <ul>
          <li>
            <Link href="/admin/admin">Admin</Link>
          </li>
          <li>
            <Link href="/admin/desktop-17">Desktop 17</Link>
          </li>
          <li>
            <Link href="/admin/desktop18">Desktop 18</Link>
          </li>
          <li>
            <Link href="/admin/desktop19">Desktop 19</Link>
          </li>
        </ul>

        <li>
          <h3>
            <Link href="/travello-travel-agency">Travel-Landing-page</Link>
          </h3>
        </li>

        <li>
          <h3>
            <Link href="/enviroment">Enviroment</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/cowboy">Cowboy</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/ninjamail">Ninjamail</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/ninjamail-2">Ninjamail-2</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/photography-event">Photography-event</Link>
          </h3>
        </li>

        <li>
          <h3>
            <Link href="/prabot">Prabot</Link>
          </h3>
        </li>
        {/* <li>
          <h3>
            <Link href="/test/stop-watch">Stop Watch</Link>
          </h3>
        </li> */}

        <li>
          <h3>
            <Link href="/test/swiper-practice">
              Swiper-Practice: Autoplay, Navigation
            </Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/test/swiper-parallax">Swiper-Parallax</Link>
          </h3>
        </li>

        <li>
          <h3>
            <Link href="/parallax-landing-gsap">Parallax Landing GSAP</Link>
          </h3>
        </li>

        <li>
          <h2> API Practice</h2>
        </li>
        <ul>
          <li>
            <Link href="/api-practice/dog-imgs">
              Random Dogs Img (using API)
            </Link>
          </li>
          <br />
          <li>
            <Link href="/api-practice/cast-img">
              Cast Images (using API, useState, useEffect, useQuery)
            </Link>
          </li>
          <br />
          <li>
            <Link href="/api-practice/formik">Formik</Link>
          </li>
          <br />
          <li>
            <Link href="/api-practice/login-page">
              Login Page (using Formik)
            </Link>
          </li>
          <br />
          <li>
            <Link href="/api-practice/sign-in">
              Sign-In Page (using POST login-sucessful API)
            </Link>
          </li>
        </ul>

        <li>
          <h3>
            <Link href="/to-do">Task To DO</Link>
          </h3>
        </li>

        <li>
          <h3>
            <Link href="/weather-app">Weather Report</Link>
          </h3>
        </li>
      </ul>
    </div>
  );
}
export default Homepage;
