// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const Read = () => {
//     const [data,setdata] = useState([])
// //     const fetchData = ()=>{
// //         axios.get("https://642d4d6dbf8cbecdb4027745.mockapi.io/dairy").then((res)=>{
// //             return setdata(res.data)
// //         }).catch((err)=>{
// // console.log(err)
// //         })
// //     }
// const handleDelete  = (id)=>{
// const filter = data.filter(el =>el.id !==id)
// setdata(filter)
// }
// const fetchData = async()=>{
// const res = await axios.get("https://642d4d6dbf8cbecdb4027745.mockapi.io/dairy")
//  let data =setdata( res.data)
//  console.log(data,"hihi")
// }
//     useEffect(()=>{
//         fetchData()
//     },[])
//   return (
//     <div>{
//         data.map((el)=>{
//             return <div key={el.id}>
//  <div>{el.name}</div>  <button onClick={handleDelete(el.id)}>Click </button>
//             </div>
//         })
//         }</div>
//   )
// }

// export default Read

// 
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Read = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id) => {
    const filteredData = data.filter(el => el.id !== id);
    setData(filteredData);
  };

  const handleSearch = () => {
   
    const searchResults = data.filter((el) => el.name.includes(searchTerm));
   setData(searchResults)
  };
const handleSearchChnage = (e)=>{
setSearchTerm(e.target.value)
handleSearch()
}
  const fetchData = async () => {
    try {
      const response = await axios.get("https://642d4d6dbf8cbecdb4027745.mockapi.io/dairy");
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div>
         <input
            type="search"
            name="search"
            id=""
            value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}

            onChange={(e)=>{handleSearchChnage(e)}}
          />
          <button onClick={handleSearch}>Search</button>
    </div>
    <div>
      {data.map((el) => (
        <div key={el.id}>
          <div>{el.name}</div>
          <button onClick={() => handleDelete(el.id)}>Click</button>
       
        </div>
      ))}
    </div>
    
    </>
  );
};

export default Read;

