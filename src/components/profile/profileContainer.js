import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, lampOnAC, lampOffAC } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';




class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 2;
    }

    this.props.getUserProfile(userId);//thunk

  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} lamp={this.props.lamp} isAuth={this.props.isAuth} />
    );
  }
}



let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  lamp: state.profilePage.lamp,
  isAuth: state.auth.isAuth,
})

let NewUrl = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile, lampOnAC, lampOffAC })(NewUrl);