import {TruckIcon,DevicePhoneMobileIcon,EnvelopeOpenIcon} from '@heroicons/react/24/outline'
const Delivery = () => {
    const servicesData = [
        {
            icon:<TruckIcon/>,
            text:"ličnom dostavom na osnovu dogovora"
        },
        {
            icon:<DevicePhoneMobileIcon/>,
            text:"putem Viber-a ili Whatsappa na broj 061 174 442"
        },
        {
            icon:<EnvelopeOpenIcon/>,
            text:"putem E-Mail-a na aida.bajramovic@gmail.com"
        }
    ]

    return ( 
        <div className="containter py-32">
            <h2 className='primaryFont text-center text-2xl font-medium pb-16 tracking-wide'>Dokumenti za prijevod se mogu dostaviti: </h2>
            <div className='flex gap-5 flex-wrap justify-evenly pt-5 '>
                {servicesData.map((card,index) => (
                    <div className='max-w-[350px] text-center shadow-xl p-5 rounded-lg' key={index}>
                        <div className="max-w-[150px] mx-auto">{card.icon}</div>
                        <p className='bg-white p-3 font-bold tracking-wide'>{card.text}</p>
                    </div>
                ))}
            </div>
            <p className='text-center font-bold text-md py-10'>Za preuzimanje ovjerenog prijevoda neophodno je donijeti orginalni dokument ili ovjerenu kopiju. </p>
        </div>
     );
}
 
export default Delivery;