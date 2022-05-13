import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/card';







function App() {

  const [fetchedData, setfetchedData] = React.useState([])
  const [ready, setReady] = React.useState(false)

  React.useEffect(() => {

    if (!ready)
    {
      setfetchedData()
      // axios({
      //   "method": "GET",
      //   "url": "localhost:",
      //   "headers": {
      //     "content-type": "application/json",
      //   }, "params": {
      //     "language_code": "en"
      //   }
      // })
      // .then((response) => {
      //   console.log()
      //   setfetchedData(response)
      //   setReady(true)
      // })
      // .catch((error) => {
      //   setReady(false)
      //   console.log(error)
      // })
    }
  },[ready])


  return (
    <div className="flex flex-col items-center justify-start w-full py-4 h-screen">
      <div className=' h-24'>
        <h1 className=' text-4xl text-gray-900 font-bold' >test</h1>
      </div>
      <div className='flex flex-row justify-around h-5/6 w-11/12'>
        <div className='w-7/12 h-full flex-col justify-start items-center p-2 overflow-y-scroll  bg-slate-50 border-2 border-slate-100 rounded-sm'>
          {/* <Card
            Question="who did this"
            Answers={["not me", "not me" , "me", "not me"]}
            RightAnswers={["me"]}
          /> */}

        </div>
        <div className='w-4/12 h-full flex flex-col justify-start items-center p-4 bg-slate-50 border-2 border-slate-100 rounded-sm'>
          <button className='bg-green-300 p-4 rounded-lg hover:bg-green-400'>new card</button>
        </div>

      </div>
    </div>
  );
}

export default App;
