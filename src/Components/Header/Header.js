import React, { useEffect, useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='mt-6 bg-purple-200'>
            <div >
                {
                    open ? <XMarkIcon onClick={() => setOpen(!open)} className="h-8 w-6 text-blue-500 md:hidden" />
                        : <Bars3Icon onClick={() => setOpen(!open)} className="h-8 w-6 text-blue-500 md:hidden" />
                }

            </div>
            <nav className={`md:flex justify-center bg-purple-200 w-full absolute md:static duration-500 ${open ? 'top-8' : 'top-[-120px]'} `}>
                <ul>
                    <li> <a className='font-bold  p-2 my-6s m-4' href="/home">Home</a></li>
                    <li><a className='font-bold p-2 my-6s m-4' href="/order">Order</a></li>
                    <li><a className='font-bold p-2 my-6s m-4' href="/about">About</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;