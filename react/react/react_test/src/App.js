import './App.css';
import Card from './components/card';
import Count from './components/count';
import axios from "axios";
import { useEffect, useState } from 'react';

function App() {
  const [details, setDetails] = useState ({})

  const fetchDeatils = async ()=>{
    const { data }= await axios.get("https://randomuser.me/api/")
    // console.log(data);
    const details = data.results[0]
    setDetails(details)
    console.log(details);
  }

  useEffect(()=>{
    fetchDeatils()
  }, [])


  return (
    <>
    <Card  details={details} />
{/* <Card imgUrl='https://images.pexels.com/photos/1416741/pexels-photo-1416741.jpeg?auto=compress&cs=tinysrgb&w=600'/> */}
  <Count/>
  </>
  );
}

export default App;
