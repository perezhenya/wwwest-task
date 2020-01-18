import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import profileAction from '../actions/profileAction';
import '../styles/App.css';

class Profile extends React.Component {

  componentDidMount() {
    this.props.getProfileItems();
  }
    render = () => {
      const {data} = this.props;
    return (
      <div className="Profile">
        <ul>
          {
            data.map(item => (
            <li key={item.id}>{item.body}</li>
            ))
          }
        </ul>
     </div>

  );
}
}

const mapStateToProps = (state) => ({
  data: state.profile.items,
})
const mapDispatchToProps = (dispatch) => ({
  getProfileItems: () => {
    dispatch(profileAction())    

  }
})

Profile.propTypes = {
  data: PropTypes.array.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
