import { PropsWithChildren } from "react";
import Style from "../../CSS_Modules/VhDiv.module.css";

type props = {
  style: React.CSSProperties;
  className:string;
};

export function ViewHeightDiv({ style, className, children }: PropsWithChildren<props>) {
  return (
    <div className={`${className}  ${Style.vh}`} style={style}>
      {children}
    </div>
  );
}
