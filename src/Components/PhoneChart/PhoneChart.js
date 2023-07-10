import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const PhoneChart = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedPhone = data.data.data;
                const phoneChat = loadedPhone.map(phone => {
                    const parts = phone.slug.split('-');

                    const price = parseInt(parts[1]);
                    const phoneDetails = {
                        name: phone.phone_name,
                        price: price
                    }
                    return phoneDetails;
                }

                )
                // console.log(phoneChat);
                setPhones(phoneChat);
            })
    }, [])
    return (
        <div>
            <h4 className='text-center font-bold'>Phone Price BarChart</h4>
            <BarChart
                width={500}
                height={300}
                data={phones}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price" stackId="a" fill="#8884d8" />


            </BarChart>
        </div>
    );
};

export default PhoneChart;