import React from 'react';
import classes from './../Profile.module.css';


class ProfileStatus extends React.Component {
    state = {
        status: false
    }

    activEditStatus() {

        this.setState({
            status: true
        }
        )

    }

    deactivEditStatus() {

        this.setState({
            status: false
        }
        )

    }
    render() {

        return (

            <div>
                {!this.state.status &&
                    <div className={classes.profile}>
                        <span onDoubleClick={this.activEditStatus.bind(this)}>{this.props.status}</span>
                    </div>
                }
                {this.state.status &&
                    <div className={classes.profile}>
                        <input autoFocus={true} onBlur={this.deactivEditStatus.bind(this)} value={this.props.status} />
                    </div>
                }

            </div>
        )
    }
}

export default ProfileStatus;