import React from 'react';
import PropTypes from 'prop-types';
import './SharkTank.scss';

import Student from '../Students/Students';
import studentShape from '../../helpers/propz/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
    followLight: PropTypes.func,
  }

  killEvent = (e) => {
    const { followLight } = this.props;
    e.preventDefault();
    followLight();
  }

  render() {
    const { students } = this.props;
    const studentCards = students.map((student) => <Student key={student.id} student={student}/>);
    return (
      <div className="sharkTank container">
        <h4>The Hunger Games</h4>
        <button className="btn btn-danger" onClick={this.killEvent}>SHARK ATTACK</button>
        <div className="row">
          {studentCards}
        </div>
      </div>
    );
  }
}

export default SharkTank;
