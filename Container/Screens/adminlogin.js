import React from "react";
import {View,TextInput,TouchableOpacity, Text, StyleSheet} from "react-native";
import { useState } from "react/cjs/react.development";

import { Container, Header, Content, Item, Input, Label,Form } from 'native-base';


export default function Adminform({navigation}){

 
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
  
   const saveadmin=()=>{
          let admin ={
              email,
              password,
          };
          if (password=="admin"){
              alert("Welcome admin")
              navigation.navigate("Button")
          }else(
              alert("you are not a admin")        //password is admin
              
          )
          console.log("admin==>",admin)
     }
   

    return(
        <Container style={{backgroundColor:"black"}}>
        <View style={styles.Donormin}>
            <Text style={styles.Donormintext}>Admin Panel</Text>
        <Form>
            <View>
            <Item floatingLabel>
              <Label style={{color:"#fff", fontWeight: "bold"}}>Enter your Name</Label>
              <Input onChangeText={(text)=> setEmail(text)} value={email} style={styles.Donorinput}/>
            </Item>
            </View>


            <View>
            <Item floatingLabel>
              <Label style={{color:"#fff", fontWeight: "bold"}}>Enter Your Password</Label>
              <Input secureTextEntry={true} onChangeText={(text)=> setPassword(text)} value={password} style={styles.Donorinput}/>
            </Item>
            </View>

        
        </Form>

            <TouchableOpacity onPress={saveadmin} style={styles.Donorbtn} activeOpacity={0.8}>
                <Text style={styles.Donorbtntext}>Submit</Text>
            </TouchableOpacity>
        </View>
        </Container>
    )
}


const styles= StyleSheet.create({


    Donormintext:{
        fontSize:30,
        fontWeight:"bold",
         textAlign:"center", 
         color: "white",
         marginTop: 50, 
         marginBottom: 50,

    },


    Donorinput:{
      color: "white", 
      marginBottom: 8, 
      marginTop: 8, 
   

    }, 

    Donormin:{
        justifyContent: 'center',
    },
  
  
    Donorbtntext:{
        fontSize:20,
        backgroundColor:"green",
        color:"#fff",
        textAlign:"center",
        marginTop: 20, 


    },
     
    Donorbtn:{
        marginTop:30,
        borderColor:"green",
    },
  
  })