const PricingCover = () => {
    return (
        <div className="relative h-36 bg-cover bg-center mt-2" style={{ backgroundImage: 'url(https://i.ibb.co.com/Mxf5fR2K/2148793808.jpg)' }}>
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>

            {/* Content */}
            <div className="relative flex flex-col justify-center h-full w-11/12 max-w-screen-2xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-2">Pricing</h2>
                <p className="text-gray-200">Pricing built to suits teams of all sizes.</p>

                {/* Breadcrumb navigation */}
                <div className="absolute bottom-6 right-6 bg-white/90 px-4 py-2 rounded-lg text-sm">
                    <span className="text-gray-600">Home</span>
                    <span className="mx-2 text-gray-400">›</span>
                    <span className="text-gray-800">Pricing</span>
                </div>
            </div>
        </div>
    );
};

export default PricingCover;