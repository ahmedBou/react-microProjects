import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {

  return (
    <>
      {
        parts.map((item) => {
          const { id, name, parts } = item;
          return (
            <div key={id}>
              <Part name={name} part={parts} />
            </div>
          );
        })
        }
    </>
        );
      };

      export default Content;