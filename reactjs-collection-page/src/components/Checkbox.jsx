const Checkbox = ( {id , text , checked , ...props} ) => {

  return (
    <div className={`relative w-full flex items-center pb-2`}>

      <div className="flex items-center h-5">

        <input id={id} type="checkbox"
          className={`w-4 h-4 rounded cursor-pointer`}
          checked={checked} {...props} />

      </div>
      {text && (

        <label htmlFor={id} className={`ml-3 text-md cursor-pointer font-medium`}>
          {text}
        </label>

      )}

    </div>
  );

};
export default Checkbox;