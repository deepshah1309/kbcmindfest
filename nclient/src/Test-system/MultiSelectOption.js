const MultiSelectOption = ({key,name,value,checked,onChange,optionIndex}) =>{

     return (

      <input
      key={key}
      type="checkbox"
      name={name}
      value={value}
      checked={checked}
      onChange={()=>onChange(optionIndex)}
      />  
     )

}
export default MultiSelectOption;