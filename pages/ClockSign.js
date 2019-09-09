import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    TextInput,
  } from 'react-native';
  
  
class Clocksign extends Component {

    state = {
        text: '',
    }

    
      handleSubmit = event => {
     }
    
     handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const {text} = this.state
        console.log(this.state)
        return (
            <SafeAreaView>
            <View>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="DNI"
                    onChange={this.handleChange}
                    name="text"
                    value={text}
                />
                <Button
                title="Validar"
                onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
        </SafeAreaView>
    );
    }
};

  
export default Clocksign;