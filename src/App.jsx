import { useState } from "react"
function App() {
  const [Color, setColor] = useState("black")

  
  const bgblack = ()=>{
    setColor("black")
  }
  const bgpink = ()=>{
    setColor("pink")
  }
  const bgpurple = ()=>{
    setColor("purple")
  }
  const bgyellow = ()=>{
    setColor("yellow")
  }


  return (
    
    <div className="w-full h-screen  s"  style={{backgroundColor:Color}}>
      <div className="w-240 ml-40 h-20 rounded-3xl bg-amber-50">
        <button onClick={()=>{setColor("white")}}  className="p-1 m-5 w-20  rounded-xl bg-white shadow-lg" >white</button>
        <button onClick={()=>{setColor("red")}}  className="p-1 m-5 w-20  rounded-xl bg-red-500 shadow-lg">red</button>
        <button onClick={()=>{setColor("blue")}}  className="p-1 m-5 w-20  rounded-xl bg-blue-500 shadow-lg">blue</button>
        <button onClick={()=>{setColor("green")}}  className="p-1 m-5 w-20  rounded-xl bg-green-500 shadow-lg">green</button>
        <button onClick={bgyellow}  className="p-1 m-5 w-20  rounded-xl bg-yellow-500 shadow-lg">yellow</button>
        <button onClick={bgblack}  className="p-1 m-5 w-20  rounded-xl bg-black text-white shadow-lg">black</button>
        <button onClick={bgpink}  className="p-1 m-5 w-20  rounded-xl bg-pink-500 shadow-lg">pink</button>
        <button onClick={bgpurple}  className="p-1 m-5 w-20  rounded-xl bg-purple-500 shadow-lg">purple</button>
      </div>
    </div>
    
  )
}

export default App
