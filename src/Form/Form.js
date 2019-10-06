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
        date: ''
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
        console.log(this.state);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}> Customer Information:
                <div>
                    <label>
                        <input
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                            placeholder="First Name" />
                    </label>
                    <label>
                        <input
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            placeholder="Last Name" />
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="Email" />
                    </label>
                    <label>
                        <input
                            name="phoneNumber"
                            value={this.state.phoneNumber}
                            onChange={this.handleChange}
                            placeholder="Phone Number" />
                    </label>
                </div>
                <select
                    name='continent'
                    value={this.state.continent}
                    onChange={this.handleChange}>
                    <option value="Eurasia">Eurasia</option>
                    <option value="Africa">Africa</option>
                    <option value="America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Australia">Australia</option>
                    <option value="Antarctica">Antarctica</option>
                </select>
                <div>
                    <label> Male
                        <input
                            name="sex"
                            value="Male"
                            onChange={this.handleChange}
                            type="radio" />
                    </label>
                    <label> Female
                        <input
                            name="sex"
                            value="Female"
                            onChange={this.handleChange}
                            type="radio" />
                    </label>
                </div>
                <div>
                    <label>Sport
                        <input
                            type="checkbox"
                            value="sport"
                            onChange={this.handleChange}
                            checked={this.state.activities.sport} />
                    </label>
                    <label>Coding
                        <input
                            type="checkbox"
                            value="coding"
                            onChange={this.handleChange}
                            checked={this.state.activities.coding} />
                    </label>
                    <label>Videogames
                        <input
                            type="checkbox"
                            value="videogames"
                            onChange={this.handleChange}
                            checked={this.state.activities.videogames} />
                    </label>
                    <label>Art
                        <input
                            type="checkbox"
                            value="art"
                            onChange={this.handleChange}
                            checked={this.state.activities.art} />
                    </label>
                    <label>Music
                        <input
                            type="checkbox"
                            value="music"
                            onChange={this.handleChange}
                            checked={this.state.activities.music} />
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            name="date"
                            value={this.state.date}
                            onChange={this.handleChange}
                            type="date" />
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    };
};

export default Form;