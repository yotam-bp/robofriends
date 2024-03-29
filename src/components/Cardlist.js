import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {

  return (
    <div style={{display:'flex' ,flexWrap:'wrap', justifyContent: 'center'}}>
      {
        robots.map((user, i) => {
          return (<Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email} />
          );
        })
      }
    </div>

  );
}
export default Cardlist;