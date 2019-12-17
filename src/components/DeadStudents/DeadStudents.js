import React from 'react';

import studentShape from '../../helpers/propz/studentShape';

class DeadStudents extends React.Component {
  static propTypes = {
    deadStudent: studentShape.studentShape,
  }

  render() {
    const { deadStudent } = this.props;
    return (
      <div className="card col-md-4">
      <div className="card-body">
        <p className="card-title">{deadStudent.firstName}</p>
        <p className="card-title">{deadStudent.lastName}</p>
      </div>
    </div>
    );
  }
}

export default DeadStudents;
