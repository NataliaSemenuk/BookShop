import React from 'react';
import {BookStoreServiceConsumer} from '../BookstoreServiceContext/BookstoreServiceContext'
const withBookstoreService = (Wrapped) => {
    return (props) => {
        return(
            <BookStoreServiceConsumer>
            {
                (bookStoreService) => {
                    return ( <Wrapped {...props} 
                    bookStoreService = {bookStoreService}/>
                    );
                }
            }
            </BookStoreServiceConsumer>
        );
    };
}
export default withBookstoreService;