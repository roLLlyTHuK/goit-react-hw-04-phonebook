import React, { Component } from 'react';
import { Form, Input, Button, Label } from './ContactForm.styled'

export class ContactForm extends Component {
    state = {
      name: '',
      number: '',
    };
 
  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;

    this.props.onSubmit({ name, number });

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>Name</Label>
        <Input type="text" name="name" value={name} onChange={(e) => this.setState({ name: e.target.value })} required />
        <Label>Number</Label>
        <Input type="tel" name="number" value={number} onChange={(e) => this.setState({ number: e.target.value })} required />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}


