import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import Clock from 'react-clock';

class Clockjs extends Component {
  
    state= {
      date: new Date(),
    }
  
    componentDidMount = () => {
      setInterval(
        () => this.setState({ date: new Date() }),
        1000
      );
    }
  
    render () {  
      
      const styles = StyleSheet.create({
          react_clock: {
          width:'max-content',
          height:'max-content',
          backgroundColor: 'lemonchiffon',
          borderRadius: 180,
        },
      });
      
      
      return (
        <View  style={styles.react_clock}>
            <Clock
              value={this.state.date}
              size={250}
              renderNumbers={false}
              secondHandWidth={2}
              minuteHandWidth={3}
              hourHandWidth={5}
              hourMarksWidth ={5}
            />
        </View>
      );  
    }
  }
  
  
  
  export default Clockjs;