import { useState } from "react"
import CardField from "./cardField."


const Card = ({ Id, Question, Answers, RightAnswers, onDeleteClick}) => {
    
    const [onEditMode, setOnEditMode] = useState(false)

    const onEditClick = (e, card_id) => {
        console.log("edit : ", card_id)
        // setOnEditMode(true)
    }

    return (
        <div className=' cursor-pointer flex flex-col justify-start items-between w-auto h-auto m-4 rounded-3xl border-2 border-gray-400 bg-gray-50/50 hover:shadow-xl shadow-2xl hover:shadow-yellow-600/10 shadow-yellow-600/5'>
            <CardField
                key_name="Question"
                values={[Question]}
                onEdit={onEditMode}
            />
            <CardField
                key_name="Answers"
                values={Answers}
                onEdit={onEditMode}
            />
            <CardField
                key_name="RightAnswer"
                values={RightAnswers}
                onEdit={onEditMode}
            />
            <div className="flex flex-row w-full bg-re-200 p-2">
                <div className="flex flex-1 justify-around items-center bg-re-400"></div>
                <div className="flex flex-1 justify-around items-center bg-yelow-400">
                    <button 
                        className=" h-8 w-1/4 hover:font-black font-semibold hover:text-gray-900 text-gray-800  rounded-3xl hover:shadow-md hover:shadow-green-200 hover:border-2 hover:border-green-500 border-2 border-green-200"
                        onMouseDown={e => onEditClick(e, Id)}
                    >Edit</button>
                    <button 
                        className=" h-8 w-1/4 hover:font-black font-semibold hover:text-gray-900 text-gray-800  rounded-3xl hover:shadow-md hover:shadow-red-200 hover:border-2 hover:border-red-500 border-2 border-red-200"
                        onMouseDown={e => onDeleteClick(e, Id)}
                    >Delete</button>

                </div>
            </div>
      </div>
    )
}

export default Card