import { CSSProperties, useEffect } from "react";
import { ViewHeightDiv } from "../Components/ui/viewHeightDiv.tsx";
import Fonts from "../CSS_Modules/fonts.module.css";
import "../Css/home.css";
import "../Css/about.css";
// import ImageSlider from "../Components/Slider.tsx";
import { ImgSliderV2 } from "../Components/ImgSliderV2.tsx";
import { Playground } from "../Components/sections/Playground.tsx";
import Style from "../CSS_Modules/VhDiv.module.css";
import { Footer } from "../Components/sections/Footer.tsx";

type paralaxImg = {
  id: string;
  url: string;
};
const imgList: paralaxImg[] = [
  //the order has a crucial role
  { id: "sky", url: "src\\assets\\paralax_images\\sky.png" },
  { id: "lala_02", url: "src\\assets\\paralax_images\\lala_02.png" },
  { id: "mountain_01", url: "src\\assets\\paralax_images\\mountain_01.png" },
  { id: "mountain_02", url: "src\\assets\\paralax_images\\mountain_02.png" },
  { id: "main-paralax", url: "src\\assets\\paralax_images\\main.png" },
  { id: "bambou_01", url: "src\\assets\\paralax_images\\bambou_01.png" },
  { id: "bambou_02", url: "src\\assets\\paralax_images\\bambou_02.png" },
  { id: "bambou_03", url: "src\\assets\\paralax_images\\bambou_03.png" },
  { id: "bambou_04", url: "src\\assets\\paralax_images\\bambou_04.png" },
  { id: "bambi", url: "src\\assets\\paralax_images\\bambi.png" },
  { id: "lala_01", url: "src\\assets\\paralax_images\\lala_01.png" },
];
export function Home() {
  const centerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  useEffect(() => {
    const sky: HTMLElement = document.querySelector(".sky")!;
    const lala_02: HTMLElement = document.querySelector(".lala_02")!;
    const lala_01: HTMLElement = document.querySelector(".lala_01")!;
    const mountain_01: HTMLElement = document.querySelector(".mountain_01")!;
    const mountain_02: HTMLElement = document.querySelector(".mountain_02")!;
    const bambi: HTMLElement = document.querySelector(".bambi")!;

    const handleScroll = () => {
      const yScroll = window.scrollY;

      if (yScroll < 430) {
        sky.style.top = yScroll * -0.1 + "%";
      }
      mountain_01.style.left = 20 + yScroll * 0.1 + "%";
      mountain_02.style.left = -10 + yScroll * -0.1 + "%";
      lala_01.style.left = yScroll * 0.1 + "%";
      if (yScroll < 295) {
        lala_02.style.top = yScroll * -0.1 + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div style={centerStyle} className={"main_title"}>
        <>
          {imgList.map((img) => (
            <img className={`paralax-img ${img.id}`} src={img.url}></img>
          ))}

          <h1
            className={`${Fonts.poppins_extra_bold} ${Fonts.dark_color} ${Fonts.big_title}`}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Thibaut</span>
            <span>Hellinckx</span>
          </h1>
        </>
      </div>
      <div className="about">
        <img src="https://picsum.photos/id/237/1920/1080" alt="" />
        <p className={`${Fonts.light_color}`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
          adipisci error, possimus, eos voluptates in corrupti accusamus soluta
          ipsa dignissimos facilis. Cum distinctio nisi debitis ex repellat eum
          nulla possimus? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Maxime provident aspernatur veritatis nostrum reprehenderit
          impedit quis tempora perferendis alias, hic rerum placeat eius est
          illum expedita ad exercitationem atque iste. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Similique animi repellat quis iure
          id. Repudiandae, rerum excepturi ullam harum soluta atque deserunt
          veritatis magni ratione nulla fugiat unde eligendi. Unde?
        </p>
        <h1 className={` ${Fonts.big_title} ${Fonts.light_color}`}>About</h1>
      </div>

      {/* <div className="images-container">
        <div className="img-div" style={{"--img": "url(https://picsum.photos/id/238/200)",} as CSSProperties}></div>
        <div className="img-div" style={{"--img": "url(https://picsum.photos/id/239/200)",} as CSSProperties}></div>
        <div className="img-div" style={{"--img": "url(https://picsum.photos/id/240/200)",} as CSSProperties}></div>
        <div className="img-div" style={{"--img": "url(https://picsum.photos/id/241/200)",} as CSSProperties}></div>
      </div> */}
      {/* <ImageSlider></ImageSlider> */}
      <ImgSliderV2></ImgSliderV2>
      <Playground></Playground>
      <Footer></Footer>
    </>
  );
}
