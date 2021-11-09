import QuoteForm from '../components/quotes/QuoteForm';

import React from 'react';

const NewQuotes = () => {
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuotes;
