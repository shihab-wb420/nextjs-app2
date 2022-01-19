import { useState, useEffect } from 'react';
import {collection, query, onSnapshot, orderBy, addDoc, serverTimestamp} from "@firebase/firestore"
import Nav from '../../components/Nav'
import {db} from "../../firebase"
import Loader from "../../components/Loader"

const Todos = () =>{
  const initialState =[];
  const [todos,setTodos]= useState(initialState)
  const [loading, setLoading] = useState(true)

 const GetData = async ()=>{
const collectionRef = await collection(db,"todos");
   
 const q = query(collectionRef,orderBy("timestamp","desc"));
    const unsubscribe = onSnapshot(q,(querySnapshot)=>{
      setTodos(querySnapshot.docs.map(doc=>({...doc.data(), id:doc.id, timestamp: doc.data().timestamp?.toDate() })))
    });
    setLoading(false)
    return unsubscribe;
    console.log(unsubscribe);

}
  
  useEffect( ()=>{
    
    GetData();
  },[])

  
  
  //-----Adding new todo into firebase------
  const [newTodo,setNewTodo] = useState({
    title:""
  })
  
  //-----Submit todo------
  const AddTodo = async (e)=>{
    e.preventDefault();
    const collectionData = collection(db,"todos");
    const docRef = await addDoc(collectionData,{...newTodo, timestamp:serverTimestamp() })
    setNewTodo({title:""})
    alert("Todo Added", )
  }
  //-----Handle onchange tidos input filed -----
  const handleChange=(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setNewTodo({...newTodo,[name]:value})
  }
  
  return (
    <> 
      <Nav />
      <main className="todosContainer" >
          <h2> Add Your Task</h2>
          <input value={newTodo.title} name="title" onChange={handleChange} type="text"/>
          <button onClick={AddTodo} type="submit"> Add todo </button><br/><br/>
          
          <div className="showTodos">
                <h3> Show todos</h3>
                { loading ?  <Loader /> 
                  : todos.map((todo)=>{
                   return(
                        <div className="todoBox" key={todo.id}>
                            <h1> {todo.title}</h1>
                            <p> id:{todo.id}</p>
                             
                            <p> { todo.timestamp && `
                            Created On: ${todo.timestamp.getDate()}-${todo.timestamp.getMonth()+1}-${ todo.timestamp.getFullYear()}
                             `}</p>
                        </div>
                   
                    )
                  })
                    
                  
                }
          
          </div>
          
      </main>
    </>
  )
}

export default Todos
