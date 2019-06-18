import React from 'react';
import './App.css';

export class App extends React.Component {
    constructor(props) {
        super(props);

        let genreList = [];
        let authorList = [];

        for (let k in this.props.books) {
            if (genreList.indexOf(this.props.books[k].genre) === -1) {
                genreList.push(this.props.books[k].genre);
            }
        }

        for (let k in this.props.books) {
            if (authorList.indexOf(this.props.books[k].author) === -1) {
                authorList.push(this.props.books[k].author);
            }
        }

        console.log(genreList);
        console.log(authorList);
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

                </h3>
            </div>
        )
    }
}

// export default App;
