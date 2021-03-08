import {  RiCloseCircleLine} from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

// ()=>     fat arrow functions  funciones de flecha gorda ;

function TodoListItem({descripcion, id, completed, doneHandler, deleteHandler}){
  const onClick = (e)=>{
    doneHandler(id);
  }
  const onDeleteClick = (e)=>{
    deleteHandler(id);
  }

  const myClass = (completed)?"striked": "";
  return (
    <li className="textotodo">
      <div className="texto">
        <span className={myClass}>{descripcion}</span>
    </div>
    <div className="texto2">
      <TiEdit onClick={onClick}></TiEdit>
      <RiCloseCircleLine onClick={onDeleteClick}></RiCloseCircleLine>
    </div>
  </li>);
}
function TodoList({todos, doneHandler, deleteHandler}){
  const todoItems = todos.map((o)=>{
    return (
      <TodoListItem 
        key={o.doneHandlerid}
        descripcion={o.description}
        id={o.id}
        completed={o.completed}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      />
    )
  });
  return (
    <section className="TodoList">
      <ul>
         {todoItems}
      </ul>
    </section>
  );
}

export default TodoList;

