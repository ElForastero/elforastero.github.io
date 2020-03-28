import React, { useContext } from 'react';
import { Context } from 'src/components/context/BookshelfContext';
import { Heading2 } from 'src/components/atoms/Typography';
import { Book, BookType } from 'src/components/molecules/Book';
import s from './Books.module.css';

type Props = {
  books: Array<BookType>;
};

export const Books: React.FC<Props> = ({ books }) => {
  const [filters] = useContext(Context);

  return (
    <div className={s.root}>
      <Heading2>My Bookshelf</Heading2>
      <div className={s.books}>
        {books
          .filter(book => {
            return filters.genre ? book.genres.includes(filters.genre) : true;
          })
          .map(book => (
            <Book key={book.title} className={s.book} {...book} />
          ))}
      </div>
    </div>
  );
};
