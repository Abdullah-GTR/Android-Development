/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';



import {
  Text,
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Button } from 'react-native-paper';
import Loading from './components/loading';
import TextInputExample from './components/text';
import SimpleList from './components/list';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screen/HomeScreen';
import ProfileScreen from './Screen/ProfileScreen';
import UserScreen from './Screen/UserScreen';
//import 'react-native-gestures-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';




function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home' screenOptions={{
        
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        statusBarColor: '#f4511e',
        headerTintColor: '#fff',

        headerTitleAlign: 'center',
      }}>
        <stack.Screen name="Home" component={HomeScreen} options={{

        }}
        />
        <stack.Screen name="Profile" component={ProfileScreen} />
        <stack.Screen name="User" component={UserScreen} />

      </stack.Navigator>
    </NavigationContainer >
  );
 
}
// function app () {

//   return(
//     <NavigationContainer>

//     </NavigationContainer>
      
//   );
// }

{/* < NavigationContainer >
<stack.Navigator>

</stack.Navigator>
</ >  */}


// const [loading, setloading] = useState(false);
// const [form, setform] = useState(false);
// const [list, setlist] = useState(false);

// function showComponent(title){
//   if (title=="loading"){
//   setloading(true);
//   setform(false);
//   setlist(false);
// }
// else if (title=="form"){
//   setloading(false);
//   setform(true);
//   setlist(false);
// }
// else if (title=="list"){
//   setloading(false);
//   setform(false);
//   setlist(true);
// }

// if (title=="all"){
//   setloading(true);
//   setform(true);
//   setlist(true);
// }
// }





// return (
//   <>
//     <View>
//       <Text style={styles.textStyle}>Hello World</Text>
//       <Button style={[styles.buttons, { backgroundColor: 'red' }]} labelStyle={{ fontSize: 20 }} textColor='white'
//       onPress={()=>showComponent('loading')}>show Loading</Button>
//       <Button style={[styles.buttons, { backgroundColor: 'blue' }]} labelStyle={{ fontSize: 20 }} textColor='white'
//       onPress={()=>showComponent('form')}>show Form</Button>
//       <Button style={[styles.buttons, { backgroundColor: 'green' }]} labelStyle={{ fontSize: 20 }} textColor='white'
//       onPress={()=>showComponent('list')}>show Flatlist</Button>
//       <Button style={[styles.buttons, { backgroundColor: 'black' }]} labelStyle={{ fontSize: 20 }} textColor='white'
//       onPress={()=>showComponent('all')}>show all</Button>

//     </View >
//     <View>

//       {loading? <Loading />:""}
//       {form? <TextInputExample />:""}
//       {list? <SimpleList />:""}






//     </View>
//   </>




const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  buttons: {
    width: '100%',
    borderRadius: 3,
    marginBottom: 10,
    borderTopEndRadius: 10,
  }

});

export default App;
