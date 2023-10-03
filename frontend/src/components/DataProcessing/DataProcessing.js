import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataProcessing() {
 const [data, setData] = useState([]);
 const

 useEffect(() => {
  fetchData(); 
 }, []);

 const fetchData = async () => {
  try {
   const response = await axios.get('../data/WHO-COVID-19-global-data.csv');
   
  if(response.data) {
   setData(response.data);
   setLoading(false);
   }
  } catch (error) {
   console.error('Error fetching data: ', error);
  }
 };

 return(
  <div>
   <h2>Data Processing</h2>
   { loading ? (
    <p>Loading data...</p>
   ) : (
    <div>
     <h3>Data</h3>
     <table>
      <thead>
       <tr>
        <th>Date_reported</th>
        <th>Country_code</th>
        <th>Country</th>
        <th>WHO_region</th>
        <th>New_cases</th>
        <th>Cumulative_cases</th>
        <th>New_deaths</th>
        <th>Cumulative_deaths</th>
       </tr>
      </thead>
      <tbody>
       {data.map((item) => (
        <tr key={item.id}>
         <td>{item.date}</td>
         <td>{item.id}</td>
         <td>{item.name}</td>
         <td>{item.region}</td>
         <td>{item.new_cases}</td>
         <td>{item.cumulative_cases}</td>
         <td>{item.new_deaths}</td>
         <td>{item.cumulative_deaths}</td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   )}
  </div>
 )
}

export default DataProcessing;