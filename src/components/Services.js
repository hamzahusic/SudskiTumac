import { useContext } from "react";
import { langContext } from "../lib/langContext";

const Services = () => {
    const {langdb} = useContext(langContext);
    return ( 
        <div className="containter pt-20 lg:pt-32 pb-8 px-2">
            <h2 className='primaryFont text-center text-[25px] font-medium pb-5 tracking-wide'>{langdb.serviceTitle}</h2>
            <p className='text-center text-lg pb-10'>{langdb.serviceDesc}</p>
            <div className='flex gap-4 flex-wrap justify-evenly pt-5'>
                {langdb.serviceCards.map((card,index) => (
                    <div className='max-w-[350px]' key={index}>
                        <img src={require(`../img/serviceCard${index+1}.jpg`)} alt="" className='rounded-md'/>
                        <p className='bg-white max-w-[90%] mx-auto relative bottom-[45px] p-3 font-bold tracking-wide text-center shadow-xl'>{card.text}</p>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Services;