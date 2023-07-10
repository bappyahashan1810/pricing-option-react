import React from 'react';
import Feature from '../Feature/Feature';
import './PriceOption.css'


const PricingOption = ({ option }) => {
    const { features } = option;

    return (
        <div className='bg-cyan-600	 text-center p-10 rounded-md m-5'>
            <div>
                <h3><span className='font-bold text-5xl text-white'>{option.price}</span>
                    <span className='text-2xl text-white'>/Month</span></h3>
                <p className='text-2xl'>{option.name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            <button className='bg-green-600 w-full rounded-md p-4 mt-5 btn-buy'>Buy Now</button>


        </div>
    );
};

export default PricingOption;