import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {

  const[count, setCount] = useState(0); // useState initializes a variable 'count' with value 0
  // setCount is a function which increases or decreases the count by 1

  useEffect(() => {
    if (count > 10) {
      toast('Count is over 10', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  }, [count]);

  useEffect(() => {
    if (count < -10) {
      toast('Count is below -10', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  }, [count]);

  function decreaseHandler() {
    setCount(count-1);
  }
  function increaseHandler() {
    setCount(count+1);
  }

  function resetHandler() {
    setCount(0);
    if(count!=0){
      toast.info("Counter has been reset to zero", {
        position: 'top-right',
        autoClose: 3000,
      })
    }
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
 
     
     <div className="text-[#0398d4] font-medium text-2xl">COUNTER AT YOUR CLICK</div>
 
     <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
 
       <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
         -
       </button>
       
       <div className="font-bold gap-12 text-5xl">
         {count}
       </div>
 
       <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
         +
       </button>
 
     </div>
 
     <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">
       Reset
     </button>
     <ToastContainer />
    </div>
   );
}

export default App;
