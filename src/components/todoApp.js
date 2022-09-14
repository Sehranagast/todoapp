
import { useState } from "react";
import Todo from "./todo";
import "./todoApp.css";


export default function TodoApp(){                   //todas las funciones que esten aca pueden usar mis variables de estado
                                                    //para poder modificar un estado necesitamos el valor a traves del seTter o sea que lo pueda llamar, no sirve usar 'todos.push(newTodo):'como si fuera js
     const [title, setTitle] = useState("Hola!");        {/* tenemos un getter 'title' y un setter 'settitle'  el string este es un valor vacio*/}
     const [todos, setTodos] = useState([]);              {/*como es un arreglo de toDo lo inicializamos como vacio*/}
                                                                 /*   function handleClick(e){
                                                                 e.preventDefault();
                                                                  settitle('Naxo');  //esta era la funcion para cambiar el value de title por el de settitle
                                                                  }
                                                                  */
       function handleChange(event){                    {/* con esta funcion le damos vida al evento para que se actualize */}
        const value = event.target.value;

        setTitle(value);
        
    }

     function handleSubmit(e){
      e.preventDefault(); 
                                       //anulo que la info no se suba a un lugar especifico
         const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false,
         };

         //setTodos([...Todos, newTodo]);                       //se necesita un nuevo arreglo para poder insertarlo
         const temp = [...todos];
         temp.unshift(newTodo);
         setTodos(temp);
     }
         function handleUpdate(id, value){
           const temp = [...todos];
           const item = temp.find(item => item.id = id);
           item.title = value;
           setTodos(temp);
         }
         function handleDelete(id){
            const temp = todos.filter(item => item.id != id);   //si hacemos [...todos] nos va a tomar y guardar todo el arreglo, la idea es que borre solo la opcion que queremos y no todo
             setTodos(temp);  
                 
             setTitle("");
         }    

     return ( 
  <div className="todoContainer">
    <form className="todoCreateForm" onSubmit={handleSubmit}>
      <input onChange={handleChange} className="todoInput" value={title} />  {/* es el input que solo sirve para rellenar */}
      <input 
      onClick={handleSubmit}
      type="submit" 
      value="Create todo" 
      className="buttonCreate"  />
                                                     {/* {title {title} puesto aca lo ponemos para ver que se actualiza nuestro titulo con nuestros botones */}
    </form>

     <div className="todosContainer">    {/*para mostrar un arreglo de elementos en react se hace con el metodo 'map' que hace un recorrido de todos nuestros elementos y nos regresa una operacion, ahora nos devolveria una estructura html para que react peuda renderizar en la pantalla*/}
         {                                //el map va a recorrer 'todos' con el item que le asignemos, que en este caso es el titulo
         todos.map((item) => (          //el key lo tenemos que agregar para que react haga las modificaciones en todos, que sepa que esta leyendo jsx
            <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />   //las propiedades que cambiemos o agreguemos a nuestra app ahora van a vivir en 'todo'
            ))}
            </div>
            </div>
   );
}