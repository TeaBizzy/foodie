import React from "react";

function Example(props) {

  const {name, price_cents, is_rare} = props;

  return (
    <div>
      <span>Gem Type: {name}</span>
      <br />
      <span>Avg Price: ${price_cents/100}</span>
      <br />
      <span>Is rare?: {is_rare ? 'true' : 'false'}</span>
      <hr />
    </div>
  )
}

export default Example;