import React, { Component } from 'react';
import styled from 'react-emotion';
import axios from 'axios';

const RegisterForm = styled('form')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    padding: 70px 0 0;
    background-color: #E9EBEE;
`;

const InputError = styled('div')`
  position: relative;
  span {
    display: block;
    position: absolute;
    top: 0;
    left: 150px;
    width: 370px;
    padding: 10px;
    border: 1px solid #6B84FC;
    border-radius: 5px;
    background-color: #e8ecff;
    color: #323544;
    text-align: center;
  }
`;

const FormInput = styled('input')`
    width: 230px;
    height: 30px;
    margin: 0 auto 12px;
    padding: 8px 10px;
    border: 1px solid #DDDFE2;
    outline: none;
    color: #1D2129;
    font-size: 17px;
`;

const SignUpButton = styled('button')`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 230px;
    padding: 0 16px;
    border-radius: 2px;
    outline: 0;
    color: #FFF;
    height: 34px;
    cursor: pointer;
    border: 1px solid;
    border-color: #3B6E22 #3B6E22 #2C5115;
    background-color: #69A74E;
    box-shadow: inset 0 1px 1px #A4E388;
    font-size: 19px;
`;

class Registration extends Component {
    constructor() {
        super();

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const {user} = this.state;
        const newUser = { user: user };

        if (user.firstName && user.lastName && user.username && user.password) {
            axios.post('https://lab.lectrum.io/redux/api/user/6vf77z4hd5', newUser)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    render() {
        const { user, submitted } = this.state;
        return(
            <RegisterForm onSubmit={this.handleSubmit}>
                {submitted && !user.firstName && (
                    <InputError>
                        <span>Your first name should be at least 1 symbol long</span>
                    </InputError>
                )}
                <FormInput
                    name="firstName"
                    value={user.firstName}
                    placeholder="First name"
                    onChange={this.handleChange}
                />
                {submitted && !user.lastName && (
                    <InputError>
                        <span>Your last name should be at least 1 symbol long</span>
                    </InputError>
                )}
                <FormInput
                    name="lastName"
                    value={user.lastName}
                    placeholder="Last name"
                    onChange={this.handleChange}
                />
                {submitted && !user.email && (
                    <InputError>
                        <span>Please provide a valid email</span>
                    </InputError>
                )}
                <FormInput
                    name="email"
                    value={user.email}
                    placeholder="Email"
                    onChange={this.handleChange}
                />
                {submitted && !user.password && (
                    <InputError>
                        <span>A password should be at least 5 symbols long</span>
                    </InputError>
                )}
                <FormInput
                    name="password"
                    value={user.password}
                    placeholder="password"
                    onChange={this.handleChange}
                />
                <SignUpButton>Create Account</SignUpButton>
            </RegisterForm>
        );
    }
}

export default Registration;