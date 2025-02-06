import React from 'react';

const Location = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#f2f6fd] px-10 py-10 w-11/12 max-w-screen-2xl mx-auto my-16'>
            <div>
                <img src="https://jobbox-nextjs-v3.vercel.app/assets/imgs/page/contact/logo.svg" alt="" />
                <div className='space-y-1 mt-2'>
                    <p className='text-xs text-gray-500 font-medium'>205 North Michigan Avenue, Suite 810</p>
                    <p className='text-xs text-gray-500 font-medium'>Chicago, 60601, USA</p>
                    <p className='text-xs text-gray-500 font-medium'>Phone: (123) 456-7890</p>
                    <p className='text-xs text-gray-500 font-medium'>Email: contact@jobbox.com</p>
                </div>
            </div>
            <div className='space-y-4'>
                <div>
                    <h3 className='font-xs font-bold'>London</h3>
                    <p className='text-xs text-gray-500 font-medium'>2118 Thornridge Cir. Syracuse, <br /> Connecticut 35624</p>
                </div>
                <div>
                    <h3 className='font-xs font-bold'>New York</h3>
                    <p className='text-xs text-gray-500 font-medium'>4517 Washington Ave. <br />
                        Manchester, Kentucky 39495</p>
                </div>
            </div>
            <div className='space-y-4'>
                <div>
                    <h3 className='font-xs font-bold'>Chicago</h3>
                    <p className='text-xs text-gray-500 font-medium'>3891 Ranchview Dr. Richardson, <br />
                        California 62639</p>
                </div>
                <div>
                    <h3 className='font-xs font-bold'>San Francisco</h3>
                    <p className='text-xs text-gray-500 font-medium'>
                        4140 Parker Rd. Allentown, <br />
                        New Mexico 31134
                    </p>
                </div>
            </div>
            <div className='space-y-4'>
                <div>
                    <h3 className='font-xs font-bold'>Sysney</h3>
                    <p className='text-xs text-gray-500 font-medium'>
                        3891 Ranchview Dr. Richardson, <br />
                        California 62639
                    </p>
                </div>
                <div>
                    <h3 className='font-xs font-bold'>Singapore</h3>
                    <p className='text-xs text-gray-500 font-medium'>
                        4140 Parker Rd. Allentown, <br />
                        New Mexico 31134
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Location;