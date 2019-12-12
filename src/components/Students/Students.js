import React from 'react';

import studentShape from '../../helpers/propz/studentShape';

class Student extends React.Component {
  static propTypes = {
    students: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
      <div className="card col-md-4">
        <div className="card-body">
          <p className="card-title">{student.firstName}</p>
          <p className="card-title">{student.lastName}</p>
        </div>
      </div>
    );
  }
}

export default Student;
