import React from 'react'
import css from '../../components/features/Features.module.css'
import bg from '../../assets/images/feature_bg.png'
import feature_gallery from '../../assets/images/feature_gallary.png'
import perfomance from '../../assets/images/perfomance.png'
import analytics from '../../assets/images/analytics.png'
import management from '../../assets/images/management.png'

export const Features = () => {
  return (
    <div className={`${css.container} relative`}>
        <div className={`relative`}>
                <img className={`w-full  object-cover ${css.bg_img} `} src={bg} alt="" />
               <div className={`absolute top-0 left-0 right-0 bottom-0 mx-[13%] flex flex-col items-center pt-[300px]`}>
                    <p className={`text-[12px] bg-[#DCFCE7] font-['Poppins'] leading-[18px] font-[500] text-[#22C55E] w-[74px] mb-[25px] text-center rounded-[36px]`}>
                    FEATURES
                    </p>
                    <h2 className={`pb-[50px] ${css.feature_heading}`}>
                    Gain more insight into how people use your
                    </h2>
                    <p className={`w-[65%] pb-[50px] ${css.feature_text}`}>
                    With our integrated CRM, project management, 
                    collaboration and invoicing capabilities, 
                    you can manage every aspect of your business in one secure platform.
                    </p>
                    <div className={`w-[auto]`}>
                        <img className={`pb-[100px] w-[100%] object-cover`} src={feature_gallery} alt="" />
                    </div>
                    <div className={`flex gap-8`}>
                        <div className={`flex flex-col w-[360px] items-center`}>
                            <img className={`h-[64px] w-[64px] mb-[35px]`} src={perfomance} alt="" />
                            <h1 className={`font-['Poppins'] font-[700] text-[24px] leading-8 text-center text-[#2A3342] mb-[35px]`}>
                            Measure your performance
                            </h1>
                            <p className={`font-['Poppins'] w-[287px] font-[500] text-[16px] leading-6 text-center text-[#556987]`}>
                            Stay connected with your team and 
                            make quick decisions wherever you are. 
                            </p>
                        </div>
                        <div className={`flex flex-col w-[360px] items-center`}>
                            <img className={`h-[64px] w-[64px] mb-[35px]`} src={analytics} alt="" />
                            <h1 className={`font-['Poppins'] font-[700] text-[24px] leading-8 text-center text-[#2A3342] mb-[35px]`}>
                            Custom analytics
                            </h1>
                            <p className={`font-['Poppins'] w-[287px] font-[500] text-[16px] leading-6 text-center text-[#556987]`}>

                            Get a complete sales dashboard in the cloud. 
                            See activity, revenue and social metrics all in one place.
                            </p>
                        </div>
                        <div className={`flex flex-col w-[360px] items-center`}>
                            <img className={`h-[64px] w-[64px] mb-[35px]`} src={management} alt="" />
                            <h1 className={`font-['Poppins'] font-[700] text-[24px] leading-8 text-center text-[#2A3342] mb-[35px]`}>
                            Team Management
                            </h1>
                            <p className={`font-['Poppins'] w-[287px] font-[500] text-[16px] leading-6 text-center text-[#556987]`}>
                            Our calendar lets you know what is happening 
                            with customer and projects so you
                            </p>
                        </div>
                    </div>
               </div>
              
        </div>
    
    </div>
  )
}