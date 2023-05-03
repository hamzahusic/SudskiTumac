import headerImage from '../img/header-image.jpg'

const Header = () => {
    return ( 
        <div className="containter text-center">
            <div className="pt-40 pb-20">
                <h1 className="text-[#4cc5fd] text-[60px] font-bold primaryFont leading-[60px] py-5">Bajramović Aida – Ovlašteni sudski tumač za njemački jezik </h1>
                <div className="pb-11 pt-5 secondaryFont text-black">
                    <p>Prevoditelj u mjestu IMEMJESTA</p>
                    <p>Vama na raspolaganju</p>
                </div>
                <a className="text-white py-[20px] px-[35px] bg-[#4cc5fd] secondaryFont font-bold tracking-wide" href="#contact">ZATRAŽITE PONUDU</a>
            </div>
            <img src={headerImage} alt=""/>
        </div>
     );
}
 
export default Header;