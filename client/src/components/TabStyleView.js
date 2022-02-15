const TabStyleView = (props) => {
    return (
        <div className={'flex items-center justify-center ' + props.className}>
            <div className='container w-full rounded-xl bg-gray-50 shadow-xl h-full' style={{ minHeight: '60vh' }}>
                <div className='bg-gray-200 flex px-5 h-10 rounded-t-xl'>
                    <div className='flex space-x-2 items-center'>
                        <div className='bg-red-500 h-4 w-4 rounded-full'></div>
                        <div className='bg-orange-300 h-4 w-4 rounded-full'></div>
                        <div className='bg-green-500 h-4 w-4 rounded-full'></div>
                        <p className='pl-4'>{window.location.hostname + (props.location ? '/' + props.location : window.location.pathname)}</p>
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default TabStyleView;
