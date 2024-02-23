import { CSSProperties, useState } from "react";
import "../Css/projects-slider.css";

type imagelist = {
  id: number;
  url: string;
};
const images: imagelist[] = [
  {
    id: 1,
    url: "https://picsum.photos/id/239/1920/1080",
  },
  {
    id: 2,
    url: "https://picsum.photos/id/25/1920/1080",
  },
  {
    id: 3,
    url: "https://picsum.photos/id/70/1920/1080",
  },
  {
    id: 4,
    url: "https://picsum.photos/id/123/1920/1080",
  },
  {
    id: 5,
    url: "https://picsum.photos/id/142/1920/1080",
  },
  {
    id: 6,
    url: "https://picsum.photos/id/164/1920/1080",
  },
  {
    id: 7,
    url: "https://picsum.photos/id/190/1920/1080",
  },
];

export function ImgSliderV2() {
  const [mainImgId, setMainImgId] = useState<number>(1);
  const [subImagesOrder, setSubImagesOrder] = useState<number[]>(
    images
      .filter((item) => item.id !== mainImgId) // Filter out the mainImgId
      .map((item) => item.id)
  );

  console.log(subImagesOrder);

  const mainImgUrl: string =
    images.find((imgdata) => imgdata.id === mainImgId)?.url ?? "";

  const handleOnclick = (id: number) => {
    setSubImagesOrder([
      id,
      ...subImagesOrder.filter((img) => img != id && img != mainImgId),
      mainImgId,
    ]);
    setMainImgId(id);
  };

  return (
    <>
      <div className="slider-container">
        <div
          className="MainImg"
          style={{ "--img": `url(${mainImgUrl})` } as CSSProperties}
        >
          {/* <img src={mainImgUrl} alt="" /> */}
        </div>
        <div className="scrolltest">
          <div className="subImages">
            {subImagesOrder.map((imgId) => {
              if (imgId == mainImgId) {
                return;
              }
              const imgdata = images.find((imgdata) => imgdata.id === imgId);
              return (
                <div
                  className="img"
                  key={imgId}
                  onClick={() => handleOnclick(imgId)}
                  style={{ "--img": `url(${imgdata?.url})` } as CSSProperties}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
