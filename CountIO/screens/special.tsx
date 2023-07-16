import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { connect } from "react-redux";


type Props = {};

class SpecialScreen extends Component<Props> {

    

    render () {

        const { imgStyle } = styles;
        return (
            <Image style={imgStyle} source={require('../assets/special_img.png')} />


        )
    }
}

const styles = StyleSheet.create({
    imgStyle: {
        width: '100%',
        height: '100%',
    }
})

const mapStateToProps = (state) => {
    // console.log(state)
    const { name } = state.name;
    return { name };
};


export default connect(mapStateToProps)(SpecialScreen);