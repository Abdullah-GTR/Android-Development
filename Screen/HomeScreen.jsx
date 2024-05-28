import { Text, View, StyleSheet, Button } from 'react-native';


function HomeScreen(props) {
    console.log(props)

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.headingStyle}>React Native</Text>
            <Text style={styles.textStyle}>Home Screen</Text>
            <Button title="profile" onPress={()=> props.navigation.navigate('Profile',{name:"hello"})}></Button>
        </View>
    );
}
const styles = StyleSheet.create({
    viewStyle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    headingStyle: {
        fontsize: 28,
        Color: 'black',

    },
    textstyle: {
        fontsize: 30,
        Color: 'black',
        textAlign: 'center',
    },

})
export default HomeScreen;