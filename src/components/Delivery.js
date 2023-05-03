import { useContext } from "react";
import { langContext } from "../lib/langContext";
const Delivery = () => {
    const {langdb} = useContext(langContext);
    
    return ( 
        <div className="containter pb-20 pt-5 lg:py-28 px-5 md:px-0">
            <h2 className='primaryFont text-center text-2xl font-medium pb-14 md:pb-16 tracking-wide px-0 md:px-5'>{langdb.deliveryTitle}</h2>
            <div className='flex gap-20 md:gap-5 flex-wrap justify-evenly pt-5 '>
                {langdb.deliveryCards.map((card,index) => (
                    <div className='max-w-[350px] text-center shadow-xl p-5 rounded-lg' key={index}>
                        <div className="max-w-[150px] mx-auto">{card.icon}</div>
                        <p className='bg-white p-3 font-bold tracking-wide'>{card.text}</p>
                    </div>
                ))}
            </div>
            <p className='text-center font-bold text-md py-10 px-3'>{langdb.deliveryDesc}</p>
        </div>
     );
}
 
export default Delivery;