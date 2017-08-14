import React, { Component } from 'react';
import { connect } from 'react-redux';

// component state is completely seperate from application state

class BookDetail extends Component {
    render() {

        // when the app starts we enter this case since state is null, there "this.props.book" is null
        // then when we click a book, our component will re render and successfully print out books title
        if(!this.props.book) {
            return <div>Select a book to get started.</div>;
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);