import { MoviesService } from "../../../assets/api/services/MoviesService";

export default (req, res) => {
  const {
    query: { id },
    method
  } = req;
  switch (method) {
    case "GET":
      MoviesService.getPopularMovies().then(resp => {
        res.setHeader("Content-type", "application/json");
        res.status(200).json(resp.data);
      });
      break;
    default:
      res.status(400);
      break;
  }
};
