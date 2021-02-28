import React from "react";
import {StyleSheet, View, Text, TextInput, TouchableOpacity,ScrollView} from "react-native";
import {useState} from "react";
import { SignUpUesr,SignOut, SignInUesr  } from "../Config/firebase";
import auth from "@react-native-firebase/auth";
import { Container, Header, Content, Item, Input, Label } from 'native-base';


import {Icon, Button, Form} from "native-base"

function Studentlogin({navigation}){

    const [state, setState] = useState({
      emailAddress:"",
      password:"",
    });
    const [user, setUser]= useState();

    const signUp = () =>{
      SignUpUesr(state.emailAddress, state.password)
      .then(data =>{
        alert (data)
      })
      .catch (error =>{
        alert (error);
      });
    }

    const signOut = () => {
        SignOut()
       .then(data =>{
         alert (data)
       })
       .catch (error =>{
         alert (error);
       });
     };
 
     const signIn = () =>{
      SignInUesr(state.emailAddress, state.password)
      .then(data =>{
        alert (data)
        navigation.navigate('Studentform')

      })
      .catch (error =>{
        alert (error);
      });
    }
 
    const onAuthStateChanged =user =>{
      setUser(user);
    }

    React.useEffect( ()=>{
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    }, []);



  return(
 
    <Container style={{backgroundColor:"black"}}>
         <View>
         {user && (
          <Button transparent icon onPress ={signOut}>
            <Icon name ="log-out" />
          </Button>
        )}

       </View>
       
     <View style={styles.loginmin}>
     
      <View >
           <Text style={styles.mintext}>STUDENT LOGIN</Text>
        <Form>
          <View style={styles.input}>  
          <Item inlineLabel >
              <Label style={{color:"white",fontWeight:"bold"}}>Email</Label>
              <Input style={{color:"#fff"}}value={state.emailAddress}onChangeText={(text)=>setState({...state,emailAddress:text})}  keyboardType="email-address"/>
            </Item>
          </View>

          <View style={styles.input}>
          <Item inlineLabel>
              <Label style={{color:"#fff", fontWeight:"bold"}}>Password</Label>
              <Input value={state.password} style={{color:"#fff"}} onChangeText={(text)=>setState({...state,password:text})} secureTextEntry={true}/>
            </Item>
          </View>

          <TouchableOpacity onPress={signUp} style={styles.bt} activeOpacity={0.8}>
            <Text style={styles.bttext}>Sign up</Text>
          </TouchableOpacity>

         
            
          <TouchableOpacity onPress={signIn} style={styles.bt} activeOpacity={0.8}>
            <Text style={styles.bttext}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={signOut} style={styles.bt} activeOpacity={0.8}>
            <Text style={styles.bttext}>Sign Out</Text>
          </TouchableOpacity>

           {/* <Button>
             Next Page
           </Button> */}

    </Form>
    </View> 
    
    </View>
    </Container>
             
  )
}


const styles= StyleSheet.create({



  loginmin:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
    },
    
    mintext:{
      fontSize:30,
      fontWeight:"bold",
      textAlign:"center",
      color:"#fff",
      marginBottom: 50, 
      

   },

   input:{
      width:300,
      height:100,
      marginTop:20,
      color: "white",  

   },

  bttext:{
      fontSize:20,
      backgroundColor:"green",
      color:"#fff",
      textAlign:"center"
  },
   
  bt:{
     marginTop:20,
     borderWidth:2,
     borderColor:"green",
     
     
  },

})


export default Studentlogin;
