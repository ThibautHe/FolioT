import { CSSProperties } from "react";
import { ViewHeightDiv } from "../Components/ui/viewHeightDiv.tsx";
import Fonts from "../CSS_Modules/fonts.module.css";
import "../Css/home.css";
import "../Css/about.css";
// import ImageSlider from "../Components/Slider.tsx";
import { ImgSliderV2 } from "../Components/ImgSliderV2.tsx";
import { Playground } from "../Components/Playground.tsx";
import Style from "../CSS_Modules/VhDiv.module.css";

export function Home() {
  const centerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <ViewHeightDiv style={centerStyle} className={"main_title"}>
        <>
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
      </ViewHeightDiv>
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
    </>
  );
}
