import React from 'react';
import classes from './../Profile.module.css';


class ProfileStatus extends React.Component {



    state = {
        editMode: false,
        status: this.props.status
    }

    activEditStatus = () => {

        this.setState({
            editMode: true
        }
        )

    }

    deactivEditStatus = () => {

        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value

        });

    }

    componentDidUpdate(prevProps, prevState) {
        debugger
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status

            });
        }

        console.log("componentDidUpdate")

    }

    render() {

        return (

            <div>
                {!this.state.editMode &&
                    <div className={classes.profile}>

                        <span onDoubleClick={this.activEditStatus}>{this.props.status || "--------"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div className={classes.profile}>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivEditStatus} value={this.state.status} />
                    </div>
                }

            </div>
        )
    }
}

export default ProfileStatus;