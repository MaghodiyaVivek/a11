// import React from 'react';

// const ListView = () => {
//   const items = [
//     { id: 1, name: 'Use Array.map' },
//     { id: 2, name: 'Not a For Loop' },
//     { id: 3, name: 'I Give each item a unique key' },
//     { id: 4, name: 'Avoid using a array index as the key' },
//     { id: 5, name: '' },
//   ];

//   return (
//     <div className="list-view">
//       <h2>the "React Way" to Rendr a List</h2>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ListView;

import React, { useState } from 'react';

const SearchFilter = () => {
  // Step 1: Declare React state for search input value
  const [searchTerm, setSearchTerm] = useState('');

  // Sample list of items (you can replace with your own data)
  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Grapes',
    'Watermelon',
  ];

  // Step 2: Function to update searchTerm state on input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Step 3: Filter items based on searchTerm
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Filter Example</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
