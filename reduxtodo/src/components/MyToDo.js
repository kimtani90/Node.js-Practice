import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addTodo} from "../actions/index";

import TodoItem from "./TodoItem";
import Menu from "./Menu";


class MyToDo extends Component {



    render() {

        console.log(this.props);
        return (
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <h2 className="text-center">Menu Items</h2>
                    </div>

                </div>
                <hr/>
                {/*<div className="row justify-content-md-center">
                    <div className="col-md-10">
                        <div className="form-group">
                            <input
                                className="form-control"
                                ref={(input) => this.input = input}
                                type="text"
                                placeholder="Enter a Todo"
                            />
                        </div>
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => {
                                this.props.addTodo(this.input.value)
                            }}
                        >Add</button>
                    </div>
                </div>

                <hr/>*/}
                <div className="row ">
                    <div className="card-deck col-md-12 justify-content-md-center">
                        <div className="card col-md-4">
                            <div className="card-body">
                                {
                                    this.props.todoArr.map((todo,index) => {
                                        return(
                                            <Menu
                                                key={index}
                                                item={todo}
                                            />
                                        );
                                    })
                                }
                            </div>
                        </div>
                        <div className="card col-md-4">
                            <div className="card-body">

                                {
                                    this.props.todoArr.map((todo,index) => {
                                        return(
                                            <TodoItem
                                                key={index}
                                                item={todo}
                                            />
                                        );
                                    })
                                }

                            </div>
                                <div className="footer">
                                    <hr/>
                                    <div className="row justify-content-md-left">
                                    <div className="col-md-10">
                                    <h5>Total:</h5>
                                    </div>
                                    <div className="col-md-2 ">
                                      <h5> $ {this.props.total}</h5>
                                    </div>
                                    </div>
                                </div>

                        </div>


                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(todos) {

console.log(todos);
    const todoArr = Object.keys(todos.items).map((item) => (
        {
            'todo' : item,
            'desc' : todos.items[item]
        }
    ));

    const total = todos.total;

    return {todoArr, total};
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo : (data) => dispatch(addTodo(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyToDo);    // Learn 'Currying' in functional programming
