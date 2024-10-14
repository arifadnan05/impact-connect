
// eslint-disable-next-line react/prop-types
const Slide = ({img, header}) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[500px]'
            style={{
                backgroundImage: `url("${img}")`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                        {header}
                    </h1>
                    <br />
                    <button className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'>
                        Post Job & Hire Expert
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Slide
