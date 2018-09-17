import React, { Component } from 'react'

import { Text, View,StyleSheet } from 'react-native'
import { TopContainer } from "../../organisms/TopContainer";


export default class Home extends Component {
    render() {
        return (
            <TopContainer  header={`User's Feed`} />
        )
    }
}


