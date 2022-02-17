import { useNavigate } from 'react-router-dom';

const TabStyleView = (props) => {
    const navigate = useNavigate();

    return (
        <div className={'flex items-center justify-center ' + props.className}>
            <div className='container w-full rounded-xl bg-gray-50 shadow-xl h-full' style={{ minHeight: '60vh' }}>
                <div className='bg-gray-200 flex px-5 h-10 rounded-t-xl'>
                    <div className='flex space-x-2 items-center'>
                        <div
                            className={
                                'bg-red-500 h-3 w-3 sm:h-4 sm:w-4 rounded-full flex justify-center items-center' + (props.redirect ? ' cursor-pointer' : '')
                            }
                            onClick={() => {
                                if (props.redirect) {
                                    navigate(-1);
                                }
                            }}>
                            {props.redirect && <span className='bg-red-900 h-1 w-1 sm:h-2 sm:w-2 rounded-full'></span>}
                        </div>
                        <div className='bg-orange-300 h-3 w-3 sm:h-4 sm:w-4 rounded-full'></div>
                        <div className='bg-green-500 h-3 w-3 sm:h-4 sm:w-4 rounded-full'></div>
                        <p className='pl-4 text-xs'>
                            {window.location.hostname + (props.location ? '/' + props.location : window.location.hash.replace('#', ''))}
                        </p>
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    );
};

export default TabStyleView;
