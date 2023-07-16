import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { Text } from "react-native-paper";
import { connect } from "react-redux";


type Props = {};

class HomeScreen extends Component<Props> {

    componentDidMount(): void {
        if (this.props.name.trim() == 'Nidhi') {
            // console.log(this.props);
            this.props.navigation.navigate('Special')
        }
    }

    render() {
        return (
            <SafeAreaView>
                <Text>Home</Text>
            </SafeAreaView>

        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    const { name } = state.name;
    return { name };
};


export default connect(mapStateToProps)(HomeScreen);