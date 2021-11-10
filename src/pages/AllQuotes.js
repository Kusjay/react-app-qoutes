import React from 'react';

import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Kusjay', text: 'My awesome quote' },
  { id: 'q2', author: 'Kelechi', text: 'My amazing quote' },
  { id: 'q3', author: 'Kelechi', text: 'Another epic quote' },
  { id: 'q4', author: 'Kelechi', text: 'Be nice quote' },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
