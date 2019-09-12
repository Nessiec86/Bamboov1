import React, {Component} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import ClockSign from './pages/ClockSign';
import Clock from 'react-clock';
import Clockjs from './components/Clockjs';
import { apisAreAvailable } from 'expo';

class App extends Component {
  
  state= {
    token: '',
    request: [],
    page: "registrohorario",
    keyword:'',
    userid:0,
  }

  

  render () {  
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        marginBottom: 50,
        fontFamily: 'arial',
        fontWeight: 'bold',
        fontSize: 20,
      }
    });
    
    
    return (
      <ImageBackground 
        source={require('./assets/images/bamboo.jpg')}
        style={{width: '100%', height: '100%'}}
        >
        <View style={styles.container}>
          <Text style={styles.text}>Registro Horario</Text>
            <Clockjs/>
            <ClockSign props={this.state}/>
        </View>
      </ImageBackground>
    );  
  }
}



export default App;