import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://job-portal-server-virid.vercel.app',
});

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;