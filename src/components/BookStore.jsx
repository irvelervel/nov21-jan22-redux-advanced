import { Component } from 'react'
import BookList from './BookList'
import BookDetail from './BookDetail'
import { Col, Row } from 'react-bootstrap'

class BookStore extends Component {
  state = {
    books: [],
    bookSelected: null,
  }

  componentDidMount = async () => {
    // here I'd like to dispatch my getBooks action creator!
    // so let's connect this component to the Redux Store in order to be able
    // to dispatch an action
  }

  changeBook = (book) => this.setState({ bookSelected: book })

  render() {
    return (
      <Row>
        <Col md={4}>
          <BookList
            bookSelected={this.state.bookSelected}
            changeBook={this.changeBook}
            books={this.state.books}
          />
        </Col>
        <Col md={8}>
          <BookDetail bookSelected={this.state.bookSelected} />
        </Col>
      </Row>
    )
  }
}

export default BookStore
