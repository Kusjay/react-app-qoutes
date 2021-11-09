import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

import React from 'react';

const NewQuotes = () => {
  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    history.push('/quotes');
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuotes;
