import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

function Home({navigation}) {
return(
    
    <View style={styles.first}>
       <Text style={styles.main}>QAZI INSTITUTE</Text>
      <TouchableOpacity style={styles.button} title="Go to Details" onPress={() => navigation.navigate('Adminform')} activeOpacity={0.8}>
             <Text style={styles.setting}>Admin Panel</Text>
        </TouchableOpacity>  
        <TouchableOpacity  style={styles.button}  title="Go to Details" onPress={() => navigation.navigate('Studentlogin')} activeOpacity={0.8}>
             <Text style={styles.setting}>Student Panel</Text>
        </TouchableOpacity>  
        <TouchableOpacity style={styles.button} title="Go to Details" onPress={() => navigation.navigate('signup')} activeOpacity={0.8}>
             <Text style={styles.setting}>Company Panel</Text>
        </TouchableOpacity>  
    </View>
)
}


const styles = StyleSheet.create({

    first:{
       alignItems:"center",
        flex:1,
        justifyContent:"center",
        backgroundColor:"black", 
    },


    button:{
         textAlign:"center", 
         backgroundColor:"green",
         width:280,
         margin:30, 
         borderRadius: 20/2, 


    }, 

    setting:{
            textAlign:"center", 
            color: "white", 
            fontSize: 30, 
            fontWeight: "bold", 

    }, 

    main:{
        color: "white", 
        marginBottom: 50, 
        fontSize: 35, 
        fontWeight: "bold", 
    }

});


export default Home; 


