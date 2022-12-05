import React from 'react'
import css from '../../components/getstarted/GetStarted.module.css'
import getstarted_bg from '../../assets/images/getstarted_bg.png' 
import white_bg from '../../assets/images/hlf_bg2.png' 


export const GetStarted = () => {
  return (
    <div className={`relative h-[534px]`}>
        <img className={`w-full flex absolute bottom-0  ${css.wht_bg}`} src={white_bg} alt="" />

        <div className={`flex  absolute top-0 flex-col mx-[13%]`}>
           
                <img className={`${css.navy_blue}`} src={getstarted_bg} alt="" />

                <div className={`absolute top-0 left-0 right-0 `}>
                    <div className={`flex justify-around items-center my-[100px]`}>
                        <div className={`flex flex-col w-[456px] `}>
                            <p className={`mb-[20px] font-['Poppins'] font-[700] text-[36px] text-[#FFFFFF] leading-[44px] tracking-[-0.02em]`}>
                            The fastest way from idea to live site. Period.
                            </p>
                            <p className={`text-[#8896AB] font-['Poppins'] font-[500] text-[20px] leading-[30px]`}>
                            Flex is a Small SaaS Business. Flex isn't a traditional company.
                            </p>
                        </div>
                        <div className={`flex gap-3`}>
                            <button className={`bg-[#22C55E] border-[none] rounded-md text-[#ffffff] py-[20px] px-[60px] font-['Poppins'] font-[500] text-[18px] leading-[28px]`}>Get Started</button>
                            <button  className={`bg-[#FFFFFF] border-[none] rounded-md text-[#333F51] py-[20px] px-[60px] font-['Poppins'] font-[500] text-[18px] leading-[28px]`}>Learn More</button>
                        </div>
                    </div>
                  
                </div>

         
         
        </div>
        

    </div>
  )
}
