import React from 'react';

const ListView = () => {
  const items = [
    { id: 1, name: 'Use Array.map' },
    { id: 2, name: 'Not a For Loop' },
    { id: 3, name: 'I Give each item a unique key' },
    { id: 4, name: 'Avoid using a array index as the key' },
    { id: 5, name: '' },
  ];

  return (
    <div className="list-view">
      <h2>the "React Way" to Rendr a List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;