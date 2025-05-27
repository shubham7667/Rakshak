import React, { useEffect, useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import Que1 from '../../components/Dropdowns/Que1';
import Que2 from '../../components/Dropdowns/Que2';
import Que3 from '../../components/Dropdowns/Que3';
import Que4 from '../../components/Dropdowns/Que4';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);

  return (
    <div className="w-full bg-gray-100 flex justify-center items-center flex-col p-5">
      <h1 data-aos="fade-left" className="font-semibold text-4xl text-center">
        Stay secure with our trusted features
      </h1>
      <p data-aos="fade-left" className="p-5 text-zinc-500 text-center">
        Discover how we keep you protected and informed.
      </p>

      <div
        data-aos="fade-left"
        className="queContainer flex flex-col justify-center items-center w-full max-w-5xl mt-10 gap-5"
      >
        {/* Question 1 */}
        <div
          className="que flex flex-col w-full justify-between gap-5 cursor-pointer px-4"
          onClick={() => handleToggle(1)}
        >
          <div className="flex w-full justify-between items-center">
            <h2 className="text-xl text-zinc-700 hover:text-lime-500">
              How do I file an FIR?
            </h2>
            <RiArrowDropDownLine size="30px" />
          </div>
          {openIndex === 1 && <Que1 />}
          <div className="w-full bg-black h-[1px]"></div>
        </div>

        {/* Question 2 */}
        <div
          className="que flex flex-col w-full justify-between gap-5 cursor-pointer px-4"
          onClick={() => handleToggle(2)}
        >
          <div className="flex w-full justify-between items-center">
            <h2 className="text-xl text-zinc-700 hover:text-lime-500">
              How can I report a crime?
            </h2>
            <RiArrowDropDownLine size="30px" />
          </div>
          {openIndex === 2 && <Que2 />}
          <div className="w-full bg-black h-[1px]"></div>
        </div>

        {/* Question 3 */}
        <div
          className="que flex flex-col w-full justify-between gap-5 cursor-pointer px-4"
          onClick={() => handleToggle(3)}
        >
          <div className="flex w-full justify-between items-center">
            <h2 className="text-xl text-zinc-700 hover:text-lime-500">
              Is it possible to contact the police here?
            </h2>
            <RiArrowDropDownLine size="30px" />
          </div>
          {openIndex === 3 && <Que3 />}
          <div className="w-full bg-black h-[1px]"></div>
        </div>

        {/* Question 4 */}
        <div
          className="que flex flex-col w-full justify-between gap-5 cursor-pointer px-4"
          onClick={() => handleToggle(4)}
        >
          <div className="flex w-full justify-between items-center">
            <h2 className="text-xl text-zinc-700 hover:text-lime-500">
              What other services do you offer?
            </h2>
            <RiArrowDropDownLine size="30px" />
          </div>
          {openIndex === 4 && <Que4 />}
          <div className="w-full bg-black h-[1px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
