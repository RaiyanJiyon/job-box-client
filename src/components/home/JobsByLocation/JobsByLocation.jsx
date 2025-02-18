import React, { useEffect, useState } from 'react';
import SectionTitle from '../../common/SectionTitle';
import { Link } from 'react-router-dom';

const JobsByLocation = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await fetch('/location.json');
                const data = await response.json();
                setLocations(data);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchLocations();
    }, []);

    return (
        <section className='w-11/12 max-w-screen-2xl mx-auto'>
            <SectionTitle title="Jobs by Location" description="Find your favorite jobs and get the benefits of yourself" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-14">
                {
                    locations.map((location, idx) => (
                        <div key={idx} className="bg-white border border-gray-200 rounded-lg shadow-sm px-3 pt-3">
                            <div className='relative transition-transform duration-500 ease-in-out transform hover:scale-110
                            '>
                                <img className="rounded-lg w-full h-64" src={location.locationImage} alt={`${location.locationName} image`} />
                                <button type="button" className="absolute top-0 left-4 my-5 px-3 py-1 text-xs font-medium text-blue-400 hover:text-black bg-blue-100 rounded-md hover:bg-blue-200">{location.category}</button>
                            </div>
                            <div>
                                <h5 className="mt-4 mb-2 text-2xl font-bold text-gray-900">{location.locationName}</h5>
                                <div className="pb-8">
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm font-medium text-gray-500 truncate">{location.totalVacancy} Vacancy</p>
                                        <p className="text-sm font-medium text-gray-500 truncate">{location.totalCompanies} Companies</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default JobsByLocation;
