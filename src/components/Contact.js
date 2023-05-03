import { useContext } from "react";
import { langContext } from "../lib/langContext";

const Contact = () => {
    const {langdb} = useContext(langContext);
    return ( 
        <div className="bg-[#4cc5fd] text-white" id="contact">
            <div className="containter py-10 px-5">
                <h2 className="text-3xl primaryFont text-center tracking-wider pb-5">{langdb.contactTitle}</h2>
                <div className="font-bold text-lg py-5 flex flex-col gap-3 tracking-wide">
                    <p>Aida Bajramović</p>
                    <p>{langdb.contactPhone}</p>
                    <p>{langdb.contactEmail}</p>
                    <p className="text-md lg:text-xl pt-5">{langdb.contactMessageOne}</p>
                    <p className="text-md lg:text-xl">{langdb.contactMessageTwo}</p>
                </div>
            </div>    
        </div>
     );
}
 
export default Contact;