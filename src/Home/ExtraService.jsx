import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css';
const ExtraService = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000, // Set the animation duration in milliseconds
        });
      }, []);
    return (
        <div data-aos="fade-up" className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-gray-100 p-8 rounded-xl my-10 space-y-4" >
            <div className="flex justify-center items-center gap-2  ">
                <div>
                    <img src="https://i.ibb.co/HtfYVxx/service-icon-1.png" alt="" />
                </div>
                <div>
                       <h1 className="text-base font-bold" >100 DAY RETURNS</h1>
                       <p className="text-xs text-gray-500 " >No-Nonsense Return <br /> Policy
                        If You Are not Happy.</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-2  ">
                <div>
                    <img src="https://i.ibb.co/f85V0Tm/service-icon-2.png" alt="" />
                </div>
                <div>
                       <h1 className="text-base font-bold" >FREE SHIPPING</h1>
                       <p className="text-xs text-gray-500 " >Your Precious Package <br /> Is
                    Expedited And Insured.</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-2  ">
                <div>
                    <img src="https://i.ibb.co/WDqP5Ph/service-icon-3.png" alt="" />
                </div>
                <div>
                       <h1 className="text-base font-bold" >SECURE PAYMENT</h1>
                       <p className="text-xs text-gray-500 " >Your Payment Information <br /> Is Encryption.</p>
                </div>
            </div>
            <div className="flex justify-center items-center gap-2  ">
                <div>
                    <img src="https://i.ibb.co/t4vPQ6D/service-icon-4.png" alt="" />
                </div>
                <div>
                       <h1 className="text-base font-bold" >CUSTOMER SUPPORT</h1>
                       <p className="text-xs text-gray-500 " >Our Support Team Are <br /> Ready 24/7 To Answer Any Have.</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraService;