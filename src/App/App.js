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

  // randomStudent() {
  //   const studentPosition = Math.floor(Math.random() * studentData.livingStudents());
  //   const students = studentData.livingStudents();

  //   this.followTheLight(studentId);
  // }

  followTheLight = () => {
    const students = studentData.livingStudents();
    const studentPosition = Math.floor(Math.random() * students.length);
    const studentId = students[studentPosition].id;
    studentData.followTheLight(studentId);
    this.setState({ students });
  }

  render() {
    return (
      <div className="App">
        <SharkTank students={this.state.students} followTheLight={this.followTheLight}/>
      </div>
    );
  }
}

export default App;
