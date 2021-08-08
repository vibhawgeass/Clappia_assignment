import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditStudent extends Component {

  constructor(props) {
    super(props)

    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentSalary = this.onChangeStudentSalary.bind(this);
    this.onChangeStudentAddress = this.onChangeStudentAddress.bind(this);
    this.onChangeStudentGender = this.onChangeStudentGender.bind(this);
    this.onChangeStudentTeam = this.onChangeStudentTeam.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      email: '',
      salary: '',
      address: '',
      gender: '',
      team: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/students/edit-student/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          rollno: res.data.rollno
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeStudentSalary(e) {
    this.setState({ salary: e.target.value })
  }

  onChangeStudentAddress(e) {
    this.setState({ address: e.target.value })
  }

  onChangeStudentGender(e) {
    this.setState({ gender: e.target.value })
  }

  onChangeStudentTeam(e) {
    this.setState({ team: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      salary: this.state.salary,
      address: this.state.address,
      gender: this.state.gender,
      team: this.state.team
    };

    axios.put('http://localhost:4000/students/update-student/' + this.props.match.params.id, studentObject)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/student-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Salary</Form.Label>
          <Form.Control type="text" value={this.state.salary} onChange={this.onChangeStudentSalary} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={this.state.address} onChange={this.onChangeStudentAddress} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Gender</Form.Label>
          <Form.Control type="text" value={this.state.gender} onChange={this.onChangeStudentGender} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Team</Form.Label>
          <Form.Control type="text" value={this.state.team} onChange={this.onChangeStudentTeam} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div>);
  }
}
