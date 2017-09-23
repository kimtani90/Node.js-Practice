import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addTodo} from "../actions/index";

class Menu extends Component {

    render() {

        const {item} = this.props;
        const todoClass = `alert alert-${item.status === 'done' ?  "success" : "danger"}`;

        return (
            <div className="row justify-content-md-center">
                <div className="col-md-12">
                    <div className={todoClass} role="alert">
                        { item.todo }
                        { item.status === 'new' || item.status === 'cancel'  ? (

                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => {
                                this.props.addTodo(item.todo)
                            }}
                        >Add</button>) : ''}
                    </div>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo : (data) => dispatch(addTodo(data))
    };
}

export default connect(null, mapDispatchToProps)(Menu);    // Learn 'Currying' in functional programming


