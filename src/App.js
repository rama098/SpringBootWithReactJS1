import axios from "axios";
import {useState} from 'react'
function App() {
   const handleGetButtonClick= async ()=>
     {
      const resp=await axios.get("http://localhost:8080/testget")
      console.log(resp);
     
     }
     const data="React Data"
     const handlePostButtonClick= async ()=>
     {
      const resp1=await axios.post("http://localhost:8080/testpost",{data})
      console.log(resp1);
     
     }


     const [formData,setFormData]=useState('')
     const handleFormButtonClick= async ()=>
     {
      const resp1=await axios.post("http://localhost:8080/testForm",{formData})
      console.log(resp1);
     
     }
  return (
   <>
     <button onClick={handleGetButtonClick}>Test Get</button>
     <br/><br/>
     <button onClick={handlePostButtonClick}>Test Post</button>

     <br/><br/>

     <form onSubmit={handleFormButtonClick}>
       <input type="text" name='formData' value={formData} onChange={(e)=>setFormData(e.target.value)}/>
       
       <input type="submit" value="Test Form"/>
     </form>
     </>
  );
}

export default App;
