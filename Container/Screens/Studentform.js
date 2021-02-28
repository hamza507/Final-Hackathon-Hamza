import React from "react";
import {View,TextInput,TouchableOpacity, Text, StyleSheet,ScrollView} from "react-native";
import { useState } from "react/cjs/react.development";
import database from "@react-native-firebase/database"
import {Saveusers} from "../Config/firebase";
import { Container, Header, Content, Item, Input, Label,Form } from 'native-base';


export default function Studentform({navigation}){

  const [id,setId]=useState(" ");
    const [name,setName]=useState(" ");
    const [marks,setMarks]=useState(" ");
    const [rollno,setRollNo]=useState(" ");
    const [field,setField]=useState(" ");

    const Savedata = () => {
        Saveusers(id, name,marks,rollno,field)
        .then((database) =>{
          setId(null);
            setName(' ');
            setMarks(' ');
            setRollNo(' ');
            setField('');
            alert("Your form has been submitted sucessfully")
            navigation.navigate('Cart')
        })
        .catch(error =>{
            alert(error)
        })
    }

    return(
      <Container style={{backgroundColor:"black"}}>
          <ScrollView>
        <View style={styles.Donormin}>
            <Text style={styles.Donormintext}>Student Registration Form</Text>
        <Form>
            <View>
            <Item floatingLabel>
              <Label style={{color:"#fff", fontWeight: "bold"}}>Enter your Name</Label>
              <Input onChangeText={(text)=> setName(text)} value={name} style={styles.Donorinput}/>
            </Item>
            </View>


            <View>
            <Item floatingLabel>
              <Label style={{color:"#fff", fontWeight: "bold"}}>Enter Your Marks</Label>
              <Input keyboardType="number-pad" onChangeText={(text)=> setMarks(text)} value={marks} style={styles.Donorinput}/>
            </Item>
            </View>

            <View>
            <Item floatingLabel>
              <Label style={{color:"#fff", fontWeight: "bold"}}>Enter your Roll No</Label>
              <Input keyboardType="email"  onChangeText={(text)=> setRollNo(text)} value={rollno} style={styles.Donorinput}/>
            </Item>
            </View>

            <View>
            <Item floatingLabel>
              <Label style={{color:"#fff", fontWeight: "bold"}}>Enter your Field</Label>
              <Input autoCapitalize="words" onChangeText={(text)=> setField(text)} value={field} style={styles.Donorinput}/>
            </Item>
            </View>
        </Form>

            <TouchableOpacity onPress={Savedata} style={styles.Donorbtn} activeOpacity={0.8}>
                <Text style={styles.Donorbtntext}>Submit</Text>
            </TouchableOpacity>
        </View>
         </ScrollView>
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