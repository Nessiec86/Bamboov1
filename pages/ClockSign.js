import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    TextInput,
  } from 'react-native';
import user from '../lib/apiservice';

class Clocksign extends Component {

    state = {
        text: '',
        data: {
            data: {
                id:'',
                name: '',
                start: '',
            },
        },
        isLoading: true,
        status: "loading",
    }
    
    handleSubmit = (event) => {
        user.read (event)
        .then((data) => {
            this.setState({
                data,
            });
            console.log(data)
        })
        .catch(error => {
            this.setState({
                status: "error",
                isLoading: false
            });
        });
    };
    

    handleSubmit2 = () => {
        user.tokenGet(undefined)
        
    };
    
   
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    
       

    render() {
        const {text} = this.state
        console.log(this.state.data)
        const {id, name, start} = this.state.data.data
        console.log (id, name, start)
        const styles = StyleSheet.create({
            container: {
              display: "flex",
              justifyContent: "space-around",
              alignItems: 'center',
            },
            react_clock: {
              width:'25rem',
              height:'25rem',
              backgroundColor: 'black',
            },
            text: { 
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              padding: 8,
              marginTop: 50,
              backgroundColor: '#fff',
              borderRadius: 10,
            }

          });
          
    
        
        
        return (
            <SafeAreaView>
                <View style={styles.container}>
                    <TextInput
                        style={styles.text}
                        placeholder="DNI"
                        onChange={this.handleChange}
                        name="text"
                        value={text}
                    />
                    
                    <Text style={styles.text}>Usuario: {name}</Text>
                    
                    <Button
                        title="Validar"
                        onPress={() => this.handleSubmit(text)}
                    />
                    <Button
                        title="GetToken"
                        onPress={() => this.handleSubmit2()}
                    />
                </View>
            </SafeAreaView>
        );
    }
};

  
export default Clocksign;