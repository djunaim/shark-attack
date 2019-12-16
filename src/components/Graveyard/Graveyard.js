import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';
import Student from '../Students/Students';

class Graveyard extends React.Component {
  static propTypes = {
    dearlyBeloved: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { students } = this.props.dearlyBeloved;
    const studentCards = students.map((student) => <Student key={student.id} sudent={student}/>);
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
