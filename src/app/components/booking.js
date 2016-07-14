import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

const items = [];
for (let i = 1; i < 11; i++ ) {
  items.push(<MenuItem value={i} key={i} primaryText={`Huesped ${i}`} />);
}

const styles = {
    form: {
        display: 'inline-flex'
    }
};


class Booking extends Component {

  constructor(props) {
    super(props);

    this.state = {
        guests: 1,
        from: new Date(),
        to: new Date()
    };
  }

  render() {
    return (
            <div style={styles.form}>
                <h1>Booking: </h1>
                <DatePicker hintText="From" autoOk={true} minDate={this.state.from}/>
                <DatePicker hintText="To" autoOk={true} minDate={this.state.from}/>
                <SelectField value={this.state.guests} maxHeight={200}>
                  {items}
                </SelectField>
                <RaisedButton label="Book" primary={true}/>
            </div>
    );
  }
}

export default Booking;
