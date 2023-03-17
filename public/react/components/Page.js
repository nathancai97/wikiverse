import React from 'react';

export const Page = (props) => {
  return (
    <button onClick={() => props.handlePageClick(props.page.slug)}>
      <h3>{props.page.title}</h3>
    </button>
  );
};
	