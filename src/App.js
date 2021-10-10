import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch,Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import React from 'react';
import {auth} from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  
   unsubscribeFromAuth = null;

  componentDidMount(){
       
       const{setCurrentUser}=this.props;

       this.unsubscribeFromAuth= auth.onAuthStateChanged( async userAuth=>{
           
             if(userAuth){

                const userRef =  await  createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot=>{

                     setCurrentUser({

                            id:snapShot.id,
                            ...snapShot.data()
                        })
                   })
             }

             else{

                  setCurrentUser(userAuth);
             }

             
        })
  }

  componentWillUnmount(){
     
       this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage}/>
        <Route  exact path='/signin' 
         render={()=>(this.props.currentUser ?
          
          <Redirect to='/' />
           :
           <SignInAndSignUpPage/>
          )}
        />
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = ({user})=>({

     currentUser:user.currentUser
})

const mapDispatchToProps= dispatch=>({

     setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);