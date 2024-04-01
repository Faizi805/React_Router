import { useEffect, useState } from "react"
// import { useLoaderData } from "react-router-dom";


function Github() {
    // const data = useLoaderData()

    const [data, setData] = useState([])

    // const [followers, setFollowers] = useState([])
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(null)
    // const [page, setPage] = useState(1)
    // const [perPage, setPerPage] = useState(10)
    // const [total, setTotal] = useState(0)
    // const [search, setSearch] = useState("")
    // const [searched, setSearched] = useState([])
    // const [searchLoading, setSearchLoading] = useState(false)
    // const [searchError, setSearchError] = useState(null)
    // const [searchPage, setSearchPage] = useState(1)
    // const [searchPerPage, setSearchPerPage] = useState(10)
    // const [searchTotal, setSearchTotal] = useState(0)
    // const [searchedUsers, setSearchedUsers] = useState([])
    // const [searchedRepos, setSearchedRepos] = useState([])
    // const [searchedFollowers, setSearchedFollowers] = useState([])
    // const [searchedFollowing, setSearchedFollowing] = useState([])

    useEffect(
        () => {
            fetch("https://api.github.com/users/Faizi805")
            .then(res => res.json())
            .then(data => setData(data))
            
        }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <p>Github page here! 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉</p>
      <br />
      Followers: {data.followers}
      <br />
      Following: {data.following}
      <br />
      <img src={data.avatar_url} alt="Git Picture" width={300} /> 
    </div>
  )
}

export default Github

// export const githubInfoLoader = aysnc () => {
//     const response = await fetch("https://api.github.com/users/Faizi805")
//     return response.json()
// }
