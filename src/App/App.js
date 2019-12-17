import React from 'react';
import './App.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import studentData from '../helpers/data/studentData';
import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';

class App extends React.Component {
  state = {
    students: [],
    deadStudents: [],
  }

  componentDidMount() {
    const students = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ students, deadStudents });
  }

  followLight = () => {
    const students = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    const studentPosition = Math.floor(Math.random() * students.length);
    const studentId = students[studentPosition].id;
    studentData.followTheLight(studentId);
    this.setState({ students, deadStudents });
  }

  render() {
    return (
      <div className="App">
        <SharkTank students={this.state.students} followLight={this.followLight}/>
        <Graveyard deadStudents={this.state.deadStudents} />
      </div>
    );
  }
}

export default App;
