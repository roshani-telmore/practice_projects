import ArrowRightSide from "components/prabot/arrow-rightside";
import EllipseLeftArrow from "components/prabot/ellipse-left-arrow";
import EllipseRight from "components/prabot/ellipse-right";
import EllipseRightArrow from "components/prabot/ellipse-right-arrow";
import PrabotLogo from "components/prabot/prabot-logo";
import ProductArrow from "components/prabot/product-arrow";
import Refrigerator1 from "components/prabot/refrigerator-1";
import Refrigerator2 from "components/prabot/refrigerator-2";
import Refrigerator3 from "components/prabot/refrigerator-3";
import Refrigerator4 from "components/prabot/refrigerator-4";
import Refrigerator5 from "components/prabot/refrigerator-5";
import React from "react";
function Prabot() {
  return (
    <div className="prabot-page">
      <div className="header-wrap">
        <div className="back-wrap">
          <div className="background-1"></div>

          <div className="background-2"></div>
        </div>
        <div className="header-menu">
          <PrabotLogo />
          <div className="menu">
            <h1>Shop</h1>
            <h1>Inspire</h1>
            <h1>Product</h1>
          </div>
        </div>
        <div className="header-cabinet">
          <div className="wide-cabinet">
            <h1>MINIature Wide Cabinet </h1>
            <button>
              <a href="#">Details</a>
              <ArrowRightSide />
            </button>
          </div>

          <div className="header-img">
            <img className="product-img" src="/images/prabot-header.png" />
            <div className="site">yourwebiste.com</div>
          </div>
        </div>
      </div>

      <div className="email-wrap">
        <span>yourwebiste.com</span>
        <div className="rectangle"></div>
      </div>

      <div className="hero-section">
        <div className="hero-para ">
          <img className="prabot-hero-1" src="/images/prabot-hero-1.png" />
          <p className="para">
            Rumah berantakan karena banyak barang tercecer? Perlu simpan barang
            agar mudah dicari? Pengen dekor ruangan biar estetik?
          </p>
        </div>
        <div className="ellipse-arrow">
          <div className="left-arrow">
            <EllipseLeftArrow />
          </div>
          <div className="right-arrow">
            <EllipseRightArrow />
          </div>
        </div>

        <div className="concept-wrap">
          <div className="concept">
            <h1>Con-cept</h1>
            <p>
              Gaya skandinavia meluas di Eropa Timur. Pada desain ini sangat
              memperhatikan detail, nilai fungsionalitas tanpa menghilangkan
              keindahan dan keanggunannya.
            </p>
          </div>
          <img className="prabot-hero-2" src="/images/prabot-hero-2.png" />
        </div>
      </div>

      <div className="mini-cabinet">
        <div className="furniture-wrap">
          <img className="furniture" src="/images/prabot-furniture.png" />
          <img className="furni" src="/images/prabot-furni.png" />

          <h1 className="mini">Minimalist Cabinet</h1>
        </div>

        <div className="ingre-size-wrap">
          <div className="ingre-size">
            <div className="ingre-wrap">
              <span>Ingredient</span>
              <p>
                Bahan Kayu mahoni,MDF Finishing cat duco Dikirim utuh, tinggal
                pasang kaki dengan instruksi rakit.
              </p>
            </div>

            <div className="size-btn-wrap">
              <div className="size-wrap">
                <span>Size</span>
                <p>
                  Uk. kompartemen 47 x 26,5 x18 cm Pintu saat dibuka 30 cm
                  Tinggi kaki 10 cm
                </p>
              </div>

              <button>
                <a href="#">Details</a>
                <ArrowRightSide />
              </button>
            </div>
          </div>

          <div className="refre-img">
            <img src="/images/prabot-refre.png" />
          </div>
        </div>
      </div>

      <div className="wide-feature-wrap">
        <div className="study-tbl">
          <img src="/images/prabot-study-tbl.png" />
        </div>

        <div className="feature-wrap">
          <div className="points-wrap">
            <h1>MINIature Wide Feature</h1>
            <ul>
              <li>
                Terdapat 4 rak kaca berkualitas dan bisa diatur ketinggian nya
              </li>

              <li>
                Mempunyai 2 pintu kaca dengan push button agar mudah buka tutup
              </li>
              <li>Lapisan cermin bagian dalam untuk estetika</li>

              <li>Sudut lemari tumpul agar tidak melukai saat terbentur</li>
              <li>Dilengkapi adjuster agar tidak merusak lantai</li>
            </ul>
          </div>

          <button>
            <a href="#">Feature</a>
            <ArrowRightSide />
          </button>
        </div>
      </div>

      <div className="color-wrap">
        <h1>Color Options</h1>

        <div className="refrigerator-order-wrap">
          <div className="refrigerator-order">
            <h2>Ivory</h2>
            < Refrigerator1 className="refrig"/>
            <button>
              <a href="#">Order Now</a>
            </button>
          </div>

          <div className="refrigerator-order">
            <h2>Natural</h2>
            <Refrigerator2 className="refrig"/>
            <button>
              <a href="#">Order Now</a>
            </button>
          </div>
          <div className="refrigerator-order">
            <h2>Tosca</h2>
            <Refrigerator3 className="refrig"/>
            <div className="edition-btn">
              <a href="#">Special Edition</a>
            </div>
          </div>
          <div className="refrigerator-order">
            <h2>Black</h2>
            <Refrigerator4 className="refrig"/>
            <button>
              <a href="#">Order Now</a>
            </button>
          </div>
          <div className="refrigerator-order">
            <h2>Pink</h2>
            <Refrigerator5 className="refrig" />
            <button>
              <a href="#">Order Now</a>
            </button>
          </div>

          <div className="right-arrow">
            <EllipseRight />
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="product-btn">
          <a href="#">View All product</a>
          <ProductArrow />
        </div>
      </div>





    </div>
  );
}
export default Prabot;
