import React from "react";

class Form extends React.Component {

    state = {
        firstName : '',
        lastName : '',
        email : '',
        telNumber : '',
        continent : '',
        sex: '',
        interests : {
            sport : false,
            coding : false,
            videogames : false, 
            art : false, 
            music : false
        },
        date : ''
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
                            placeholder="First Name" />
                    </label>
                    <label>
                        <input
                            placeholder="Last Name" />
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            placeholder="Email" />
                    </label>
                    <label>
                        <input
                            placeholder="Phone Number" />
                    </label>
                </div>
                <select>
                    <option>Eurasia</option>
                    <option>Africa</option>
                    <option>North America</option>
                    <option>South America</option>
                    <option>Australia</option>
                    <option>Antarctica</option>
                </select>
                <div>
                    <label> Male
                        <input
                            name="sex"
                            value="male" 
                            type="radio"/>
                    </label>
                    <label> Female
                        <input
                            name="sex"
                            value="female" 
                            type="radio"/>
                    </label>
                </div>
                <div>
                    <label> Sport
                        <input
                            name="sport" 
                            type="checkbox"/>
                    </label>
                    <label> Coding
                        <input
                            name="coding" 
                            type="checkbox"/>
                    </label>
                    <label> Videogames
                        <input 
                            name="videogames"
                            type="checkbox"/>
                    </label>
                    <label> Art
                        <input 
                            name="art"
                            type="checkbox"/>
                    </label>
                    <label> Music
                        <input 
                            name="music"
                            type="checkbox"/>
                    </label>
                </div>
                <div>
                    <label>
                        <input 
                            type="date"/>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    };
};

export default Form;