import headerImage from '../img/header-image.jpg'
import { useContext } from "react";
import { langContext } from "../lib/langContext";
const Header = () => {
    const {langdb} = useContext(langContext);
    return ( 
        <div className="containter text-center">
            <div className="pt-40 pb-20">
                <h1 className="text-[#4cc5fd] text-[60px] font-bold primaryFont leading-[60px] py-5">{langdb.headerTitle}</h1>
                <div className="pb-11 pt-5 secondaryFont text-black">
                    <p>{langdb.headerDesc}</p>
                </div>
                <a className="text-white py-[20px] px-[35px] bg-[#4cc5fd] secondaryFont font-bold tracking-wide" href="#contact">{langdb.headerBtn}</a>
            </div>
            <img src={headerImage} alt=""/>
        </div>
     );
}
 
export default Header;