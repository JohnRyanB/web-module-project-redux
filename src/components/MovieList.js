import React from "react";
import { deleteMovie } from "../actions/movieActions";
import { connect } from "react-redux";
import MovieListItem from "./MovieListItem";
import MovieFooter from "./MovieFooter";

const MovieList = (props) => {
	return (
		<div className="col">
			<table className="table table-striped table-hover">
				<thead>
					{props.movies.map((movie, id) => (
						<tr key={id}>
							<th>{movie.title}</th>
							<th>{movie.director}</th>
							<th>{movie.genre}</th>
							<th>{movie.metascore}</th>
							<th></th>
						</tr>
					))}
				</thead>

				<tbody>
					{props.movies.map((movie) => (
						<MovieListItem key={movie.id} movie={movie} />
					))}
				</tbody>
			</table>

			<MovieFooter totalMovies={props.movies.length} />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		movies: state.movies,
	};
};

export default connect(mapStateToProps, { deleteMovie })(MovieList);
