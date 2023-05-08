import { useContext } from "react";
import { langContext } from "../lib/langContext";

const Services = () => {
    const {langdb} = useContext(langContext);
    return ( 
        <div className="containter pt-20 lg:pt-32 pb-8 px-5 md:px-0">
            <h2 className='primaryFont text-center text-[26px] font-medium pb-5 tracking-wide px-0 md:px-5'>{langdb.serviceTitle}</h2>
            <p className='text-center text-[16px    ] pb-10 px-0 md:px-5 font-thin'>{langdb.serviceDesc}</p>
            <div className='flex gap-2 md:gap-5 flex-wrap justify-evenly pt-5'>
                {langdb.serviceCards.map((card,index) => (
                    <div className='max-w-[350px]' key={index}>
                        <img src={require(`../img/serviceCard${index+1}.jpg`)} alt="" className='rounded-md'/>
                        <p className='bg-white max-w-[90%] mx-auto relative bottom-[45px] p-3 font-lighttracking-wide text-center shadow-xl'>{card.text}</p>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Services;