import React from 'react';
import PropTypes from 'prop-types';

import Student from '../Students/Students';
import studentShape from '../../helpers/propz/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { students } = this.props;
    const studentCards = students.map((student) => <Student key={student.id} student={student}/>);
    return (
      <div className="sharkTank container">
        <div className="row">
          {studentCards}
        </div>
      </div>
    );
  }
}

export default SharkTank;
