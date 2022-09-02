import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Heading from './Heading';
import Single from './Single';
import { Link } from 'react-router-dom'

const Upcoming = () => {


  const [state, setstate] = useState({})

  const Getdata = () => {
    axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=6f78070a53564202829b865f44b96897').then((Response) => {
      setstate(Response.data.results)
    })
  }

  useEffect(() => {
    Getdata()
  }, [])

  console.log(state)

  return (
    <>
      <div className="container">
        <Heading heading='Upcoming' />
        <div className="grid5col">
          {
            state.map == undefined ? null : state.map((f, k) => (
              <Link to={'/movie/' + f.id}>

                <Single title={f.title} rating={f.vote_average} vote={f.vote_count} desc={f.overview} poster={`https://image.tmdb.org/t/p/original${f.poster_path}`} />

              </Link>

            ))
          }

        </div>
      </div>
    </>
  )
}

export default Upcoming
