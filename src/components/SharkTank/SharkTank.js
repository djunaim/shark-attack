import React from 'react';
import PropTypes from 'prop-types';
import './SharkTank.scss';

import Student from '../Students/Students';
import studentShape from '../../helpers/propz/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
    followTheLight: PropTypes.func,
  }

  killEvent = (e) => {
    const { followTheLight, students } = this.props;
    e.preventDefault();
    followTheLight(students.id);
  }

  render() {
    const { students } = this.props;
    const studentCards = students.map((student) => <Student key={student.id} student={student}/>);
    return (
      <div className="sharkTank container">
        <button className="btn btn-danger" onClick={this.killEvent}>SHARK TANK</button>
        <div className="row">
          {studentCards}
        </div>
      </div>
    );
  }
}

export default SharkTank;
