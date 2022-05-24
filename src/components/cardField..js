
const CardField = ({ key_name, values, onEdit, onSubmit}) => {

    const ValItems = ({value, onEdit}) => {
        if (!onEdit)
            return (
                <div  className='px-1 mx-2 hover:rounded-md hover:bg-blue-200 runded-lg bg-bue-200 flex items-center whitespace-nowrap'>{value}</div>
            )
        else
            return (
                <input className='px-1 mx-2 hover:rounded-md hover:bg-blue-200 runded-lg bg-bue-200 flex items-center '></input>
            )
    }

    return (
        <div className='flex  w-11/12 justify-start px-2  items-center bg-whit'>
            <div className='h-10 px-1 bg-blu-200 flex items-center text-xl font-bold whitespace-nowrap'>{key_name}  :</div>
            {values.map((value, index) => (
                <ValItems
                    key={index}
                    value={value}
                    onEdit={onEdit}
                />
            ))}
        </div>
    )
}

export default CardField