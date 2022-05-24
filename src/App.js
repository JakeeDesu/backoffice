import axios from "axios";
import React, { useState, useEffect } from "react"
import './App.css';
import Card from './components/card';


const CARD_EX = {
  question : "qq",
  answers : ["qq i dnt knoew", "qq i know" , "qq i kinda know", "qq mmmm .."],
  right_answ : "qqz"

}


const CARD_LIST = [
  {
    id : 0,
    Question : "what is this",
    Answers : ["i dnt knoew", "i know" , "i kinda know", "mmmm .."],
    RightAnswers : ["i kinda know"]
  },
  {
    id : 1,
    Question : "who did this",
    Answers : ["not me", "not me" , "me", "not me"],
    RightAnswers : ["me"]
  },
  {
    id : 2,
    Question : "what  01",
    Answers : ["i dnt knoew", "i know" , "i kinda know", "mmmm .."],
    RightAnswers : ["i kinda know"]
  },
  {
    id : 3,
    Question : "who  01",
    Answers : ["not me", "not me" , "me", "not me"],
    RightAnswers : ["me"]
  }
]


function App() {

  const [fetchedData, setfetchedData] = useState({cardList : []});
  const [ready, setReady] = useState(false);
  const [itemsToBeAdded, setItemsToBeAdded] = useState([])
  const [itemsToBeDeleted, setItemsToBeDeleted] = useState([])


  const [onEditMode, setOnEditMode] = useState(false)
  const editModeOnEvent = (e, card_id) => {
    console.log("edit : ", card_id)
    // setOnEditMode(true)
}



  const onDeleteClick = (e, card_id) => {
    setItemsToBeDeleted(fetchedData["cardList"].filter(card => card.id == card_id))
    console.log("delete : ")
    // let new_list = []
    // new_list = fetchedData["cardList"].filter(card => card.id != card_id)
    // setfetchedData({cardList : new_list})
  }
  const onAddClick = (e) => {
    setItemsToBeAdded([CARD_EX])
    // var new_list = []
    // new_list = fetchedData["cardList"]
    // var card = CARD_EX
    // var lastCard_id = new_list.length > 0 ? new_list[new_list.length - 1] : CARD_LIST[0];
    // card["id"] = lastCard_id['id'] + 1 
    // console.log("card : ", card)
    // console.log("old ", new_list)
    // new_list.push(card)
    console.log("add new ")
    // setfetchedData({cardList : new_list})
  }
  useEffect(() => {
    if (itemsToBeDeleted.length > 0)
    {
      axios.delete(`http://127.0.0.1:8000/questions/delete/${itemsToBeDeleted[0].id}`).then(respose => setReady(false)).then(dd => setItemsToBeDeleted([]))
    }
    if (itemsToBeAdded.length > 0)
    {
      axios.post("http://127.0.0.1:8000/questions/add", itemsToBeAdded[0]).then(respose => setReady(false)).then(dd => setItemsToBeAdded([]))
    }
    // update list of existing cards
    if (!ready)
    {
      // setfetchedData({cardList : CARD_LIST})
      // setReady(true)
      axios({
        "method": "GET",
        "url": "http://127.0.0.1:8000/questions",
        "headers": {
          "content-type": "application/json",
        }, "params": {
          "language_code": "en"
        }
      })
      .then((response) => {
        console.log("----------->")
        setfetchedData({cardList : response["data"]})
        console.log(response)
        // setfetchedData(response)
        setReady(true)
      })
      .catch((error) => {
        setReady(false)
        console.log(error)
      })
    }
  }, [itemsToBeAdded, itemsToBeDeleted, ready])


  return (
    <div className="relative flex flex-col items-center justify-start w-full py-4 h-screen overflow-hidden">
      {!ready && <div className="absolute w-full h-full bg-slate-800/75"></div>}
      <img
        className="absolute top-0 left-0 object-contain opacity-100"
        src="/flowers.webp"
        />
      <div className='relative  h-24'>
        <h1 className=' text-4xl text-gray-900 font-bold' >test</h1>
      </div>
      <div className='relative flex flex-row justify-around h-5/6 w-11/12'>
        <div className='w-7/12 max-w-3xl h-full flex-col justify-start items-center p-4 overflow-y-scroll bg-slat-50 border-l-2 border-slate-100 rounded-3xl '>
          {fetchedData["cardList"].map((card, index) => (
            <Card
            key={index}
            Id={card.id}
            Question={[card.question]}
            Answers={card.answers}
            RightAnswers={[card.right_answ]}
            onDeleteClick={onDeleteClick}
            />
            ))}

        </div>
        <div className='relative w-4/12 h-full flex flex-col justify-start items-center bg-slate-50/50 rounded-3xl border-2 border-gray-900'>
          <div className="relative w-full h-1/6 flex justify-center items-center ">
            <div className="absolute -top-1/2 left-0 flex justify-center items-center  w-full h-5/6 bg-rd-600">
              <button
                className=" w-14 h-14 rounded-full bg-green-100 hover:bg-green-500 border-2 border-gray-900 text-gray-500 text-2xl font-black"
                onMouseDown={e => onAddClick(e)}  
              >+</button>

            </div>
          </div>
          <div className="w-full h-5/6 flex bg-gren-600">

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
