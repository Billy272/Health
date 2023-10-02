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
   const response = await axios.get('/api/get-data');
   
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
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
       </tr>
      </thead>
     </table>
    </div>
   )}
  </div>
 )
}