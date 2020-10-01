import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';

import getUserInfoThunkCreator from '../../redux/profile-reducer'

class ProfileContainer extends React.Component {

  render () {
    return (
      <Profile 
        name={this.props.name}
        job={this.props.job}
        avatar={this.props.avatar}
      /> 
    ) 
  } 
}

const mapStateToProps = (state) => {
  return {
    name: state.profile.name,
    job: state.profile.status,
    avatar: state.profile.avatar
  }
}

export default connect(mapStateToProps, {getUserInfoThunkCreator})(ProfileContainer)