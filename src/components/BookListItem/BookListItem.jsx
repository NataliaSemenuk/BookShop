import React from 'react';

const BookListItem = ({book}) => {
    const { author, title } = book;
    return (
        <div>
            <span>{title}</span>
            <span>{author}</span>
        </div>
    );
}
export default BookListItem;