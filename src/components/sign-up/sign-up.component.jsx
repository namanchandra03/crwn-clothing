import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth,createUserProfileDocument } from "../../firebase/firebase.utils";
import './sign-up.styles.scss';

class  SignUp extends React.Component{

        constructor(){

            super();

            this.state={
               
                 displayName:'',
                 email:'',
                 password:'',
                 confirmedPassword:''
            };
        };

        handleSubmit = async(e)=>{

               e.preventDefault();

               const {displayName,email,password,confirmedPassword}=this.state;

               if(password!==confirmedPassword){

                alert('oops,password did not match');
                return;
               }

               try{

                   const{user} = await auth.createUserWithEmailAndPassword(email,password);

                   console.log(user);

                   await createUserProfileDocument(user,{displayName});

                   this.setState({

                            
                        displayName:'',
                        email:'',
                        password:'',
                        confirmedPassword:''                    
                   
                    });
               }
               catch(error){

                     console.log('error happen during sign-up',error.message);
               }
        };

        handleChange=(e)=>{

               const {name,value} = e.target;

               this.setState({[name]:value});
        }

        render(){
               
               const {displayName,email,password,confirmedPassword}=this.state;

            return(

                <div className="sign-up">

                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>

                 <FormInput
                    
                    type="text"
                    name="displayName"
                    value={displayName}
                    handleChange={this.handleChange}
                    label="Display Name"
                    required
                 />

                <FormInput
                    
                    type="email"
                    name="email"
                    value={email}
                    handleChange={this.handleChange}
                    label="Email"
                    required
                 />
                 
                 <FormInput
                    type="password"
                    name="password"
                    value={password}
                    handleChange={this.handleChange}
                    label="Password"
                    required
                 />

                <FormInput
                    type="password"
                    name="confirmedPassword"
                    value={confirmedPassword}
                    handleChange={this.handleChange}
                    label="Confirmed Password"
                    required
                 />
                
                <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
                </div>
            )
        }
} ;

export default SignUp;