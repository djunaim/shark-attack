import React from 'react';
import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import studentData from '../helpers/data/studentData';
import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const students = studentData.livingStudents();
    this.setState({ students });
  }

  followTheLight = () => {
    const students = studentData.livingStudents();
    const studentPosition = Math.floor(Math.random() * students.length);
    const studentId = students[studentPosition].id;
    studentData.followTheLight(studentId);
    this.setState({ students });
  }

  dearlyBeloved = () => {
    const students = studentData.dearlyBeloved();
    this.setState({ students });
    console.log(students);
  }

  renderView = () => {
    const { students } = this.state;
    if (!students.isDead) {
      return (<SharkTank students={this.state.students} followTheLight={this.followTheLight}/>);
    }
    return (<Graveyard students={this.state.students} dearlyBeloved={this.dearlyBeloved}/>);
  }

  render() {
    return (
      <div className="App">
      {
        this.renderView()
       }
      </div>
    );
  }
}

export default App;
