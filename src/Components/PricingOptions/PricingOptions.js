import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const PricingOptions = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'Free Feature', 'Multiple User Feature', 'Single User Feature', 'Bordcast User Feature', 'Nation User Feature',
                'Village User Feature'
            ]
        },
        {
            id: 2, name: 'Medium', price: 90.99, features: [
                'Medium Feature', 'Multiple User Feature', 'Single User Feature', 'Bordcast User Feature', 'Nation User Feature',
                'Village User Feature'
            ]
        },
        {
            id: 3, name: 'Premium', price: 190.99, features: [
                'Premiums Feature', 'Multiple User Feature', 'Single User Feature', 'Bordcast User Feature', 'Nation User Feature',
                'Village User Feature'
            ]
        }
    ]
    return (
        <div>
            <h1 className='bg-cyan-500 m-5 p-8 font-bold text-5xl text-center rounded-md'>WelCome To Our Shop</h1>
            <div className='md:grid grid-cols-3 m-10 gap-10 '>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id} option={option}
                    ></PricingOption>)
                }
            </div>

        </div>
    );
};

export default PricingOptions;