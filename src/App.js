import React, {useState,useEffect} from 'react';
import './App.css';

function App({login}) {
  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error, setError]=useState(null);
  useEffect(()=>{
    if(!login) return;
    setLoading(true);
  fetch(`https://api.github.com/users/${login}`)
  .then((response)=>response
  .json()).then(setData)
  .then(()=>setLoading(false))
  .catch(setError);
  } ,
  [login]
  );
  if(loading) return <h1>Loading... </h1>
  if(data){
    return (<div>
      <h1>{data.login}</h1>
      <img alt="{data.login}" src={data.avatar_url}/>
      </div>);
  }
  return (
    <div>
        No Data found
    </div>
  );
}


export default App;
