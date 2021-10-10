import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import './sign-in.styles.scss';
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";

class SignIn extends React.Component{

    constructor(props){

        super(props);

        this.state={

            email:'',
            password:''
        };
    };

    handleSubmit=async(e)=>{

        e.preventDefault();

        const {email,password}=this.state;

       try{

           await auth.signInWithEmailAndPassword(email,password);
           this.setState({email:'',password:''});
       }
       catch(error){

        console.log(error);
       }

        
    };

    handleChange = (e)=>{

        const {name,value} = e.target;
        this.setState({[name]:value});
    }


    render(){

        return(

            <div className="sign-in">

                <h2>I already have a account</h2>
                <span className="title">Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                   
                   <FormInput type="email" 
                   
                   name="email"

                   value={this.state.email}

                   handleChange={this.handleChange}

                   label="Email"
                   
                   required

                   />
                   
                   <FormInput type="password" 
                   
                   name="password" 

                   value={this.state.password}
                  
                   handleChange={this.handleChange}

                   label="Password"
                    
                   required

                   />
                   <div className="button">
                     
                     
                   <CustomButton type="submit">SIGN IN</CustomButton>
                   <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>SIGN IN GOOGLE</CustomButton>

                   </div>
                
                </form>

            </div>
        )
    }

};

export default SignIn;

