import { useContext } from "react";
import { langContext } from "../lib/langContext";
const Delivery = () => {
    const {langdb} = useContext(langContext);
    
    return ( 
        <div className="containter py-32">
            <h2 className='primaryFont text-center text-2xl font-medium pb-16 tracking-wide'>{langdb.deliveryTitle}</h2>
            <div className='flex gap-5 flex-wrap justify-evenly pt-5 '>
                {langdb.deliveryCards.map((card,index) => (
                    <div className='max-w-[350px] text-center shadow-xl p-5 rounded-lg' key={index}>
                        <div className="max-w-[150px] mx-auto">{card.icon}</div>
                        <p className='bg-white p-3 font-bold tracking-wide'>{card.text}</p>
                    </div>
                ))}
            </div>
            <p className='text-center font-bold text-md py-10'>{langdb.deliveryDesc}</p>
        </div>
     );
}
 
export default Delivery;