import { Skew } from "./Skew";
import dolleur from "./images/dollEur.png";
export const Header = () => {
    return (
        <header className="row">
            <img src={dolleur} alt="logo" className="logo"></img>
            <h2 className="change-h2">Currency Converter</h2>
            <Skew width={25} height={50} background="black" />
        </header>
    );
};
