import React, { useState } from 'react'
import '../newStyles.css'

function  FeedbackForm ()  {


  const [user, setUser] = useState({ Username: "", Department: "", Rating: "" })
  const onChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const [arr1, setArr1] = useState([])// 
  const [change,setSwitch]=useState(true)




  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if(change){
      setArr1([...arr1, user])
    console.log(arr1);
    }
    // setArr1([...arr1, user])
    // console.log(arr1);
    setSwitch(!change)

  }
  return (
  <>

    <div>

      <form onSubmit={onSubmit}>
        
        { change ? 
        <div id='formdiv'>
          
        <h1>Employee Feedback Form </h1>
        
      
        <label htmlFor="Username" className='labelForInput'>Name:</label>
        <input type="text" name="Username" value={user.Username} onChange={onChangeUser} className='imputTagStyles' /> <br /><br>
        </br>
        <label htmlFor="Department" className='labelForInput'>Department:</label>
        <input type="text" name="Department" value={user.Department} onChange={onChangeUser} className='imputTagStyles' /> <br /><br>
        </br>
        <label htmlFor="Rating" className='labelForInput'>Rating:</label>
        <input type="number" name="Rating" value={user.Rating} onChange={onChangeUser} className='imputTagStyles' /> <br /><br>
        </br>
        </div>

        
      
      
      :
      <div>
        {/* <h1 id='heading2'>EMPOLOYEE FEEDBACK DATA </h1> */}
       
        
      
      <div id='flex' className='OuterDiv'>
        

        {
          arr1.map((value, index) => {
            return (
            <>
          	  
              
                <div className='innerElements' key={index} >
                  <span>Name: {value.Username} | </span>
                  <span> Department: {value.Department} | </span>
                  <span> Rating: {value.Rating} </span>
                </div>
              
            </>
            )
          })
        }
      </div>
      </div>}
      <br />
      <button id='btn' type="submit"  className='submitagStyles'>{ change ? <span>Submit</span> : <span >Go Back</span> }</button>
      </form>
    </div>
</>
  )



    
  //  formValue = true;
  //  outerDiv = true;
  //  goBack = false;




  // state = {
  //   NameOfEmployee: "",
  //   Designation: "",
  //   Rating: "",
  //   arrayOfEmployess: []
  // }

  // Inputhandler = (e) => {
  //   // alert("Input changes")
  //   this.setState({ [e.target.name]: e.target.value })


  // }



  // SubmitHandler = (e) => {
  //   e.preventDefault();
  //   const MyEmployeeObject = {
  //     NameOfEmployee: this.state.NameOfEmployee,
  //     Designation: this.state.Designation,
  //     Rating: this.state.Rating
  //   }
  //   const newArray = this.state.arrayOfEmployess
  //   newArray.push(MyEmployeeObject)
  //   this.setState({ arrayOfEmployess: newArray })
  //   this.formValue = false;
  //   this.outerDiv = true
  //   this.goBack = true;


  // }

  // goBackHandler= ()=>{
  //   this.formValue=true;
  //   this.outerDiv=false;

    
    
    
    
  // }

 
  // // goBackHandler = () =>{
  // //   alert(190)
  // //   this.outerDiv = false;
  // //   this.formValue = true;
  // // }
 


  // render() {

  
    
  //   if (this.formValue) {
  //     return (
  //       <div>
  //         <h1>Employee Feedback Form </h1>
  //         <form >
  //           <label htmlFor="NameOfEmployee" className='labelForInput'>Name : </label>
  //           <input type="text" name="NameOfEmployee" id="" value={this.state.NameOfEmployee} className='imputTagStyles' onChange={this.Inputhandler} />
  //           <br />
  //           <br />
  //           <label htmlFor="Designation" className='labelForInput'>Department  : </label>
  //           <input type="text" name="Designation" id="" value={this.state.Designation} className='imputTagStyles' onChange={this.Inputhandler} />
  //           <br />
  //           <br />
  //           <label htmlFor="Rating" className='labelForInput'> Rating : </label>
  //           <input type="number" name="Rating" id="" value={this.state.Rating} className='imputTagStyles' onChange={this.Inputhandler} />
  //           <br />
  //           <br />
  //           <input type="submit" value="Submit" className='submitagStyles' onClick={this.SubmitHandler} />


  //         </form>

  //       </div>


  //     )
  //   }
  //   // return this.form2

  //  else if (this.outerDiv){
  //   return (
  //     <div>


  //       <div className='OuterDiv'>
  //         {
  //           this.state.arrayOfEmployess.map((element, index) => {
  //             return (<div className='innerElements' key={index}><h3> <span >Name : {element.NameOfEmployee} | Department :  {element.Designation} | Rating :  {element.Rating}</span></h3>
  //              <br>
  //              </br>

             
  //             </div>)
  //           })
  //         }
  //       </div>

  //       <button onClick={this.goBackHandler}>Go Back </button>

        
  //     </div>
      
  //   )
    
    
  //  }
  // //  else {
  // //   if ( this.goBack){
  // //     return (
  // //       <button> Go Back </button> 
  // //     )
  // //    }
  // // }

   

  // }


}

export default FeedbackForm