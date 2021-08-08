import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import { Collapse } from 'react-bootstrap';

export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:4000/students/delete-student/' + this.props.obj._id)
            .then((res) => {
                console.log('Student successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.salary}</td>
                <td>{this.props.obj.address}</td>
                <td>{this.props.obj.gender}</td>
                <td>{this.props.obj.team}</td>
                <td>
                    <div>
                        <Col md={4}>
                            <Link className="edit-link" to={"/edit-student/" + this.props.obj._id}>
                                Edit
                            </Link>
                        </Col>
                        <Col md={4}>
                            <Button class="btn btn-outline-primary mr-1" onClick={this.deleteStudent} size="sm" variant="danger">Delete</Button>
                        </Col>
                    </div>
                </td>
            </tr>
        );
    }
}