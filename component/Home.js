import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = () => {
    return (
        <View>
            <Text style={styles.home}>Welcome To Home page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    home:
    {
        fontSize:20,
        color:"#fff",
        marginBottom:10,
    }
})

export default Home;
