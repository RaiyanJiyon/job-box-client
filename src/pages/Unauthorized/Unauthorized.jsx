const Unauthorized = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <img
                src="https://img.freepik.com/free-vector/401-error-unauthorized-concept-illustration_114360-1934.jpg"
                alt="403 Forbidden"
                className="w-64 h-auto mb-8"
            />
            <h1 className="text-2xl font-bold text-gray-800 mb-4">You are not authorized</h1>
            <p className="text-gray-600 text-center">
                You tried to access a page you did not have prior authorization for.
            </p>
        </div>
    );
};

export default Unauthorized;