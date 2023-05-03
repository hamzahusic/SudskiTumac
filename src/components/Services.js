import cardImg from '../img/card-img.jpg'
const Services = () => {
    const servicesData = [
        {img:cardImg,text:"Prijevod dokumenata sa ovjerom sudskog tumača (rodni listovi, vozačke dozvole, pasoši, uvjerenja o nekažnjavanju itd.)"},
        {img:cardImg,text:"Prijevod dokumenta bez ovjere sudskog tumača (knjige, naučni tekstovi, brošure itd.)"},
        {img:cardImg,text:"Prijevod dokumenata za školovanje u inostranstvu (svjedočanstva, diplome)"},
        {img:cardImg,text:"Prijevodi za kompanije (Ugovori, tenderska dokumentacija, prezentacije)"},
        {img:cardImg,text:"Prijevodi dokumenata za zaposlenje u inostranstvu (CV, motivaciono pismo)"},
        {img:cardImg,text:"Prijevod sudske dokumentacije (rješenja, uvjerenja, presude)"},
    ]
    return ( 
        <div className="containter pt-32 pb-10">
            <h2 className='primaryFont text-center text-[25px] font-medium pb-5 tracking-wide'>Nudimo usluge prijevoda sa bosanskog jezika na njemački jezik kao i obrnuto: </h2>
            <p className='text-center text-lg pb-10'>Cijena prijevoda zavisi od obima dokumentacije, zahtjevnosti i slično. Kontaktirajte nas i mi ćemo Vam u najkraćem roku poslati sve detalje u vezi sa Vašim prijevodom.</p>
            <div className='flex gap-5 flex-wrap pt-5'>
                {servicesData.map((card,index) => (
                    <div className=' max-w-[350px]' key={index}>
                        <img src={card.img} alt="card-image" className='rounded-md'/>
                        <p className='bg-white max-w-[90%] mx-auto relative bottom-[45px] p-3 font-bold tracking-wide text-center shadow-xl'>{card.text}</p>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Services;