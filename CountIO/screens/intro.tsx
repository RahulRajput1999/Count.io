import React, { useRef, useEffect, PropsWithChildren, useState, Component } from 'react';
import { Animated, Linking, TouchableOpacity, View } from 'react-native';
import { StyleSheet, useColorScheme } from "react-native";
import { Button, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "react-native/Libraries/NewAppScreen";
import type { ViewStyle } from 'react-native';


import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setInputName } from '../actions/name';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from '@reduxjs/toolkit';


type FadeInViewProps = PropsWithChildren<{ style: ViewStyle }>;

const FadeInView: React.FC<FadeInViewProps> = props => {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <Animated.View // Special animatable View
            style={{
                ...props.style,
                opacity: fadeAnim, // Bind opacity to animated value
            }}>
            {props.children}
        </Animated.View>
    );
};

type Props = {};

class IntroScreen extends Component<Props> {

    onPressStart() {
        // console.log('button - '+ this.props.inputName);
        this.props.setName(this.props.inputName);
        // console.log('intro button press name - ' + this.props.name);
    }


    render() {
        const {
            view1, view2, view3, safeAreaView, textHeading, textInput, bottomLine, buttonStyle
        } = styles;

        // console.log('intro render - ' + this.props.name)
        return (
            <SafeAreaView style={safeAreaView}>
                <View style={view1}>
                    <FadeInView style={{}}>
                        <Text variant='displayLarge' style={textHeading}>
                            Hey
                        </Text>
                        <Text variant='displayLarge' style={textHeading}>
                            There
                        </Text>
                    </FadeInView>
                </View>
                <View style={view2}>
                    <FadeInView style={{}}>
                        <Text variant='headlineLarge' style={textHeading}>
                            Welcome to Count.IO
                        </Text>
                    </FadeInView>
                </View>
                <View style={view3}>
                    <FadeInView style={{}}>
                        <Text style={textHeading}>
                            What should I call you?
                        </Text>
                        <TextInput
                            mode="outlined"
                            label="Name"
                            style={textInput}
                            value={this.props.inputName}
                            onChangeText={text => this.props.setInputName(text)}
                            textColor='#ffffff'
                            outlineColor="#ffffff"
                            activeOutlineColor="#ffffff"
                            placeholderTextColor="#ffffff"
                        />
                        <Button style={buttonStyle} mode="contained" onPress={() => this.onPressStart()}>
                            Start
                        </Button>
                    </FadeInView>
                </View>
                <View style={bottomLine}>
                    <Text style={{ alignSelf: 'center' }}>Made with 💚 by</Text>
                    <TouchableOpacity style={{ width: 'auto' }} onPress={() => Linking.openURL('https://github.com/RahulRajput1999')}>
                        <Text style={{ color: '#7CB9E8', alignSelf: 'center', width: 'auto' }}>
                            Rahul
                        </Text>
                    </TouchableOpacity>
                </View>


            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    view1: {
        marginTop: 70,
        marginLeft: 10
    },
    view2: {
        marginTop: 10,
        marginLeft: 10
    },
    view3: {
        width: '90%',
        marginLeft: 10,
        marginTop: 50
    },
    safeAreaView: {
        height: 'auto',
        alignContent: 'space-around',
        justifyContent: 'flex-start',
        flex: 1,
        padding: 5,
        backgroundColor: '#6852A2'
    },
    textHeading: {
        textAlign: 'left',
        color: '#ffffff',
        fontWeight: 'bold'

    },
    textInput: {
        backgroundColor: '#6852A2',
        marginTop: 10,
    },
    bottomLine: {
        alignContent: 'center',
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 'auto'
    },
    buttonStyle: {
        marginTop: 10,
        width: '30%'
    }
});

const mapStateToProps = (state) => {
    // console.log(state);
    const { name, inputName } = state.name;
    return { name, inputName };
};


export default connect(mapStateToProps, { setName, setInputName })(IntroScreen);