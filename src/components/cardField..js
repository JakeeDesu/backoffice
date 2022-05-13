
const CardField = ({ key_name, value }) => {

    return (
        <div className='flex flex-row w-11/12 justify-start px-2  items-center bg-white'>
            <div className='h-10 px-1 bg-blu-200 flex items-center text-xl font-bold'>{key_name}  :</div>
            <div className='h-10 px-1 bg-blu-200 flex items-center '>{value.join(' , ')}</div>
        </div>
    )
}

export default CardField