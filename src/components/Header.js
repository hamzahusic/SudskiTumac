import headerImage from '../img/headerImg.jpg'
import { useContext } from "react";
import { langContext } from "../lib/langContext";
const Header = () => {
    const {langdb} = useContext(langContext);
    return ( 
        <header className="containter text-center">
            <div className="pt-32 md:pt-40 pb-20 px-5">
                <h1 className="break-words text-[#4cc5fd] text-[35px] md:text-[45px] lg:text-[60px] font-bold primaryFont lg:leading-[60px] py-5">{langdb.headerTitle}</h1>
                <div className="pb-11 pt-5 secondaryFont text-black">
                    <p>{langdb.headerDesc}</p>
                </div>
                <a className="text-white py-[20px] px-[35px] bg-[#4cc5fd] hover:bg-[#27a6e0]  secondaryFont font-bold tracking-wide" rel="nofollow" href="#contact">{langdb.headerBtn}</a>
            </div>
            <img src={headerImage} alt="img" className='p-3'/>
        </header>
     );
}
 
export default Header;