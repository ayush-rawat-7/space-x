import React, { useEffect, useState } from "react";
import Main from './Main'
import axios from "axios";
import './App.css'
function App() {
  const [data,setData] = useState([])
  const [flightData, setFlightData] = useState([])
  const[successLaunch, setSuccessLaunch] = useState([])
  const [successLand, setSuccessLand]= useState([])
  //access data for all from api
  const fetchData = () => {
    return axios.get('https://api.spacexdata.com/v3/launches?limit=100')
      .then(({ data }) => {
        // handle success
        // console.log(data);
        return (
          <>
          {setFlightData(data)}
          {
            setData(data)
          }
          </>
        )
      })
      .catch(err => {
        // handle error
        console.log(err);
        <h1>Page Not Found</h1>
      })
  }
  useEffect(() => {
    fetchData();

  }, []);

  //get launch success data
  const fetchSuccessLaunch = () => {
    return axios.get('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true')
      .then(({ data }) => {
        // handle success
        // console.log(data);
        return (
          <>
          {setSuccessLaunch(data)}
          </>
        )
      })
      .catch(err => {
        // handle error
        console.log(err);
        <h1>Page Not Found</h1>
      })
  }
  useEffect(() => {
    fetchSuccessLaunch();

  }, [])
  
  //fetch success land data
  const fetchSuccessLanding = () => {
    return axios.get('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true')
      .then(({ data }) => {
        // handle success
        // console.log(data);
        return (
          <>
          {setSuccessLand(data)}
          </>
        )
      })
      .catch(err => {
        // handle error
        console.log(err);
        <h1>Page Not Found</h1>
      })
  }
  useEffect(() => {
    fetchSuccessLanding();

  }, [])

  const filterLaunch = (year) => {
    if (year === "All") {
      setFlightData(data);
    }
    else {
      const newArr = flightData.filter((flightData) => {
        return flightData.launch_year === year;
      })
      setFlightData(newArr);
    }

  }

  return (
    <>
      <h1>SpaceX Launch Programs</h1>
      <Main flightData={flightData} successLand={successLand} successLaunch={successLaunch} filterLaunch={filterLaunch} />

    </>
  );
}

export default App;
