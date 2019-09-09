import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ClockSign from './pages/ClockSign';

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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
    
   const {token} = this.state
    
    return (
      <View style={styles.container}>
          <Text>Registro Horario</Text>
          <ClockSign props={this.state}/>
      </View>
    );  
  }
}



export default App;