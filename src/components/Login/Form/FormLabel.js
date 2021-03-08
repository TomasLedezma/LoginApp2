function FormLabel({lblfor ,text}){
    return (
        <label for={lblfor} class="block mb-2 text-sm text-white">{text}</label>
    );
}
export default FormLabel;