import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Select from "react-select";

const Currency = () => {
  const {dispatch} = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }

    const options = [
        { value: "£", label: "£ Pound" },
        { value: "$", label: "$ Dollar" },
        { value: "€", label: "€ Euro" },
        { value: "₹", label: "₹ Rupee" },
      ];
      const customStyles = {
        option: (defaultStyles, state) => ({
          ...defaultStyles,
          color: "#000000",
          backgroundColor: state.isFocused ? "#ffffff" : "#a5e1a0",
        }),
    
        control: (defaultStyles) => ({
          ...defaultStyles,
          backgroundColor: "#a5e1a0",
          color: "#ffffff",
          border: "none",
          boxShadow: "none",
        }),
        singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
      };
    

  return (
    <div class="alert" style={{backgroundColor: "#a5e1a0"}}>
        <Select defaultValue={{ label: "£ Pound", value: "£" }} 
        options={options} 
        name='Currency'id="currency" 
        onChange={(event)=>changeCurrency(event.value)} 
        styles={customStyles} autoFocus={true}/>  
    </div>

    );
};

export default Currency;