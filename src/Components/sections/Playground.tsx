import { CSSProperties, useState } from "react";
import "../../Css/home.css";
import "../../Css/playground.css";
import Slider from "../ui/Slider";
import Fonts from "../../CSS_Modules/fonts.module.css";
import { motion } from "framer-motion";

export function Playground() {
  const [sliderValue, setSliderValue] = useState(10);

  const handleSliderValueChange = (value: number) => {
    console.log("test " + value);

    setSliderValue(value);
  };

  return (
    <div className="playground-section">
      <h1 className={`playground-title ${Fonts.big_title} ${Fonts.dark_color}`}>
        Playground
      </h1>
      <div className="playground-img-container">
        <motion.div
          initial={{ width: "10%", height: "10%" }}
          animate={{ width: `${sliderValue}%`, height: `${sliderValue}%` }}
          transition={{ duration: 0.1 }}
          className="playground-img"
          style={
            {
              "--img": "url(https://picsum.photos/id/164/1920/1080)",
            } as CSSProperties
          }
        ></motion.div>
      </div>
      <Slider callback={handleSliderValueChange}></Slider>
    </div>
  );
}
