import {useState} from "react";
export default function Todo({ item, onUpdate, onDelete }) {
    const [isEdit, setIsEdit] = useState(false);

    function FormEdit() {

        const [newValue, setNewValue] = useState(item.title);
        function handleSubmit(e){
            e.preventDefault();   //para anular el efecto por defecto para nuestro formulario
            }
            function handleChange(e){
                const value = e.target.value;
                setNewValue(value); 
            }   


            function handleCLickUpdateTodo(){
                onUpdate(item.id, newValue);
                setIsEdit(false);
 
            }


        return(  <form 
                    className="todoUpdateForm" 
                    onSubmit={handleSubmit}>
            <input 
            type="text" 
            className="todoInput" 
            onChange={handleChange}
            value={newValue} />

            <button 
            className="button"
            onClick={handleCLickUpdateTodo}>Update</button>
        </form>
        );
    }
//esta funcion le da vida al boton editar para que modifique los datos asginados
          
          function TodoElement(){
            return <div className="todoInfo">
            {item.title}  
            <button onClick={() => setIsEdit(true)}>Edit</button> 
            <button onClick={(e) => onDelete(item.id)}>Delete</button>
                 </div>
          }

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>   
   
}

 


    