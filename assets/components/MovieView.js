import React from "react";
import { MoviesService } from "../services/MoviesService";

export const MovieView = props => {
  const [filmes, setFilmes] = React.useState({});

  React.useEffect(_ => {
    console.log(props);
    MoviesService.getPopularMovie(props.movieId).then(ret => {
      setFilmes(ret);
    });
  }, []);

  function _mont(_filme) {
    if (Object.keys(_filme).length) {
      return <>{JSON.stringify(_filme)}</>;
    } else {
      return <>Carregando</>;
    }
  }
  return <>{_mont(filmes)}</>;
};
