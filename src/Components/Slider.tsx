import React, { CSSProperties, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import "../Css/projects-slider.css";

type imagelist = {
  id: number;
  url: string;
};

const images: imagelist[] = [
  {
    id: 1,
    url: "https://picsum.photos/id/239/200/300",
  },
  {
    id: 2,
    url: "https://picsum.photos/id/240/200/300",
  },
  {
    id: 3,
    url: "https://picsum.photos/id/241/200/300",
  },
  {
    id: 4,
    url: "https://picsum.photos/id/242/200/300",
  },
];

const ImageSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [order, setOrder] = useState(images.map((item) => item.id));
  const inView = useInView(sliderRef);
  console.log("initial " + order);

  const handleClick = (img: { id: number; url: string }) => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const imgDiv = document.querySelector(`[data-img="${img.url}"]`);
      const firstimginlist = sliderRef.current.children[0];
      if (imgDiv) {
        slider.appendChild(firstimginlist);
        slider.prepend(imgDiv);
      }
      const clickedIndex = order.indexOf(img.id);
      console.log("clicked index" + clickedIndex);

      const prevFirst = order[0];
      const newArray = [
        img.id,
        ...order.filter((item) => item != img.id && item != order[0]),
        prevFirst,
      ];
      setOrder(newArray);
    }
  };

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  const variants = {
    hidden: (index: number) => {
      console.log("test" + order);
      return { y: 100 * (order.indexOf(index)), opacity: 1 };
    },
    visible: (index: number) => ({
      y: -100,
      opacity: 1,
      transition: { duration: 1 * (order.indexOf(index) + 1) },
    }),
  };

  return (
    <div className="images-container">
      <div ref={sliderRef} className="slider">
        {images.map((img, index) => (
          <AnimatePresence>
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              onClick={() => handleClick(img)}
              key={img.id}
              variants={variants}
              custom={img.id}
              className="img-div"
              data-img={img.url} // Associate each motion.div with its respective image URL
              style={{ "--img": `url(${img.url})` } as CSSProperties}
            />
          </AnimatePresence>
        ))}
      </div>
    </div>
  );
};

const Slide = () => {
  return <motion.div></motion.div>;
};
export default ImageSlider;
