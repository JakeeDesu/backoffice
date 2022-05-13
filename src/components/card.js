import CardField from "./cardField."


const Card = ({ Question, Answers, RightAnswers }) => {


    return (
        <div className='flex flex-col justify-start items-center w-auto h-auto rounded-md border-2 border-gray-100 bg-gray-50'>
            <CardField
                key_name="Question"
                value={[Question]}
            />
            <CardField
                key_name="Answers"
                value={Answers}
            />
            <CardField
                key_name="RightAnswer"
                value={RightAnswers}
            />
      </div>
    )
}

export default Card