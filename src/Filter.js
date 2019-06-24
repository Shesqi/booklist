import React from 'react';

export default class Filter extends React.Component {
    constructor(props) {
        super(props);



        this.state = {
            data: {genre: this.props.genre, book: this.props.book, author: this.props.author}
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.data.map (item => <h3 key={item["id"]}><mark>{item["book"]}</mark></h3>)
                }
            </div>
        )
    }
}