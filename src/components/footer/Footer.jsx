import React from 'react'
import css from '../../components/footer/Footer.module.css'
import bg from '../../assets/images/footer_bg (2).png' 
import logo from '../../assets/images/flex_logo.png' 

export const Footer
 = () => {
  return (
    <div className={`relative`}>
        <img className={`w-full`} src={bg} alt="" />
        <div className={`absolute top-0 left-0 right-0 mx-[13%] my-[250px]`}>
            <div className={`flex  justify-between mb-[70px]`}>
                       <div>
                <img  className={`mb-[25px]`} src={logo} alt="" />
                <p className={`font-['Poppins'] font-[500] text-[18px] leading-[28px] text-[#556987] w-[261px]`}>
                Launch your own Software As A 
                Service Application with Flex Solutions.
                </p>
           </div>
           <div>
            <p className={`mb-[25px] font-['Poppins'] font-[700] text-[18px] leading-[28px] text-[#2A3342]`}>Product</p>
            <p className={`mb-[25px] font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>Features</p>
            <p className={`mb-[25px] font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>Solutions</p>
            <p className={`mb-[25px] font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>Pricing</p>
            <p className={`mb-[25px] font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>Tutorials</p>
            <p className={`mb-[25px] font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>Updates</p>
       
           </div>
           <div >
           <p className={`mb-[25px] font-['Poppins'] font-[700] text-[18px] leading-[28px] text-[#2A3342]`}>Remaining</p>

           <p className={`mb-[25px] font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>Blog</p>
           <p className={`mb-[25px] font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>Newsletter</p>
           <p className={`mb-[25px] font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>Help Centre</p>
           <p className={`mb-[25px] font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>Careers</p>
           <p className={`mb-[25px] font-['Poppins'] font-[500] text-[16px] leading-[24px] text-[#556987]`}>Support</p>

           </div>
           <div>
           <p className={`mb-[25px] font-['Poppins'] font-[700] text-[18px] leading-[28px] text-[#2A3342]`}>Newsletter</p>

            <div>
                <input className={`${css.email_input_style}`} type="email" placeholder='pat@shuffle.dev'/>
                <button className={`${css.email_btn}`}>Subscribe</button>
            </div>
           </div>
  
            </div>
            <p className={`font-['Poppins'] font-[500] text-[14px] leading-5 text-[#8896AB] text-center`}>
            © 2021 Flex. All rights reserved.
            </p>

        </div>
        
    </div>
  )
}
