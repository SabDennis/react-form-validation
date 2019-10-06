import React from "react";
import './Form.css';

class Form extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        continent: '',
        sex: '',
        activities: {
            sport: false,
            coding: false,
            videogames: false,
            art: false,
            music: false
        },
        date: '',
        errors: {
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            phoneNumberError: '',
        }
    };

    validation = () => {

        if (this.state.firstName.length < 1) {
            this.setState({ errors: { firstNameError: 'Invalid Name' } });
            return false;
        } else if (this.state.lastName.length < 1) {
            this.setState({ errors: { lastNameError: 'Invalid Surname' } });
            return false;
        }

        if (!this.state.email.includes('@')) {
            this.setState({ errors: { emailError: 'Invalid email, use @' } });
            return false;
        }

        if (isNaN(parseInt(this.state.phoneNumber))) {
            this.setState({ errors: { phoneNumberError: 'Invalid phone number' } });
            return false;
        }
        
        return true;
    };

    handleChange = e => {
        const isCheckbox = e.target.type === 'checkbox';

        if (isCheckbox) {
            const activities = this.state.activities;
            for (let activity in activities) {
                if (activity === e.target.value) {
                    activities[activity] = e.target.checked;
                }
            }
            this.setState({ activities: activities });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        const isValid = this.validation();
        if (isValid) { console.log(this.state) }
    };

    render() {
        return (
            <div className="container">
                <div className="form-container">
                    <h1>Customer Information</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="firstName">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                name="firstName"
                                id="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                placeholder={this.state.errors.firstNameError
                                    ? this.state.errors.firstNameError
                                    : "First Name"} />
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                name="lastName"
                                id="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                placeholder={this.state.errors.lastNameError
                                    ? this.state.errors.lastNameError
                                    : "Last Name"} />
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                id="email"
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder={this.state.errors.emailError
                                    ? this.state.errors.emailError
                                    : "Email"} />
                        </div>
                        <div className="phoneNumber">
                            <label htmlFor="phoneNumber">Telephone</label>
                            <input
                                name="phoneNumber"
                                id="phoneNumber"
                                value={this.state.phoneNumber}
                                onChange={this.handleChange}
                                type="tel"
                                placeholder={this.state.errors.phoneNumberError
                                    ? this.state.errors.phoneNumberError
                                    : "Phone number"} />
                        </div>
                        <div className="continent">
                            <label htmlFor="continent">Continent</label>
                            <select
                                name='continent'
                                id="continent"
                                value={this.state.continent}
                                onChange={this.handleChange}>
                                <option value="Eurasia">Eurasia</option>
                                <option value="Africa">Africa</option>
                                <option value="America">North America</option>
                                <option value="South America">South America</option>
                                <option value="Australia">Australia</option>
                                <option value="Antarctica">Antarctica</option>
                            </select>
                        </div>
                        <div className="date">
                            <label htmlFor="date">Date</label>
                            <input
                                name="date"
                                id="date"
                                value={this.state.date}
                                onChange={this.handleChange}
                                type="date" />
                        </div>
                        <fieldset className="gender">
                            <legend>Gender</legend>
                            <input
                                name="sex"
                                id="male"
                                value="Male"
                                onChange={this.handleChange}
                                type="radio" />
                            <label htmlFor="male">Male</label>
                            <input
                                name="sex"
                                id="female"
                                value="Female"
                                onChange={this.handleChange}
                                type="radio" />
                            <label htmlFor="female">Female</label>
                        </fieldset>
                        <fieldset className="checkbox">
                            <legend>Activities</legend>
                            <input
                                type="checkbox"
                                id="sport"
                                value="sport"
                                onChange={this.handleChange}
                                checked={this.state.activities.sport} />
                            <label htmlFor="sport">Sport</label>
                            <input
                                type="checkbox"
                                id="coding"
                                value="coding"
                                onChange={this.handleChange}
                                checked={this.state.activities.coding} />
                            <label htmlFor="coding">Coding</label>
                            <input
                                type="checkbox"
                                id="videogames"
                                value="videogames"
                                onChange={this.handleChange}
                                checked={this.state.activities.videogames} />
                            <label htmlFor="videogames">Videogames</label>
                            <input
                                type="checkbox"
                                id="art"
                                value="art"
                                onChange={this.handleChange}
                                checked={this.state.activities.art} />
                            <label htmlFor="art">Art</label>
                            <input
                                type="checkbox"
                                id="music"
                                value="music"
                                onChange={this.handleChange}
                                checked={this.state.activities.music} />
                            <label htmlFor="music">Music</label>
                        </fieldset>
                        <button className="submitBtn" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    };
};

export default Form;