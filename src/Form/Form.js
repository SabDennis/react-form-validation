import React from "react";
import './Form.css';

class Form extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        continent: 'Earth',
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
                                    : "John"} />
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
                                    : "Locke"} />
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
                                    : "johnlocke@example.com"} />
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
                                    : "+7 (945) 456-75-24"} />
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
                                type="date"
                                required />
                        </div>
                        <fieldset className="gender">
                            <legend>Gender</legend>
                            <label htmlFor="male" className="customRadio">Male
                                <input
                                    name="sex"
                                    id="male"
                                    value="Male"
                                    onChange={this.handleChange}
                                    type="radio" />
                                <span className="checkmarkRadio"></span>
                            </label>
                            <label htmlFor="female" className="customRadio">Female
                            <input
                                    name="sex"
                                    id="female"
                                    value="Female"
                                    onChange={this.handleChange}
                                    type="radio" />
                                <span className="checkmarkRadio"></span>
                            </label>
                        </fieldset>
                        <fieldset className="checkbox">
                            <legend>Activities</legend>
                            <label htmlFor="sport" className="customCheckbox">Sport
                            <input
                                    type="checkbox"
                                    id="sport"
                                    value="sport"
                                    onChange={this.handleChange}
                                    checked={this.state.activities.sport} />
                                    <span className="checkmarkBox"></span>
                            </label>
                            <label htmlFor="coding" className="customCheckbox">Coding
                            <input
                                    type="checkbox"
                                    id="coding"
                                    value="coding"
                                    onChange={this.handleChange}
                                    checked={this.state.activities.coding} />
                                    <span className="checkmarkBox"></span>
                            </label>
                            <label htmlFor="videogames" className="customCheckbox">Videogames
                            <input
                                    type="checkbox"
                                    id="videogames"
                                    value="videogames"
                                    onChange={this.handleChange}
                                    checked={this.state.activities.videogames} />
                                    <span className="checkmarkBox"></span>
                            </label>
                            <label htmlFor="art" className="customCheckbox">Art
                            <input
                                    type="checkbox"
                                    id="art"
                                    value="art"
                                    onChange={this.handleChange}
                                    checked={this.state.activities.art} />
                                    <span className="checkmarkBox"></span>
                            </label>
                            <label htmlFor="music" className="customCheckbox">Music
                            <input
                                    type="checkbox"
                                    id="music"
                                    value="music"
                                    onChange={this.handleChange}
                                    checked={this.state.activities.music} />
                                    <span className="checkmarkBox"></span>
                            </label>
                        </fieldset>
                        <button className="submitBtn" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    };
};

export default Form;