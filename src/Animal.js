import React from 'react';

//If a component just has a render method and nothing else, you can express it as a 'view component'. This is a component that doesn't need any state of its own. This is a 'pure' function as an export.

export default function Animal(props) {
  return (
    <div>
      <h1>{props.animal.name}</h1>
    </div>
  )
}