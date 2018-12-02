import { Component } from "react";
import { connect } from "react-redux";
import {initMyMessages, setCurrentDialog, setMyMessages} from "../../actions/actions";

class Dialog extends Component {
    constructor (props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick () {
        if (!this.props.myMessages[this.props.user.rowId])
        {
            this.props.dispatch( initMyMessages(this.props.user.rowId) );
        }

        return this.props.dispatch( setCurrentDialog(this.props.user) );
    }

    render () {
        return (
            <div onClick={this.onClick} className="dialog-wrapper">
                <div className="dialog-inner">
                    <div className="dialog-user">{ this.props.user.displayName } ({ this.props.user.email })</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    dialogs : state.dialogs,
    currentDialog : state.currentDialog,
    myMessages : state.myMessages
});

export default connect(mapStateToProps)(Dialog);