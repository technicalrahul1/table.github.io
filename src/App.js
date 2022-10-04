import React, { useEffect, useState } from 'react'

const App=()=>{
  const[data,setData] = useState([]);

  const setHits =()=>{
    fetch('http://hn.algolia.com/api/v1/search?query=html')
    .then((response) => response.json())
    .then((data) => setData(data.hits));
    }
    useEffect(()=>{
      setHits();
    },[])
    
  return(<>
        <div>
        <center >
        <table border="1" >
          <tr style={{backgroundColor:"red"}}>
            <th>Object Id</th>
            <th>Title</th>
            <th>URL</th>
          </tr>
          
          <tr>
        
            <td>{data?.map((item,i)=>{
            return<li  key={i}>{item.objectID}</li>
          })}</td>
            <td>{data?.map((item,i)=>{
            return<li  key={i}>{item.title}</li>
          })}</td>
            <td>{data?.map((item,i)=>{
            return<li><a href={item.url}>{item.url}</a></li>
          })}</td>
          </tr>
         
        </table></center>
          {/* <ul>number of lists
          {data?.map((item,i)=>{
            return<li key={i}>{item.title}</li>
          })}
          </ul> */}
        </div>
        </>
        )
  
}


export default App
