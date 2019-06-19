import React from 'react';
import './App.css';

export class App extends React.Component {
    constructor(props) {
        super(props);

        let genres = [],
            authors = [];

        for (let k in this.props.books) {
            if (genres.indexOf(this.props.books[k].genre) === -1) {
                genres.push(this.props.books[k].genre);
            }
        }

        for (let k in this.props.books) {
            if (authors.indexOf(this.props.books[k].author) === -1) {
                authors.push(this.props.books[k].author);
            }
        }

        this.state = {
            data: {genre: genres, author: authors}
        };

        console.log(genres);
        console.log(authors);
    }


    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.inputText !== this.state.inputText) {
    //         this.sendAjax(this.state.inputText);
    //         this.setState({requestSuccess: true})
    //     }
    // }


    render() {
        return (
            <div className="App">
                <h1>Booklist App!</h1>
                <h3>
                    {this.state.data.genre}
                    {this.state.data.author}
                </h3>
            </div>
        )
    }
}

// export default App;
