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
                        <div className="row justify-content-md-left">
                            <div className="col-md-4">
                                { item.todo }
                            </div>
                            <div className="col-md-4">
                                 ${ item.desc.price }
                            </div>

                            <div className="col-md-4">
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => {
                                this.props.addTodo(item.todo)
                            }}
                        >Add</button>
                            </div>
                        </div>
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


