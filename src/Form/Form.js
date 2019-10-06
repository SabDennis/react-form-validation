import React from "react";

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
            dateError: ''
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

        if (this.state.sex === '') {
            this.setState({ errors: { phoneNumberError: 'Invalid sex' } });
            return false;
        }

        if (this.state.date === '') {
            this.setState({ errors: { dateError: 'Invalid date' } });
            return false;
        }

        return true;
    };

    handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox';

        if (isCheckbox) {
            const activities = this.state.activities;
            for (let activity in activities) {
                if (activity === event.target.value) {
                    activities[activity] = event.target.checked;
                }
            }
            this.setState({ activities: activities });
        } else {
            this.setState({ [event.target.name]: event.target.value });
        }
    };

    handleSubmit = event => {
        event.preventDefault();
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
                                placeholder="First Name" />
                            {this.state.errors.firstNameError ? <p>{this.state.errors.firstNameError}</p> : null}
                        </div>
                        <div className="lastName">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                name="lastName"
                                id="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                placeholder="Last Name" />
                            {this.state.errors.lastNameError ? <p>{this.state.errors.lastNameError}</p> : null}
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                id="email"
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="Email" />
                            {this.state.errors.emailError ? <p>{this.state.errors.emailError}</p> : null}
                        </div>
                        <div className="phoneNumber">
                            <label htmlFor="phoneNumber">PhoneNumber</label>
                            <input
                                name="phoneNumber"
                                id="phoneNumber"
                                value={this.state.phoneNumber}
                                onChange={this.handleChange}
                                type="tel"
                                placeholder="Phone Number" />
                            {this.state.errors.phoneNumberError ? <p>{this.state.errors.phoneNumberError}</p> : null}
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
                        <div className="sex">
                            <label htmlFor="male">Male</label>
                            <input
                                name="sex"
                                id="male"
                                value="Male"
                                onChange={this.handleChange}
                                type="radio" />
                            <label htmlFor="female">Female</label>
                            <input
                                name="sex"
                                id="female"
                                value="Female"
                                onChange={this.handleChange}
                                type="radio" />
                        </div>
                        <div className="checkbox">
                            <label htmlFor="sport">Sport</label>
                            <input
                                type="checkbox"
                                id="sport"
                                value="sport"
                                onChange={this.handleChange}
                                checked={this.state.activities.sport} />
                            <label htmlFor="coding">Coding</label>
                            <input
                                type="checkbox"
                                id="coding"
                                value="coding"
                                onChange={this.handleChange}
                                checked={this.state.activities.coding} />
                            <label htmlFor="videogames">Videogames</label>
                            <input
                                type="checkbox"
                                id="videogames"
                                value="videogames"
                                onChange={this.handleChange}
                                checked={this.state.activities.videogames} />
                            <label htmlFor="art">Art</label>
                            <input
                                type="checkbox"
                                id="art"
                                value="art"
                                onChange={this.handleChange}
                                checked={this.state.activities.art} />
                            <label htmlFor="music">Music</label>
                            <input
                                type="checkbox"
                                id="music"
                                value="music"
                                onChange={this.handleChange}
                                checked={this.state.activities.music} />
                        </div>
                        <div className="date">
                            <label htmlFor="date">Today date</label>
                            <input
                                name="date"
                                id="date"
                                value={this.state.date}
                                onChange={this.handleChange}
                                type="date" />
                            {this.state.errors.dateError ? <p>{this.state.errors.dateError}</p> : null}
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    };
};

export default Form;