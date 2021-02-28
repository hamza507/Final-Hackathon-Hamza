import React from 'react';
import {Text,View,FlatList ,StyleSheet,ScrollView,StatusBar, TouchableOpacity} from "react-native";
import database, { firebase } from "@react-native-firebase/database";
import {ListItem,List,Card} from "native-base"

export default class Cart extends React.Component{
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
                   <Text style={styles.Text1}>Name:</Text>
                 <Text style={styles.Text2}>{item.name}</Text>
                 </View>

                 <View>
                   <Text style={styles.Text1}>Marks:</Text>
                     <Text style={styles.Text2}> {item.marks} </Text>
                </View>

                 <View>
                    <Text style={styles.Text1}> RollNo: </Text>
                   <Text style={styles.Text2}>{item.rollno}</Text>
                 </View>

                 <View>
                   <Text style={styles.Text1}>Field:</Text> 
                 <Text style={styles.Text2}>{item.field}</Text>
                </View>


      </Card> 
                </ListItem>
            )
        })
    return (
        <View style={{backgroundColor:"black"}}>
    
             
        <ScrollView style={styles.scrollView}>
        <Text style={styles.detail}>STUDENT DETAILS</Text>
        <View style={styles.cardmanu}>
            <List>
                {myuser}
            </List>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Card')} activeOpacity={0.8}>
                <Text style={styles.company}>Want to See Company Details?</Text>
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
        fontSize:20,
        color: "white", 

      },

      Text2:{
          textAlign:"center",
          color: "black", 
          marginTop: 5, 
          marginBottom: 5, 
          fontWeight:"bold",
          fontSize:20,
          
      },
      allCard:{
          fontWeight:"bold",
          width:250,
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
        fontSize: 40, 
        fontWeight: "bold", 
        color: "white", 
        backgroundColor: "black",

    }, 

    company: {
        fontWeight: "bold", 
        color: "white",
        fontSize: 20, 
        marginTop: 20, 
        marginBottom: 20, 

    }

    


})