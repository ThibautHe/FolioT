import "../../Css/footer.css";
import Fonts from "../../CSS_Modules/fonts.module.css";
import Size from "../../CSS_Modules/VhDiv.module.css";

export function Footer() {
  return (
    <div className={`footer-container`}>
      <h1 className={`footer-title`}>Thibaut.Hellinckx</h1>
      <div className="footer-content">
        <div className="footer-nav">
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Playground</li>
          </ul>
        </div>
        <div className={`footer-contact ${Fonts.poppins_extra_bold}`}>
          <h1 className={Fonts.small_title}>contact</h1>
          <p>thibaut.hellinckx@hotmail.com</p>
          <p>+32 494 83 48 05</p>
          <a className="icon-linkedin1"></a>
        </div>
      </div>
    </div>
  );
}
