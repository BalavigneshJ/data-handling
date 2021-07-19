function Encryption(props) {
    return (
      <div>
            <select required className="form-select">
                <Options isName = {props.isName}/>
            </select>
      </div>
    );
  }


  function Options(props){
      if(props.isName){
        return(
            <>
            <option disabled selected>Select your Encryption</option>
            <option >Triple DES</option>
            <option >RSA</option>
            <option >Twofish</option>
            <option >AES</option>
            <option >MD5</option>
            </>
        ) ;
      }  else {
        return(
            <>
            <option disabled selected>Select Complexity</option>
            <option >Low</option>
            <option >Medium</option>
            <option >High</option>
            </>
        );
      }
  }


  
  export default Encryption;