import React from 'react';
import './App.css';
import Filter from './Filter';

export class App extends React.Component {
    constructor(props) {
        super(props);

        let genres = [],
            authors = [],
            id = [],
            book = [];

        for (let k in this.props.data) {
            if (genres.indexOf(this.props.data[k].genre) === -1) {
                genres.push(this.props.data[k].genre);
            }
        }

        for (let k in this.props.data) {
            if (book.indexOf(this.props.data[k].book) === -1) {
                book.push(this.props.data[k].book);
            }
        }

        for (let k in this.props.data) {
            if (authors.indexOf(this.props.data[k].author) === -1) {
                authors.push(this.props.data[k].author);
            }
        }

        for (let k in this.props.data) {
            if (id.indexOf(this.props.data[k].id) === -1) {
                id.push(this.props.data[k].id);
            }
        }

        this.state = {
            data: {id: id, genre: genres, author: authors, book: book},
            filter: ''
        };

        console.log(genres);
        console.log(authors);
    } // constructor

    // componentDidMount() {
    //     let selector = document.querySelectorAll('.options-select');
    //
    //     selector.addEventListener('onchange', this.selectEvent);
    // }

    selectEvent(e, filter) {
        debugger
        this.setState({filter: e.target.value, data: filter});
    }


    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.inputText !== this.state.inputText) {
    //         this.sendAjax(this.state.inputText);
    //         this.setState({requestSuccess: true})
    //     }
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {

        alert('component did update!')
    }


    render() {
        return (
            <div className="App">
                <h1>Booklist App</h1>

                <select onChange={this.selectEvent.bind(this)}
                        className="options-select">
                    <option defaultValue>default</option>
                    {
                        this.state.data["id"].map(item =>
                            <option key={item["id"]} value={item["id"]}>{item["author"]}</option>
                        )
                    }
                </select>

                <select onChange={this.selectEvent.bind(this)} className="options-select">
                    <option defaultValue>default</option>
                    {
                        this.props.data.map(item =>
                            <option key={item["id"]} value={item["id"]}>{item["genre"]}</option>
                        )
                    }
                </select>

                <Filter data={this.props.data}/>
            </div>
        )
    }
}
