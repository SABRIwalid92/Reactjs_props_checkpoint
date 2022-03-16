import React from "react";
import PropTypes from "prop-types";
function Profile(props) {
  const data = props.data;
  return (
    <div>
      <h1 style={{color:"gold", textShadow:'2px 2px grey'}}>
        <i>i,</i>
        {data.fullName}
      </h1>
      <h2 style={{color:"cadetblue"}}>{data.bio}</h2>
      <h3 style={{}}>though, {data.profession}</h3>
      <img src={props.children} />
      <br />
      <button onClick={()=>data.handleName(data.fullName)}>Who is this</button>
    </div>
  );
  

     Profile.defaultProps={fullName : "Foulen ben Foulen",
    bio : "(if only he existed)",
    profession : "what Foulen does.",handleName:()=>alert('nothing to say')};
    Profile.propTypes ={
       fullName:PropTypes.string, 
       bio:PropTypes.string, 
       profession:PropTypes.string, 
       handleName:PropTypes.func
    }


  //
}

export default Profile;
