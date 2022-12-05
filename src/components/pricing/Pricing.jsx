import React from 'react'
import css from '../../components/pricing/Pricing.module.css'
import chkbox from '../../assets/images/Checkbox.png' 

export const Pricing = () => {
  return (
    <div className={`flex flex-col mx-[13%] mb-[150px] pt-[50px]`}>
       <p className={`mb-[15px] text-[12px] w-[65px] rounded-[36px] font-['Poppins'] font-[500] leading-[18px] text-[#22C55E]  bg-[#DCFCE7] text-center ${css.heading_label}`}>
        PRICING
       </p>
       <h1 className={`mb-[25px] ${css.pricing_decription}`}> 
       Flexible pricing plan for your startup
       </h1>
       <p className={`mb-[130px] ${css.pricing_list}`}>
       Pricing that scales with your business immediately.
       </p>
       <div className={`flex gap-[21px] justify-between`}>
        <div className={`flex flex-col flex-1 px-[30px] w-[359px] ${css.bg_card}`}>
            <div className={` flex flex-col justify-center items-center pt-[30px]`}>
                <p className={`bg-[#DCFCE7] font-['Poppins'] font-[500] text-[12px] leading-[18px] text-[#22C55E] mb-[25px]`}>PRICING</p>
                <p className={`font-['Poppins'] font-[500] text-[20px] leading-[30px] text-center text-[#22C55E] mb-[25px]`}>Basic Plan</p>
                <div className={`flex mb-[25px]`}>
                    <p className={`font-['Poppins'] font-[500] text-[24px] leading-[32px] text-center text-[#2A3342]`}>$</p>
                    <p className={`font-['Poppins'] font-[500] text-[48px] leading-[60px] text-center text-[#42422a]`}>10<span className={`${css.mnth}`}>/mth</span></p>
                </div>  
                <p className={`mb-[25px] ${css.billing}`}>Billed annually</p>

            </div>
          
            <div>
                <div className={`flex items-center mb-[15px] gap-2`}>
                    <img src={chkbox} alt="" />
                    <p className={`font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>Complete documentation</p>
                </div>
                <div  className={`flex items-center mb-[15px] gap-2`}>
                    <img src={chkbox} alt="" />
                    <p className={`font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>Working materials in Figma</p>
                </div>
                <div className={`flex items-center mb-[15px] gap-2`}> 
                    <img src={chkbox} alt="" />
                    <p className={`font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>100GB cloud storage</p>
                </div>
                <div className={`flex items-center mb-[30px] gap-2`}> 
                    <img src={chkbox} alt="" />
                    <p className={`font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>Complete documentation</p>
                </div>
            </div>
            <button className={`${css.billing_btn} mb-[25px]`}>Request a Demo</button>

            
           
        </div>
        <div className={`flex flex-col flex-1 px-[30px] w-[359px] ${css.bg_card}`}>
            <div className={` flex flex-col justify-center items-center pt-[30px]`}>
                <p className={`bg-[#DCFCE7] font-['Poppins'] font-[500] text-[12px] leading-[18px] text-[#22C55E] mb-[25px]`}>PRICING</p>
                <p className={`font-['Poppins'] font-[500] text-[20px] leading-[30px] text-center text-[#22C55E] mb-[25px]`}>Freelancer Plan</p>
                <div className={`flex mb-[25px]`}>
                    <p className={`font-['Poppins'] font-[500] text-[24px] leading-[32px] text-center text-[#2A3342]`}>$</p>
                    <p className={`font-['Poppins'] font-[500] text-[48px] leading-[60px] text-center text-[#42422a]`}>99<span className={`${css.mnth}`}>/mth</span></p>
                </div>  
                <p className={`mb-[25px] ${css.billing}`}>Billed annually</p>

            </div>
          
            <div>
                <div className={`flex items-center mb-[15px] gap-2`}>
                    <img src={chkbox} alt="" />
                    <p className={`font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>Complete documentation</p>
                </div>
                <div  className={`flex items-center mb-[15px] gap-2`}>
                    <img src={chkbox} alt="" />
                    <p className={`font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>Working materials in Figma</p>
                </div>
                <div className={`flex items-center mb-[15px] gap-2`}> 
                    <img src={chkbox} alt="" />
                    <p className={`font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>100GB cloud storage</p>
                </div>
                <div className={`flex items-center mb-[30px] gap-2`}> 
                    <img src={chkbox} alt="" />
                    <p className={`font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>Complete documentation</p>
                </div>
            </div>
            <button className={`${css.billing_btn} mb-[25px]`}>Request a Demo</button>

            
           
        </div>
        <div className={`flex flex-col flex-1 px-[30px] w-[359px] ${css.bg_card}`}>
            <div className={` flex flex-col justify-center items-center pt-[30px]`}>
                <p className={`bg-[#DCFCE7] font-['Poppins'] font-[500] text-[12px] leading-[18px] text-[#22C55E] mb-[25px]`}>PRICING</p>
                <p className={`font-['Poppins'] font-[500] text-[20px] leading-[30px] text-center text-[#22C55E] mb-[25px]`}>Enterprise Plan</p>
                <div className={`flex mb-[25px]`}>
                    <p className={`font-['Poppins'] font-[500] text-[24px] leading-[32px] text-center text-[#2A3342]`}>$</p>
                    <p className={`font-['Poppins'] font-[500] text-[48px] leading-[60px] text-center text-[#42422a]`}>799<span className={`${css.mnth}`}>/year</span></p>
                </div>  
                <p className={`mb-[25px] ${css.billing}`}>Billed annually</p>

            </div>
          
            <div>
                <div className={`flex items-center mb-[15px] gap-2`}>
                    <img src={chkbox} alt="" />
                    <p className={`font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>Complete documentation</p>
                </div>
                <div  className={`flex items-center mb-[15px] gap-2`}>
                    <img src={chkbox} alt="" />
                    <p className={`font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>Working materials in Figma</p>
                </div>
                <div className={`flex items-center mb-[15px] gap-2`}> 
                    <img src={chkbox} alt="" />
                    <p className={`font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>100GB cloud storage</p>
                </div>
                <div className={`flex items-center mb-[30px] gap-2`}> 
                    <img src={chkbox} alt="" />
                    <p className={`font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>Complete documentation</p>
                </div>
            </div>
            <button className={`${css.billing_btn} mb-[25px]`}>Request a Demo</button>

            
           
        </div>
      
       </div>
    </div>
  )
}