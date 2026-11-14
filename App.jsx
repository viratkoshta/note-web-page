import React from 'react'

const App = () => {

  const [title, setTitle] = React.useState('')
  const [details, setDetails] = React.useState('')

  const [task, setTask] = React.useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    let copytask = [...task];
    copytask.push({title, details})
    setTask(copytask)
    console.log("Titile Of Your Note  : ", title);
    console.log("Details Of Your Note : " ,details);
    setTitle('')
    setDetails('')
  }

 const deleteNote = (idx)=>{
  const copytask = [...task];
  copytask.splice(idx,1)
  setTask(copytask)
 }

  return (
    <div className='h-screen lg:flex bg-black text-white  '>

      <form onSubmit={(e)=>{
        handleSubmit(e)
      }} 
      className='flex gap-4 lg:w-1/2 items-start flex-col p-10'><h1 className='text-4xl font-bold'>ADD YOUR NOTES !!</h1>
         <input type="text" placeholder="Enter Note Heading Here" className='px-5 py-2 outline-none w-full font-medium border-2 rounded' value={title} onChange={(e)=>{setTitle(e.target.value)}} />

         

        <textarea type="text" placeholder="Enter Details Of Your Note Here" className=' px-5 w-full py-13 outline-none font-medium border-2 rounded' value={details} onChange={(e)=>{setDetails(e.target.value)}} />

        <button className='bg-white active:bg-gray-300  text-black px-5 py-2 w-full outline-none font-medium rounded'>Add Note</button>
      </form>

      <div className='p-5 lg:w-1/2 lg:border-l-2'>
      <h1 className='text-4xl font-bold'>RECENT NOTES !!</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-[90%]'>
          {task.map(function(elem,idx){

            return<div key={idx} className=" justify-between flex flex-col items-start relative h-65 w-50 bg-right bg-no-repeat rounded-2xl pt-9 pb-5 px-4 bg-cover bg-[url('https://th.bing.com/th/id/OIP.aTad2xS49kR0h7J_y-F01wHaIR?w=174&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3%22%3E%3C/img%3E')] py-6 px-4 text-black" >
              <div>
                  <h3 className='leading-tight'text-lg font-bold >{elem.title}</h3>
              <p className= 'mt-4 leading-tight text-sm font-medium text-grey-500 '> {elem.details}</p>
              </div>
            <button onClick={()=>{
              deleteNote(idx)
            }
            } className=' cursor-pointer active:scale-95 w-full bg-red-500 text-gray-100 py-1 text-xs rounded font-bold'>delete</button>
            </div>
          })}
      

        </div>
   
      </div>
    </div>
  )
}

export default App

