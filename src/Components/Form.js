
import React from "react";

const Form = (props) => {
    // State to hold the data from our form.
    const [formData, setFormData] = React.useState({searchTerm: ""})
    const handleChange = (event) =>{
        // you wrote this ahead, but right now it's going to be explained later.
        setFormData({...formData, [event.target.name]: event.target.value})
    }
        // you wrote this ahead, but right now it's going to be explained later.
    const handleSubmit = (event) =>{
        event.preventDefault();
        props.movieSearch(formData.searchTerm)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        {/* you wrote this ahead, but right now it's going to be explained later. */}
            <input type="text" name="searchTerm" onChange={handleChange} value={formData.searchTerm} />
            <input type="submit" value="submit" />
        </form>
    </div>
  );
};

export default Form;