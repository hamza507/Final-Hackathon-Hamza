import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Button({navigation}){
    return (
    <View style={styles.minButton}>
        <View style={styles.button1}>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')} activeOpacity={0.8}>
                <Text style={styles.text1}>Go to Student Details</Text>
            </TouchableOpacity>

        </View>

          <View style={styles.button2}>
          <TouchableOpacity onPress={() => navigation.navigate('Card')} activeOpacity={0.8}> 
              <Text style={styles.text2}>Go to Company Details</Text>
          </TouchableOpacity>

          
      </View>
      </View>
    )
}


const styles= StyleSheet.create({
     minButton:{
         flex:1,
         justifyContent:"center",
         alignItems:"center",
          backgroundColor:"black",

     },
     text1:{
         fontSize:25,
         fontWeight:"bold",
          color:"#fff",
          margin:30,
        borderColor:"green",
        borderWidth: 3,
        backgroundColor:"green",
        borderRadius:20/2,

     },

     text2:{
        fontSize:25,
        fontWeight:"bold",
         color:"#fff",
         margin:25,
         borderColor:"green",
         borderWidth: 3,
         backgroundColor:"green",
         borderRadius:20/2,
    }
  })
  