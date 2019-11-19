import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import BookListItem from '../BookListItem/BookListItem';
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
    // return {
    //     booksLoaded: (newBooks) => {
    //         dispatch(booksLoaded(newBooks));
    //     }
    // }
    return bindActionCreators({
        booksLoaded
    }, dispatch);
};
export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookList));

// const compose = (...func) => (comp) => {
//     return func
//     .reduceRight((wrapped, f) => f(wrapped), comp);
// };
// export default compose;
// export default compose(
//     withBookstoreService(),
//     connect(mapStateToProps, mapDispatchToProps)
// )(BookList)