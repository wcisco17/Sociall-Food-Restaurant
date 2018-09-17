import React from 'react';
import { StyleSheet, Text,View, TouchableOpacity, ActivityIndicator, ifChecked } from 'react-native';
import { LinearGradient } from "expo";

import PropTypes from 'prop-types'




export const GradientButton = ({ text, onPress, isLoading}) => {

        return (
                <View style={styles.container}>
                    <LinearGradient
                    colors={['#ff6666', '#ff6666' ]}
                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                    style={styles.gradientContainer}
                    >
                <TouchableOpacity style={styles.buttonContainer} onPress={onPress} >
                    {
                        isLoading ?
                        (
                            <View style={styles.activityIndicator}>
                                <ActivityIndicator  color={`black`} />
                          </View>
                        ) :
                        <Text style={styles.buttonText}>{text}
                        </Text>
                    }
                </TouchableOpacity>
            </LinearGradient>
        </View>
        )
}

GradientButton.propTypes = {
    text: PropTypes.object.isRequired,
    onPress: PropTypes.func.isRequired
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        letterSpacing: 0.8,
        position: 'relative',
        top: 20
    },
    gradientContainer: {
        height: 60,
        width: 60,
        borderRadius: 40
    },
    activityIndicator: {
        position: 'relative',
        top: 20,
        transform: [{scale: 1.5}],
      }
  })
//   Animation: width: 50, height: 50 -- And check Sign