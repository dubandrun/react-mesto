import React from 'react';
import { connect } from 'react-redux';

import Profile from './Profile';
import ProfileDataReduxForm from './ProfileDataForm';

import { getUserInfoThunkCreator } from '../../redux/profile-reducer'

class ProfileContainer extends React.Component {

  updateProfileInfo() {
    this.props.getUserInfoThunkCreator()
  }

  componentDidMount() {
    this.updateProfileInfo()
  }
  
  render () {
    return (
      <>
      <Profile 
        {...this.props}
        avatar={this.props.userInfo.avatar}
        name={this.props.userInfo.name}
        about={this.props.userInfo.about}
      />
      {/* <ProfileDataReduxForm />  */}
      </> 
    ) 
  } 
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.profile.userInfo
  }
}

export default connect(mapStateToProps, {getUserInfoThunkCreator})(ProfileContainer)