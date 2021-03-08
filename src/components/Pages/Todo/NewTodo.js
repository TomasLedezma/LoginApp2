import { MdAdd } from 'react-icons/md';
import FormInput from '../../Login/Form/FormInput';

function NewTodo({onChange, value, onAddNew}){
  return (
    <div className="TodoAddNew">
      <div className="flex justify-between w-screem mx-3 px-4">
          <FormInput
            type="text"
            id="txtNTodo"
            name="txtNTodo"
            onChange={onChange}
            value={value}
            className="Todo-Input"
            onKeyUp={(e) => { if (e.keyCode == 13) { onAddNew(e);} }}
          />
          <MdAdd class="text-white bg-green-800 rounded-md ml-2" size={"3rem"} onClick={onAddNew}></MdAdd>
      </div>
    </div>
  );
}

export default NewTodo;
