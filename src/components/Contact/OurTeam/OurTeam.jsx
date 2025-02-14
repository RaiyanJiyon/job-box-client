import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

const OurTeam = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const response = await fetch('/team.json');
                const data = await response.json();
                setTeams(data);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchTeams();
    }, []);

    return (
        <div>
            <div className='w-11/12 md:w-1/2 mx-auto text-center'>
                <h3 className='text-2xl text-gray-700 font-bold mb-2'>Our company</h3>
                <h2 className='text-4xl font-bold mb-4'>Meet Our Team</h2>
                <p className='text-gray-500 text-sm'>
                Our team is dedicated to delivering the best results with a combination of skill, creativity, and innovation. Each member brings a unique perspective and expertise, making us a formidable force in the industry.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-11/12 max-w-screen-2xl mx-auto my-16'>
                {
                    teams.map(team => (
                        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
                            <div className="flex flex-col items-center py-10">
                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={`${team.images}`} alt={`${team.name} image`} />
                                <h5 className="mb-1 text-xl font-medium text-gray-900">{team.name}</h5>
                                <span className="text-xs text-gray-500">{team.title}</span>
                                <div className='flex items-center mt-2 mb-1'>
                                    <p className="font-normal text-yellow-500">{'★'.repeat(5)}</p>
                                    <p className="text-xs font-normal text-gray-500 ml-1">({team.rating})</p>
                                </div>
                                <p className='flex items-center gap-1 text-xs text-gray-500'>
                                    <IoLocationOutline />
                                    {team.location}
                                </p>
                                <div className='grid grid-cols-4 gap-2 mt-6'>
                                    <div className='rounded-full p-2 border border-blue-300 hover:bg-gray-300  cursor-pointer'>
                                        <FaFacebookF className='text-xs' />
                                    </div>
                                    <div className='rounded-full p-2 border border-blue-300 hover:bg-gray-300  cursor-pointer'>
                                        <FaTwitter className='text-xs' />
                                    </div>
                                    <div className='rounded-full p-2 border border-blue-300 hover:bg-gray-300  cursor-pointer'>
                                        <FaInstagram className='text-xs' />
                                    </div>
                                    <div className='rounded-full p-2 border border-blue-300 hover:bg-gray-300  cursor-pointer'>
                                        <FaLinkedinIn className='text-xs' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OurTeam;