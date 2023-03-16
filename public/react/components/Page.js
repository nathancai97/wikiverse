import React from 'react';

export const Page = (props) => {
  console.log("Page props:", props);
  return (
    <button onClick={() => props.handlePageClick(props.page.slug)}>
      <h3>{props.page.title}</h3>
    </button>
  );
};
	