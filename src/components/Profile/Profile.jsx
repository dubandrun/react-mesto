import React from 'react';

import classNames from 'classnames'
import classes from './Profile.module.css'
import ProfileDataReduxForm from './ProfileDataForm';

// const Profile = ({avatar, name, about, ...props}) => {
//   return (
//     <div className={classNames(classes.profile, classes.rootSection)}>
//       <div className={classes.userInfo}>
//         <div className={classes.photo} style={{backgroundImage: `url(${avatar})`}}></div>
//         <div className={classes.data}>
//           <h3 className={classes.name}>{name}</h3>
//           <p className={classes.about}>{about}</p>
//           <button className={classNames(classes.button, classes.editButton)}>Edit</button>
//         </div>
//         <button className={classNames(classes.button, classes.userInfoButton)}>+</button>
//       </div>
//     </div>
//   )
// }



class Profile extends React.Component {
  state = {formIsOpened: false}

  openForm = () => {
    this.setState({formIsOpened: !this.state.formIsOpened})
  }

  render() {
    return(
      <>
        {this.state.formIsOpened && <ProfileDataReduxForm openForm={this.openForm}/>}
        <div className={classNames(classes.profile, classes.rootSection)}>
          <div className={classes.userInfo}>
            <div className={classes.photo} style={{backgroundImage: `url(${this.props.avatar})`}}></div>
            <div className={classes.data}>
              <h3 className={classes.name}>{this.props.name}</h3>
              <p className={classes.about}>{this.props.about}</p>
              <button onClick={this.openForm} className={classNames(classes.button, classes.editButton)}>Edit</button>
            </div>
            <button className={classNames(classes.button, classes.userInfoButton)}>+</button>
          </div>
        </div>
      </>
    )
  }
}

export default Profile