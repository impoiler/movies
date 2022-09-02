import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import { useParams } from 'react-router-dom';
import Heading from './Heading';
import Single from './Single';
import { Link } from 'react-router-dom'



const Home = () => {

  const { id } = useParams()

  const [state, setstate] = useState({})

  const [movie, setmovie] = useState({})

  const Getmovie = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=6f78070a53564202829b865f44b96897`).then((Response) => {
      setmovie(Response.data.results)
    })
  }

  const Getdata = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6f78070a53564202829b865f44b96897`).then((Response) => {
      setstate(Response.data)
    })
  }

  useEffect(() => {
    Getdata()
     Getmovie()
  }, [])

  console.log(movie)

  return (
    <>

      <div className="slider">
        <div className='item'>
          <div className="background_image">
            <img src={`https://image.tmdb.org/t/p/original${state.backdrop_path}`} alt="" />
          </div>

          <div className="content container flxaltop">
            <img className='poster_image' src={`https://image.tmdb.org/t/p/original${state.poster_path}`} alt="" />
            <div className="details">
              <h2>{state.original_title}</h2>
              <h3>{state.title}</h3>
              <div className="rating flex">
                <p>{state.vote_average}</p>
                <svg width="18" height="18" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.947 8.17901C19.8842 7.99388 19.7685 7.83121 19.6142 7.71107C19.46 7.59094 19.2739 7.51861 19.079 7.50301L13.378 7.05001L10.911 1.58901C10.8325 1.41313 10.7047 1.26374 10.5431 1.15887C10.3815 1.05401 10.193 0.998153 10.0004 0.998047C9.80771 0.997941 9.61916 1.05359 9.45745 1.15828C9.29574 1.26296 9.16779 1.41221 9.08903 1.58801L6.62203 7.05001L0.921026 7.50301C0.729482 7.51819 0.546364 7.58823 0.393581 7.70475C0.240798 7.82127 0.124819 7.97934 0.0595194 8.16004C-0.00578038 8.34075 -0.0176359 8.53645 0.0253712 8.72372C0.0683783 8.91099 0.164427 9.0819 0.302026 9.21601L4.51503 13.323L3.02503 19.775C2.97978 19.9703 2.99428 20.1747 3.06665 20.3617C3.13901 20.5486 3.26589 20.7095 3.43083 20.8235C3.59577 20.9374 3.79115 20.9991 3.99161 21.0007C4.19208 21.0022 4.38837 20.9434 4.55503 20.832L10 17.202L15.445 20.832C15.6154 20.9451 15.8162 21.0033 16.0207 20.9988C16.2251 20.9944 16.4232 20.9274 16.5884 20.8069C16.7536 20.6865 16.878 20.5183 16.9448 20.3251C17.0116 20.1318 17.0176 19.9228 16.962 19.726L15.133 13.326L19.669 9.24401C19.966 8.97601 20.075 8.55801 19.947 8.17901V8.17901Z" fill="currentColor" />
                </svg>

                <p>({state.vote_count}) Votes</p>
              </div>
              <h3><span>Language</span> : {state.original_language}</h3>
              <h3><span>Release date</span> : {state.release_date}</h3>
              <ul>
                {
                  state.genres == undefined ? null : state.genres.map((e, i) => (
                    <li key={i}>{e.name}</li>
                  ))
                }
              </ul>
              <p>{state.overview}</p>
              <div className="links">
                <a href={state.homepage}>Homepage</a>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="container mt100">
        <Heading heading='Similar Movies' />
        <div className="grid5col">
          {
            movie.map == undefined ? null : movie.map((f, k) => (
              <Link onClick={() => { Getdata() }} to={'/movie/' + f.id}>

                <Single title={f.title} rating={f.vote_average} vote={f.vote_count} desc={f.overview} poster={`https://image.tmdb.org/t/p/original${f.poster_path}`} />
              </Link>
            ))
          }
        </div>
      </div>

    </>
  )
}

export default Home
