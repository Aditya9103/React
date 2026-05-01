
import Card from "./component/Card"


function App() {
  // let myObj = {
  //   username : "hitesh" ,
  //   age: 21
  // }
  // let newArr = [1,2,3]



  return (
    <>
      <h1 className="bg-green-400 text-blue-300 p-4 rounded-4xl  " > Tailwind test</h1>
    
    <Card  username= "code" btnText = "click me" />
    <Card username="hitesh"/>

    </>





  )
}

export default App
