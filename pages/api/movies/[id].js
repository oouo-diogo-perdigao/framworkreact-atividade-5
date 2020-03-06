import { MoviesService } from "../../../src/services/MoviesService";

export default (req, res) => {
  const {
    query: { id },
    method
  } = req;
  switch (method) {
    case "GET":
      MoviesService.getPopularMovie(id).then(resp => {
        console.log(resp.data);
        res.setHeader("Content-type", "application/json");
        res.status(200).json(resp);
      });
      break;
    default:
      res.status(400);
      break;
  }
};
