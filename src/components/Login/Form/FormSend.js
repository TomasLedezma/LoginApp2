function FormSend({text, onClick}){
    return (
        <button type="button" onClick={onClick}
        class="w-full p-3 mb-3 mb-4 text-white bg-red-700 rounded-md focus:bg-red-400 focus:outline-none">
        {text}</button>
    );
}
export default FormSend;