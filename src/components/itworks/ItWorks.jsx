import React from 'react'
// import css from '../../components/itworks/ItWorks.module.css'
import bg from '../../assets/images/itworksbg.png' 
import image_bg from '../../assets/images/work_img.png' 
import play from '../../assets/images/play.png' 
export const ItWorks = () => {
  return (
    <div className={`relative`}>
        <img className={`w-full object-cover`} src={bg} alt="" />
        <div className={`absolute top-0 left-0 right-0 mx-[13%] my-[15%]`}>
            <div className={`flex pb-[20px] items-center justify-between mb-[60px]`}>
                <div>
                    <h2 className={`mb-[25px] text-[#22C55E] bg-[#DCFCE7] rounded-[36px] w-[106px] font-['Poppins'] font-[500] text-[12px] text-center border-none`}>
                    HOW IT WORKS
                    </h2>  
                    <h2 className={`w-[554PX] mb-[40px] font-['Poppins'] font-[700] text-[48px] leading-[60px] tracking-[-0.02em] text-[#2A3342]`}>
                    Gain more insight into how people use your
                    </h2>
                    <p className={`w-[554PX] pr-[50px] font-['Poppins'] font-[500] text-[20px] leading-[30px] text-[#556987]`}>
                    With our integrated CRM, project management, 
                    collaboration and invoicing capabilities, 
                    you can manage your business in one secure platform.
                    </p>
                </div>
                <div className={`relative`}>
                    <img className={``} src={image_bg} alt="" /> 
                    <img className={`absolute top-[120px] right-[250px] cursor-pointer`} src={play} alt="" />
                </div>
            </div>

            <div className={`grid grid-rows-2  grid-cols-3 gap-10`}>
                <div>
                <p className={`mb-[15px] bg-[#22C55E] font-['Poppins'] font-[600] text-[20px] leading-[30px] text-center tracking-[-0.02em] w-[48px] rounded-full p-2 border-none text-[#FFFFFF]`}>1</p>
                <h1 className={`mb-[20px] font-['Poppins'] font-[700] text-[20px] lead-[30px] text-[#2A3342]`}>
                Measure your performance
                </h1>
                <p className={`pr-[90px] font-['Poppins'] font-[500] text-[16px] leading-6 text-[#556987]`}>
                Stay connected with your team and make quick decisions wherever you are.
                </p>
                </div>
               
                <div>
                <p className={`mb-[15px] bg-[#22C55E] font-['Poppins'] font-[600] text-[20px] leading-[30px] text-center tracking-[-0.02em] w-[48px] rounded-full p-2 border-none text-[#FFFFFF]`}>2</p>
                <h1 className={`mb-[20px] font-['Poppins'] font-[700] text-[20px] lead-[30px] text-[#2A3342]`}>
                Custom analytics
                </h1>
                <p className={`pr-[90px] font-['Poppins'] font-[500] text-[16px] leading-6 text-[#556987]`}>
                Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.
                </p>
                </div>
               
                <div>
                <p className={`bg-[#22C55E] mb-[15px] font-['Poppins'] font-[600] text-[20px] leading-[30px] text-center tracking-[-0.02em] w-[48px] rounded-full p-2 border-none text-[#FFFFFF]`}>3</p>
                <h1 className={`font-['Poppins'] mb-[20px] font-[700] text-[20px] lead-[30px] text-[#2A3342]`}>
                Team Management
                </h1>
                <p className={`font-['Poppins'] pr-[90px] font-[500] text-[16px] leading-6 text-[#556987]`}>
                Our calendar lets you know what is happening with customer and projects so you
                </p>
                </div>
               
                <div>
                <p className={`bg-[#22C55E] mb-[15px] font-['Poppins'] font-[600] text-[20px] leading-[30px] text-center tracking-[-0.02em] w-[48px] rounded-full p-2 border-none text-[#FFFFFF]`}>4</p>
                <h1 className={`font-['Poppins'] mb-[20px] font-[700] text-[20px] lead-[30px] text-[#2A3342]`}>
                Build your website
                </h1>
                <p className={`font-['Poppins'] pr-[90px] font-[500] text-[16px] leading-6 text-[#556987]`}>
                A tool that lets you build a dream website even if you know nothing about web design or programming.
                </p>
                </div>
               
                <div>
                <p className={`bg-[#22C55E] mb-[15px] font-['Poppins'] font-[600] text-[20px] leading-[30px] text-center tracking-[-0.02em] w-[48px] rounded-full p-2 border-none text-[#FFFFFF]`}>5</p>
                <h1 className={`font-['Poppins'] mb-[20px] font-[700] text-[20px] lead-[30px] text-[#2A3342]`}>
                Connect multiple apps
                </h1>
                <p className={`font-['Poppins'] pr-[90px] font-[500] text-[16px] leading-6 text-[#556987]`}>
                The first business platform to bring together all of your products from one place.
                </p>
                </div>
               
                <div>
                <p className={`bg-[#22C55E] mb-[15px] font-['Poppins'] font-[600] text-[20px] leading-[30px] text-center tracking-[-0.02em] w-[48px] rounded-full p-2 border-none text-[#FFFFFF]`}>6</p>
                <h1 className={`font-['Poppins'] mb-[20px] font-[700] text-[20px] lead-[30px] text-[#2A3342]`}>
                Easy setup
                </h1>
                <p className={`font-['Poppins'] pr-[90px] font-[500] text-[16px] leading-6 text-[#556987]`}>
                End to End Business Platform, Sales Management, Marketing Automation, Help Desk
                </p>
                </div>
               
                
            </div>

         
            
        </div>
    

    </div>
  )
}
