import React from 'react';
import {Text,View,FlatList ,StyleSheet,ScrollView,StatusBar, TouchableOpacity} from "react-native";
import database, { firebase } from "@react-native-firebase/database";
import {ListItem,List,Card} from "native-base"

export default class Companycard extends React.Component{
      state={
          myuser:[]
      }
    componentDidMount(){
        const myuser = firebase.database().ref("users");
        myuser.on("value",datasnap=>{
       this.setState({myuser:Object.values(datasnap.val())

       })
        })
        }
        
    render(){
     
        const myuser =this.state.myuser.map(item =>{
            return(
                <ListItem style={styles.mincard}>
        <Card style={styles.allCard}>


            

                <View>
                   <Text style={styles.Text1}>CompanyName:</Text>
                 <Text style={styles.Text2}>{item.companyname}</Text>
                 </View>

                 <View>
                   <Text style={styles.Text1}>Type:</Text>
                     <Text style={styles.Text2}> {item.type} </Text>
                </View>

                

      </Card> 
                </ListItem>
            )
        })
    return (
        <View style={{backgroundColor:"black"}}>
    
             
        <ScrollView style={styles.scrollView}>
        <Text style={styles.detail}>COMPANY DETAILS</Text>
        <View style={styles.cardmanu}>
            <List>
                {myuser}
            </List>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')} activeOpacity={0.8}>
                <Text style={styles.students}>Want to See Student Details?</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
        </View>
    )
}
}


const styles= StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
       
      },

      Text1:{
        fontWeight:"bold",
        fontSize:30,
        color: "white", 

      },

      Text2:{
          textAlign:"center",
          color: "black", 
          marginTop: 10, 
          marginBottom: 10, 
          fontWeight:"bold",
          fontSize:20,
          
      },
      allCard:{
          fontWeight:"bold",
          width:300,
          justifyContent:"center",
          alignItems:"center",
          backgroundColor: "green",

      },
    cardmanu:{
        marginTop:10,
        backgroundColor:"black",
        alignItems: "center", 

    }, 

    detail: {
        textAlign: "center", 
        fontSize: 30, 
        fontWeight: "bold", 
        color: "white", 
        backgroundColor: "black",
        marginTop: 30, 
        marginBottom: 20, 


    },

    students: {
         
            fontWeight: "bold", 
            color: "white",
            fontSize: 20, 
            marginTop: 20, 
            marginBottom: 20, 



    }


})