import React from 'react'
import css from '../../components/number/Numbers.module.css'
import bgs from '../../assets/images/main_section2_bg.png'


export const Numbers = () => {
  return (
  <section className={` ${css.numbers}`}>
    <img className={css.section_bg} src={bgs} alt="" />
    <div className={`${css.number_sub_container}`}>
        <p >
            NUMBERS
        </p>
        <p>
        We believe in the power of data
        </p>
        <p>
        Flex is the only business platform that 
        lets you run your business on one platform, 
        seamlessly across all digital channels.
        </p>
        <div className={`${css.number_count}`}>
            <div className={`${css.item_count}`}>
                <p>
                    234.000
                </p>
                <p>
            Projects completed
                </p>
            </div>
            <div className={`${css.item_count}`}>
                <p>
                $10m
                </p>
                <p>
                APR
                </p>
            </div>
            <div className={`${css.item_count}`}>
                <p>
                +50.000
                </p>
                <p>
                Hours Saved Annually
                </p>
            </div>
            <div className={`${css.item_count}`}>
                <p>
                3.500
                </p>
                <p>
                Unique Users
                </p>
            </div>
        </div>

    </div>
   
  </section>
  )
}