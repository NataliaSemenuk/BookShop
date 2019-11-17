import React, {Component} from 'react';
import BookListItem from '../BookListItem/BookListItem';
import { connect } from 'react-redux';
import withBookstoreService from '../hoc/withBookstoreService';
import { booksLoaded } from '../../actions/actions';

class BookList extends Component {
    componentDidMount() {
        const {bookstoreService} = this.props;
        const data = bookstoreService.getBooks();
        this.props.booksLoaded(data);
    }
    render() {
        const {books} = this.props;
        return (
            <ul> 
            {
                books.map((item) => {
                    return (                    
                        <li key = {item.id}>
                            <BookListItem book = {item}/>
                        </li>
                    );
                })
            }
            </ul>
        );
    }  
}
const mapStateToProps = ({books}) => {
    return {
        books,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        booksLoaded: (newBooks) => {
            dispatch(booksLoaded(newBooks));
        }
    }
};
export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));