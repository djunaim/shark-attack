import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/propz/studentShape';
import DeadStudent from '../DeadStudents/DeadStudents';

import './Graveyard.scss';

class Graveyard extends React.Component {
  static propTypes = {
    deadStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { deadStudents } = this.props;
    const studentCards = deadStudents.map((deadStudent) => <DeadStudent key={deadStudent.id} deadStudent={deadStudent}/>);
    return (
      <div className="graveYard container">
        <h4>The Fallen</h4>
        <div className="row">
          {studentCards}
        </div>
    </div>
    );
  }
}

export default Graveyard;
