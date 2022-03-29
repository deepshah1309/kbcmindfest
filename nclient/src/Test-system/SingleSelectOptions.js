const SingleSelectOption = ({key,name,value,checked,onChange}) =>{


     return (

         
          <input
          key={key}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          />  

     )
 
}
export default SingleSelectOption;


//Prop Drilling
//UseContext