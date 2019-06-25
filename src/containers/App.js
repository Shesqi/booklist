import React from 'react';
import './App.css';
import { Filter } from '../components/filter';
import { findUniq } from '../utils';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialData: props.data,
            author: "",
            genre: "",
            authorFilter: [],
            genreFilter: [],
            filterData: []
        };
        this.selectFilter = this.selectFilter.bind(this);
    }

    componentDidMount() {
        const { initialData } = this.state;
        const authorFilter = findUniq(initialData, "author");
        const genreFilter = findUniq(initialData, "genre");
        this.setState({
            filterData: initialData,
            authorFilter,
            genreFilter,
        })
    }

    selectFilter(e) {
        const { author, genre, initialData } = this.state;
        const rules = { author, genre };
        const { value, id } = e.target;
        rules[id] = value;
        const updateList = initialData.filter( el => {
            return (el.genre === rules.genre && el.author === rules.author)
                || (rules.author === "" && el.genre === rules.genre)
                || (rules.genre === "" && el.author === rules.author)
        });
        this.setState({
            ...rules,
            filterData: updateList
        });
    }

    render() {
        const { genreFilter, authorFilter, filterData } = this.state;
        return (
            <div className="App">
                <h1>Booklist App</h1>
                <div>
                    <label htmlFor="author">
                        Автор
                    </label>
                    <select onChange={this.selectFilter}
                            id="author"
                            className="options-select">
                        <option defaultValue>default</option>
                        {
                            authorFilter.map(item =>
                                <option
                                    key={item}
                                    value={item}
                                >
                                    {item}
                                </option>
                            )
                        }
                    </select>
                    <label htmlFor="genre">
                        Жанр
                    </label>
                    <select onChange={this.selectFilter}
                            id="genre"
                            className="options-select">
                        <option defaultValue>default</option>
                        {
                            genreFilter.map(item =>
                                <option
                                    key={item}
                                    value={item}
                                >
                                    {item}
                                </option>
                            )
                        }
                    </select>
                </div>
                <Filter list={filterData}/>
            </div>
        )
    }
}
