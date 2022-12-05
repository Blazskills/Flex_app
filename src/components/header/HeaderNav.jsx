import React, {useState} from 'react'
import css from '../../components/header/HeaderNav.module.css'
import bgs from '../../assets/images/hero_bg.png'
import logo from '../../assets/images/flex_logo.png'
import menu from '../../assets/images/bugger_menu.svg'
import close from '../../assets/images/close.svg'
import chkbox from '../../assets/images/Checkbox.png'
import logo_img from '../../assets/images/half_logo.png'

import google_logo from '../../assets/images/google_logo.png'
import fb_logo from '../../assets/images/fb_logo.png'
import apple_logo from '../../assets/images/apple_logo.png'


export const HeaderNav = () => {

  const [isMobile, setIsmobile] =useState(false);

  const handleClick =() => setIsmobile(!isMobile)
  return (
    <header className={css.bgz}>

      <img className={css.header_bg} src={bgs} alt="" />
      {/* <nav className={`${css.nav_container}container mx-auto h-[80px] flex justify-between items-center`}> */}
      <nav className={`${css.nav_container} container`}>
                    <div className={`cursor-pointer m-4 ${css.logo_div}`}>
                      <img className='' src={logo} alt="" />
                    </div>
                    <ul className={isMobile ? `${css.main_nav} ${css.active}` : `${css.main_nav}`}>
                    {/* <ul className={!isMobile ? `${css.mobile_main_nav}` : `${css.main_nav}`}> */}

                        <li className={``} onClick={handleClick}>
                            Product
                        </li>
                        <li className={``} onClick={handleClick}>
                            Features
                        </li>
                        <li className={``} onClick={handleClick}>
                            Pricing
                        </li>
                        <li className={``} onClick={handleClick}>
                            Resources
                        </li>
                        <li className={`${css.main_login}`} onClick={handleClick}>
                        Log In
                        </li>
                        <li className={`${css.main_signup}`} onClick={handleClick}>
                        Sign Up
                        </li>
                    </ul>
               

                    <div className={`${css.pop}`}>
                        <p className={`font-['Poppins'] font-[500] text-[16px] text-[#556987] not-italic leading-[24px] nav_link`}>Log In</p>
                        <p className={`shadow-[0px_1px_2px_rgba(105,81,255,0.05)] font-['Poppins'] font-[500] text-[14px] text-[#F0FDF4] w-[86px] h-[36px] bg-[#22C55E] rounded-[6px] mr-[15px] ${css.signup}`}>Sign Up</p>
                    </div>

                    
                      <button onClick={handleClick} id={css['responsiveMenuToggleButton']} className={`w-[32px] ${css.mobile_menu_icon}`}>
                      {isMobile ?  <img className={css.closeIcon} src={close} alt="" />:
                     <img className={css.openIcon} src={menu} alt="" /> 
                    }
                      </button>
      </nav>
      
      <section className={`${css.hero}`}>
         <div className={css.header_hero_left}>
          <p className={`bg-[#22C55E] inline rounded-[36px] px-[10px] text-center font-['Poppins'] text-[#DCFCE7] text-[12px] leading-[18px] font-medium p-[3px] mb-[30px]`}>HEADER</p>
          <h2 className={css.hero_s1}>
          A small business is only as good as its tools. 
          </h2>

          <p className={css.hero_s1_text}>
          Lorem ipsum dolor sit amet, consectetur adipisng.
          </p>
          <div className={` ${css.hero_item_list}`}>
            <img src={chkbox} alt="checkbox" />
            <p>Mauris pellentesque congue libero nec</p>
          </div>
          <div className={` ${css.hero_item_list}`}>
            <img src={chkbox} alt="checkbox" />
            <p>Suspendisse mollis tincidunt</p>
          </div>
          <div className={` ${css.hero_item_list}`}>
            <img src={chkbox} alt="checkbox" />
            <p>Praesent varius justo vel justo pulvinar </p>
          </div>
         

         </div>

         <div className={`${css.header_hero_right}`}>
                <div className={css.community_container}>
                        <div className={css.join_community}>
                            <img src={logo_img} alt="" />
                            <p>
                            Join our community
                            </p>
                            <p>Start your free trial</p>
                        </div>
                            
                                          <label className={css.email_label}>Email</label>
                                          <input type="email" className={css.email_input} placeholder='Enter your email address'/> 
                              

                                          <button className={css.started_btn}>Get Started</button>
                                          <p className={`text-center font-['Poppins] font-[#8896AB] text-[12px]`}>OR</p>
                                          <div className={` ${css.social_signin}`}>
                                            <img src={google_logo} alt="" />
                                            <p>Sign in with Google</p>
                                          </div>
                                          <div className={` ${css.social_signin}`}>
                                            <img src={fb_logo} alt="" />
                                            <p>Sign in with Facebook</p>
                                          </div>
                                          <div className={` ${css.social_signin}`}>
                                            <img src={apple_logo} alt="" />
                                            <p>Sign in with Apple</p>
                                          </div>
                                          <p className={`text-center font-['Poppins'] text-[14px] font-[500] leading-5 text-[#8896AB]  `}>Already have an accoun? <span className={`text-[#22C55E] cursor-pointer`}>Sign in</span></p>
                </div>
         </div>
      </section>

    </header>

    
  )
}