import { Link } from "react-router-dom"

function ToursList(props) {
  const { tours } = props

  return (
    <>
      <h2>Available Tours</h2>
      <ul>
        {tours.map((tour, index) => {
          const { name, price } = tour

          return (
            <li key={index}>
              <h3>{name}</h3>
              <p>Price: £{price}</p>
              <Link to={`/admin/tours/${tour.id}/edit`} state={{ tour }}>
                Edit Tour
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ToursList
