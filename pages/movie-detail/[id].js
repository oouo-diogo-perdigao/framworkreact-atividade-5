import React from "react";
import { MoviesService } from "../../assets/services/MoviesService";
import Link from "next/link";

function Home(props) {
  return (
    <>
      <main>
        <table className="table-fill">
          <thead>
            <tr>
              <th className="text-left">Filme</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            <tr key={props.film.id}>
              <td>
                <Link href={"/movies/" + props.film.id}>
                  <a>{props.film.title}</a>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
      <style jsx>{`
        @import url(
          https://fonts.googleapis.com/css?family=Roboto:400,
          500,
          700,
          300,
          100
        );
      `}</style>
    </>
  );
}

Home.getInitialProps = async ({ query }) => {
  const results = await MoviesService.getPopularMovie(query.id);
  return { film: results.data };
};

export default Home;
