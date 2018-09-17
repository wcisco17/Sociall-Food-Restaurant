import React, { Component , Fragment } from 'react'
import { Text, View, StyleSheet } from 'react-native'



export const TopContainer = ({ header }) => (
    <Fragment>
        <View style={styles.headerContainer} >
            <Text style={styles.header} >{header}</Text>
        </View>
   </Fragment>
)




const styles = StyleSheet.create({
    headerContainer: {
        position: 'relative',
        backgroundColor: '#ff6666',
        height: '11.5%',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    header: {
        fontSize: 25,
        color: 'white',
        position: 'relative',
        top: 28,
        textAlign: 'center',
        fontFamily: 'montserrat'
    }
})