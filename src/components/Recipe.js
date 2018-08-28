import React from 'react';

const API_KEY = "d6b8f42f0637ee9f442f9ee051277a05";

class Recipe extends React.Component {

    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        // document.getElementById("form").reset();
        const res = await req.json();
        console.log(res.recipes[0]);
    }

    render() {
        console.log(this.props);
        return (
            <div>Recipe Component</div>
        );
    }
};

export default Recipe;