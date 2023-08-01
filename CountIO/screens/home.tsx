import React, { Component } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Appbar, Avatar, Button, Card, Text } from "react-native-paper";
import { connect } from "react-redux";
import { IconButton, MD3Colors } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import { decCounter, deleteCounter, incCounter, resetCounter } from "../actions/counts";


type Props = {};

const LeftContent = props => <Avatar.Icon {...props} icon="glass-pint-outline" />

const RightContent = (props, id) => <IconButton
    icon="trash-can"
    iconColor={MD3Colors.error50}
    onPress={() => props.deleteCounter(id)}
/>

class HomeScreen extends Component<Props> {

    componentDidMount(): void {
        if (this.props.name.trim() == 'Nidhi') {
            // console.log(this.props);
            this.props.navigation.navigate('Special')
        }
    }

    addCounterCall(): void {
        this.props.navigation.navigate('Add Counter')
    }

    countIncPressed(counterID) {
        this.props.incCounter(counterID)
    }

    countDecPressed(counterID) {
        this.props.decCounter(counterID)
    }

    countResetPressed(counterID) {
        this.props.resetCounter(counterID)
    }

    countDeletePressed(counterID) {
        this.props.deleteCounter(counterID)
    }

    render() {

        var counterCards = []

        for (const i of this.props.counters) {
            counterCards.push(
                <Card key={i.id} style={style.cardStyle}>
                    <Card.Title title={i.name} subtitle={i.desc} left={LeftContent} right={() => RightContent(this.props, i.id)} />
                    <Card.Content style={style.countContent}>
                        <Text variant="titleLarge">{i.count}</Text>
                    </Card.Content>
                    <Card.Actions>
                        <Button onPress={() => this.countResetPressed(i.id)}>Reset</Button>
                        <Button onPress={() => this.countDecPressed(i.id)}>-1</Button>
                        <Button onPress={() => this.countIncPressed(i.id)}>+1</Button>
                    </Card.Actions>
                </Card>
            );
        }

        return (
            <SafeAreaView style={style.safeAreaView}>
                <Appbar.Header>
                    <Appbar.Content title="Count.IO" />
                    <Appbar.Action icon="calendar" onPress={() => { }} />
                    <Appbar.Action icon="magnify" onPress={() => { }} />
                </Appbar.Header>
                <ScrollView style={style.scrollView}>
                    {counterCards}
                </ScrollView>
                <FAB
                    icon="plus"
                    style={style.fab}
                    onPress={() => this.addCounterCall()}
                />
            </SafeAreaView>

        )
    }
}

const style = StyleSheet.create({
    scrollView: {
        // backgroundColor: 'pink',
        padding: 5,
    },
    countContent: {
        alignSelf: 'center'
    },
    cardStyle: {
        marginTop: 5
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    safeAreaView: {
        height: '100%'
    }
})

const mapStateToProps = (state) => {
    // console.log(state)
    const { name } = state.name;
    const { counters } = state.counters;
    return { name, counters };
};


export default connect(mapStateToProps, { incCounter, decCounter, resetCounter, deleteCounter })(HomeScreen);