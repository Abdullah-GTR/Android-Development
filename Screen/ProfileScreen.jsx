import{ Text,View, StyleSheet,Button } from 'react-native';


function ProfileScreen(props){
    console.log('HomeScreen');
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.route.params.name}</Text>
            <Button title="User" onPress={()=> props.navigation.navigate('User')}></Button>
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
export default ProfileScreen;