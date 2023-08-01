import React, { Component } from "react";
import { SafeAreaView, StyleSheet, ToastAndroid } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";
import { connect } from "react-redux";
import { addCounter } from "../actions/counts";

type Props = {};


class AddCounterScreen extends Component<Props> {


    addCounter(counter: {}) {
        //need to add data validation here
        if (counter.name === undefined) {
            ToastAndroid.show("Counter name is required", ToastAndroid.SHORT)
        }
        if (counter.desc === undefined) {
            ToastAndroid.show("Counter description is required", ToastAndroid.SHORT)
        }
        if (counter.name && counter.desc) {
            counter.id = this.props.counters.length + 1;
            this.props.addCounter(counter);
            this.props.navigation.goBack();
        }

    }
    render(): React.ReactNode {


        var counter = {
            id: 0,
            count: 0
        }

        return (
            <SafeAreaView style={style.safeAreaView}>
                <Appbar.Header>
                    <Appbar.BackAction onPress={() => { this.props.navigation.goBack() }} />
                    <Appbar.Content title="Add a counter" />
                </Appbar.Header>
                <TextInput
                    mode="outlined"
                    label="Counter Name"
                    value={counter.name}
                    onChangeText={text => counter.name = text}
                    textColor='#ffffff'
                    outlineColor="#ffffff"
                    activeOutlineColor="#ffffff"
                    placeholderTextColor="#ffffff"
                    style={style.textInput}
                />
                <TextInput
                    mode="outlined"
                    label="Counter Description"
                    value={counter.desc}
                    onChangeText={text => counter.desc = text}
                    textColor='#ffffff'
                    outlineColor="#ffffff"
                    activeOutlineColor="#ffffff"
                    placeholderTextColor="#ffffff"
                    style={style.textInput}
                />
                <Button style={style.buttonStyle} mode="contained" onPress={() => this.addCounter(counter)}>
                    Add Counter
                </Button>
            </SafeAreaView >
        )
    }
}


const style = StyleSheet.create({
    safeAreaView: {
        height: 'auto',
        alignContent: 'space-around',
        justifyContent: 'flex-start',
        flex: 1,
        backgroundColor: '#6852A2'
    },
    scrollView: {
        padding: 10
    },
    textInput: {
        backgroundColor: '#6852A2',
        margin: 10,
    },
    buttonStyle: {
        marginTop: 10,
        width: 'auto'
    }
})

const mapStateToProps = (state) => {
    // console.log(state)
    const { name } = state.name;
    const { counters } = state.counters;
    return { name, counters };
};

export default connect(mapStateToProps, { addCounter })(AddCounterScreen);

