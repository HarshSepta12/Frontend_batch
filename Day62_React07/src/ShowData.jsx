import React from "react";

const ShowData = () => {
  const movie = [
    {
      id: 1,
      movieName: "Ra.one",
      release: 20212,
      actor: "SRK",
    },
    {
      id: 2,
      movieName: "Infinity War",
      release: 2018,
      actor: "RDJ",
    },
    {
      id: 3,
      movieName: "Man of Steel",
      release: 2010,
      actor: "Henry",
    },
    {
      id: 4,
      movieName: "Badshaah",
      release: 1996,
      actor: "SRH",
    },
  ];
  return (
    <div>
      {movie.map((movie) => (
        <div style={
            {backgroundColor:"Gray",
                textAlign:"center",
                padding: "10px",
                margin:"10px"
            }
            }>key={movie.id}
        <h1>{movie.movieName}</h1>
        <h1>{movie.release}</h1>
        <h1>{movie.actor}</h1>
        </div>
      ))}
    </div>
  );
};

export default ShowData;
