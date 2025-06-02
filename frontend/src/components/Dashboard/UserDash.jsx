import { React, useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import { CiBellOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import Murder from '../../components/chart/Murder.jsx'
import News from './news.jsx';
import Quicklinks from '../Home/Quicklinks.jsx';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Footer from '../Home/Footer.jsx';
import { GoSidebarCollapse } from "react-icons/go";
import { GoSidebarExpand } from "react-icons/go";
import Sidebar from './sidebar.jsx';



const UserDash = () => {
 const [isClicked,setIsClicked]=useState(false)
const handleOnClick =()=>{

    setIsClicked(!isClicked)
  
}

  const user = JSON.parse(localStorage.getItem('user'))
  useEffect(() => {
    Aos.init(
      {
        duration: 2000,
        once: false
      }
    )
  }, [])


  return (
    <div className='bg-white w-auto h-screen  mt-20  '>
      <nav data-aos='zoom-in' className='fixed top-0 z-30 bg-white  w-full flex justify-between  items-center'>
      <button className='p-5' onClick={handleOnClick} >{isClicked?<GoSidebarCollapse size={20}/>:<GoSidebarExpand size={20}/>} </button>
        <div className="logo w-1/2">
          <img src={logo} alt="" className="w-20 h-auto" />
        </div>
        <div>
          <h1 className='font-bold text-black text-xl w-100'>Logged in as <span className='text-lime-500 '>'{user.name}'</span></h1>
        </div>
        <div className="notification w-1/2 flex justify-end p-5 gap-10 items-center">
          <CiBellOn size={30} />
          <img src={user.avtar} alt="User Avatar" className="w-10 h-10 rounded-full" />
        </div>
      </nav>
 {isClicked && <Sidebar/>}

      <div
  className={`  content grid grid-cols-1 justify-center items-center gap-20 transition-all duration-300  ${
    isClicked ? 'ml-70' : ''
  } `}
>


        <div data-aos='zoom-in' className="article p-5 ">
          <h1 data-aos='zoom-in' className='font-bold text-xl'> Crime in Today’s World: A Growing Concern</h1>

          Crime has been an integral challenge to human societies since the dawn of civilization. However, in today’s rapidly evolving world, the nature, scope, and impact of crime have changed dramatically. The digital revolution, urbanization, social inequalities, and geopolitical tensions have all contributed to new forms of criminal behavior, making crime prevention and law enforcement more complex than ever.
          <br /><br />
          <h1 data-aos='zoom-in' className='font-bold text-xl'>Changing Nature of Crime</h1>
          In the past, crimes were largely physical in nature—robbery, assault, or murder. Today, while traditional crimes still persist, modern society also faces more sophisticated threats like cybercrime, identity theft, and organized international crime. Cybercriminals can now steal millions from bank accounts, hack into secure databases, and manipulate information with just a few clicks, often escaping across jurisdictional boundaries.

          Terrorism is another form of modern crime that has taken a toll globally. With extremist ideologies spreading through online platforms, recruitment and radicalization have become easier and more widespread. Such crimes not only cause physical destruction but also instill fear and disrupt the peace and stability of nations.
          < Murder />
          <br /><br />
          <h1 data-aos='zoom-in' className='font-bold text-xl'>Root Causes of Crime</h1>
          The causes of crime are complex and interconnected. Poverty, unemployment, lack of education, and social inequality are among the major driving forces. People struggling to meet their basic needs may resort to theft or fraud out of desperation. Furthermore, the breakdown of family structures, peer pressure, and substance abuse also contribute to rising crime rates, especially among the youth.

          In the digital age, cybercrime has emerged as a consequence of both technological advancement and the lack of cyber ethics. Many people, particularly the young and unemployed, are lured into online crimes due to perceived anonymity and the promise of quick money.
          <br /> <br />
          <h1 data-aos='zoom-in' className='font-bold text-xl'>The Role of Society and Government </h1>
          Fighting crime is not just the responsibility of law enforcement agencies—it requires a collaborative effort from society as a whole. Governments must implement effective policies, invest in education and job creation, and ensure fair justice systems. Community engagement, social awareness programs, and mental health support can go a long way in preventing crime before it happens.

          Technology can also be a powerful tool in combating crime. Surveillance systems, data analytics, and artificial intelligence are being used to detect and prevent criminal activity. However, these must be used ethically and without infringing on citizens’ privacy rights.
          <br /><br />
          <h1 data-aos='zoom-in' className='font-bold text-xl'>Conclusion</h1>
          Crime in today’s world is a multi-faceted issue that requires a multi-dimensional response. While we may never eliminate crime entirely, we can certainly reduce its impact through collective effort, stronger governance, and social responsibility. By addressing the root causes and adapting to modern challenges, we can hope to build safer, more just communities for future generations.
        </div>
        <div data-aos='zoom-in' className="links">
          <h1 className='font-bold text-3xl'>Start using our services</h1>
          <Quicklinks />
        </div>

        <div data-aos='zoom-in' className="newsSection">
          <News />
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default UserDash
