import{ Text,View, StyleSheet, Button } from 'react-native';


function UserScreen(props){
    console.log('HomeScreen');
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>User Screen</Text>
            <Button title="Home" onPress={()=> props.navigation.navigate('Home')}></Button>
        </View>
    );
}
const styles = StyleSheet.create({
    viewStyle:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    headingStyle:{
        fontsize: 28,
        Color:'black',

    },
    textstyle:{
        fontsize: 30,
        Color:'black',
        textAlign:'center',
    },

})
export default UserScreen;