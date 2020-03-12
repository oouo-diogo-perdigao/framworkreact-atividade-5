import React from "react";
import { MoviesService } from "../assets/services/MoviesService";

import Link from "next/link";
import Head from "next/head";

function Home(props) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <table className="table-fill">
          <thead>
            <tr>
              <th className="text-left">Filme</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            {props.films.map(f => (
              <tr key={f.id}>
                <td>
                  <Link href={"/movie-detail/" + f.id}>
                    <a>{f.title}</a>
                  </Link>
                </td>
              </tr>
            ))}
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
        body {
          background-color: #3e94ec;
          font-family: "Roboto", helvetica, arial, sans-serif;
          font-size: 16px;
          font-weight: 400;
          text-rendering: optimizeLegibility;
        }

        div.table-title {
          display: block;
          margin: auto;
          max-width: 600px;
          padding: 5px;
          width: 100%;
        }

        .table-title h3 {
          color: #fafafa;
          font-size: 30px;
          font-weight: 400;
          font-style: normal;
          font-family: "Roboto", helvetica, arial, sans-serif;
          text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
          text-transform: uppercase;
        }

        /*** Table Styles **/

        .table-fill {
          background: white;
          border-radius: 3px;
          border-collapse: collapse;
          height: 320px;
          margin: auto;
          max-width: 600px;
          padding: 5px;
          width: 100%;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
          animation: float 5s infinite;
        }

        th {
          color: #d5dde5;
          background: #1b1e24;
          border-bottom: 4px solid #9ea7af;
          border-right: 1px solid #343a45;
          font-size: 23px;
          font-weight: 100;
          padding: 24px;
          text-align: left;
          text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
          vertical-align: middle;
        }

        th:first-child {
          border-top-left-radius: 3px;
        }

        th:last-child {
          border-top-right-radius: 3px;
          border-right: none;
        }

        tr {
          border-top: 1px solid #c1c3d1;
          border-bottom-: 1px solid #c1c3d1;
          color: #666b85;
          font-size: 16px;
          font-weight: normal;
          text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
        }

        tr:hover td {
          background: #4e5066;
          color: #ffffff;
          border-top: 1px solid #22262e;
        }

        tr:first-child {
          border-top: none;
        }

        tr:last-child {
          border-bottom: none;
        }

        tr:nth-child(odd) td {
          background: #ebebeb;
        }

        tr:nth-child(odd):hover td {
          background: #4e5066;
        }

        tr:last-child td:first-child {
          border-bottom-left-radius: 3px;
        }

        tr:last-child td:last-child {
          border-bottom-right-radius: 3px;
        }

        td {
          background: #ffffff;
          padding: 20px;
          text-align: left;
          vertical-align: middle;
          font-weight: 300;
          font-size: 18px;
          text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
          border-right: 1px solid #c1c3d1;
        }

        td:last-child {
          border-right: 0px;
        }

        th.text-left {
          text-align: left;
        }

        th.text-center {
          text-align: center;
        }

        th.text-right {
          text-align: right;
        }

        td.text-left {
          text-align: left;
        }

        td.text-center {
          text-align: center;
        }

        td.text-right {
          text-align: right;
        }
      `}</style>
    </div>
  );
}

Home.getInitialProps = async () => {
  const results = await MoviesService.getPopularMovies();
  return { films: results.data.results };
};

export default Home;
