import React, { Component } from 'react';
import { Container, Header, Content, DatePicker, Text} from 'native-base';
import { TouchableOpacity} from 'react-native';

export default class DatePickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date()};
    this.setDate = this.setDate.bind(this);
  }
  onChangeText = ({ nativeEvent }) => { this.setState({ value: nativeEvent.text }) }

  setDate(newDate) {this.setState({ chosenDate: newDate }); }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Text> Data Aniversário </Text>
          <DatePicker ref={ (c) => this.datePickerRef = c }
            defaultDate={this.state.chosenDate}
            locale={"pt-br"}
            onDateChange={this.setDate}
          /> 
          <TouchableOpacity onPress={() => this.datePickerRef._root.setOpen(true)}>
            <Text> Abrir Data </Text>
          </TouchableOpacity>        
        </Content>
      </Container>
    );
  }
}

//onPress={() => this.datePickerRef._root.onPressDate}