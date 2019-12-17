import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';
import Student from '../Students/Students';

class Graveyard extends React.Component {
  static propTypes = {
    deadStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { deadStudents } = this.props;
    const studentCards = deadStudents.map((deadStudent) => <Student key={deadStudent.id} deadStudent={deadStudent}/>);
    return (
      <div className="graveYard container">
        <div className="row">
          {studentCards}
        </div>
    </div>
    );
  }
}

export default Graveyard;
