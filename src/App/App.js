import React from 'react';
import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import studentData from '../helpers/data/studentData';
import SharkTank from '../components/SharkTank/SharkTank';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const students = studentData.livingStudents();
    this.setState({ students });
  }

  render() {
    return (
      <div className="App">
        <button className="btn btn-danger">Danger</button>
        <SharkTank students={this.state.students}/>
      </div>
    );
  }
}

export default App;
