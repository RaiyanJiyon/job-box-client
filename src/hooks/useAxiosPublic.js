import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://job-portal-server-virid.vercel.app'
});

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;
