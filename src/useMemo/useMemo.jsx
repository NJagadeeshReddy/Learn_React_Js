import React from 'react'
import { useState, useMemo } from 'react';


const UseMemo = () => {
  const [count, setCount] = useState(0);

  // Define a function that will be memoized
  const calculateExpensiveValue = (input) => {
    console.log("Calculating expensive value...");
    // Simulate an expensive calculation
    let result = input * 10;
    return result;
  };

  // useMemo will store the result of the calculateExpensiveValue function
  // and only recompute it if the count state changes.
  const memoizedValue = useMemo(() => calculateExpensiveValue(count), [count]);

  return (
    <div>
      <h1 className='hint'> Use Memo example</h1>
      <div>
        <p>Count: {count}</p>
        <p>Memoized Value: {memoizedValue}</p>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
      <ExampleComponent />
    </div>
  )
}

export default UseMemo

export const ExampleComponent = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  // Simulate fetching and processing data (this could be an API call, for example)
  const fetchData = () => {
    console.log("Fetching data...");
    // Simulate an API call or data processing
    return ['apple', 'banana', 'orange', 'grape', 'mango'];
  };

  // Memoized data processing function
  const filteredData = useMemo(() => {
    console.log("Filtering data...");
    // Simulate filtering based on the current filter value
    return data.filter(item => item.includes(filter));
  }, [data, filter]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleFetchData = () => {
    setData(fetchData());
  };

  return (
    <div>
      <h1 className='hint'>useMemo Hook Example with Data Filtering</h1>
      <button onClick={handleFetchData}>Fetch Data</button>
      <br />
      <input type="text" value={filter} onChange={handleFilterChange} placeholder="Filter data" />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};


