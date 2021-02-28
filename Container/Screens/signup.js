import React from "react";
import {StyleSheet, View, Text, TouchableOpacity,ScrollView} from "react-native";
import {useState} from "react";
import { SignUpUesr,SignOut, SignInUesr, Companyuser } from "../Config/firebase";
import auth from "@react-native-firebase/auth";
import { Container, Header, Content, Item, Input, Label } from 'native-base';
import database from "@react-native-firebase/database"
import {Icon, Button, Form} from "native-base"

function Signup({navigation}){

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
        navigation.navigate("Card")
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

    const [id,setId]=useState(" ");
    const [companyname,setCompanyname]=useState(" ");
    const [type,setType]=useState(" ");
   
   

    const CompanyXyz = () => {
      Companyuser(id, companyname,type)
        .then((database) =>{
          setId(null);
            setCompanyname(' ');
            setType(' ');
     
        })
        .catch(error =>{
            alert(error)
        })
    }
   
    function combine(){
      return(
      signIn(),
      CompanyXyz()
     
      )
    }

  return(
    <Container style={{backgroundColor:"black"}}>
      <ScrollView>
     <View style={styles.companymin}>
     
      <View >
           <Text style={styles.companytext}>COMPANY LOGIN</Text>
        <Form>
          <View style={styles.companyinput}>  
          <Item floatingLabel >
              <Label style={styles.companylabel} >Email</Label>
              <Input style={{color:"#fff"}}value={state.emailAddress}onChangeText={(text)=>setState({...state,emailAddress:text})}  keyboardType="email-address"/>
            </Item>
          </View>

          <View style={styles.companyinput}>
          <Item floatingLabel>
              <Label style={styles.companylabel}>Password</Label>
              <Input value={state.password} style={{color:"#fff"}} onChangeText={(text)=>setState({...state,password:text})} secureTextEntry={true}/>
            </Item>
          </View>

          <View style={styles.companyinput}>
            <Item  floatingLabel>
              <Label style={styles.companylabel}>Enter Company Name</Label>
              <Input onChangeText={(text)=> setCompanyname(text)} value={companyname} style={{color:"#fff"}}/>
            </Item>
            </View>


            <View style={styles.companyinput}>
            <Item floatingLabel>
              <Label style={styles.companylabel}>Enter Company Nature</Label>
              <Input onChangeText={(text)=> setType(text)} value={type} style={{color:"#fff"}}/>
            </Item>
            </View>

          <TouchableOpacity onPress={signUp} style={styles.companybt} activeOpacity={0.8} >
            <Text style={styles.companybttext}>Sign up</Text>
          </TouchableOpacity>

         
            
          <TouchableOpacity onPress={combine} style={styles.companybt} activeOpacity={0.8} >
            <Text style={styles.companybttext}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={signOut} style={styles.companybt} activeOpacity={0.8} >
            <Text style={styles.companybttext}>Sign Out</Text>
          </TouchableOpacity>

      

        

    </Form>
    </View> 
    
    </View>
    </ScrollView>
    </Container>
  )
}


const styles= StyleSheet.create({



  companymin:{
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
    },
    
    companytext:{
      fontSize:30,
      fontWeight:"bold",
      textAlign:"center",
      color:"#fff",
      marginBottom: 50, 
      

   },

  companyinput:{
      width:300,
      height:100,
      marginTop:20,
      color: "white",  

   },

  companybttext:{
      fontSize:20,
      backgroundColor:"green",
      color:"#fff",
      textAlign:"center"
  },
   
  companybt:{
     marginTop:20,
     borderWidth:2,
     borderColor:"green",
     margin:10,
     borderRadius:20/2
    
  },
 
  companylabel:{
    fontWeight:"bold",
    color:"#fff"
  }

})


export default Signup;
