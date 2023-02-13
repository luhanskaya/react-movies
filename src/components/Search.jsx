import React from 'react';
import { Type } from './Type';

class Search extends React.Component {
    state = {
        search: '',
        // type: 'all',
    };

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    handleClick = (event) => {
        event.preventDefault();

        if (this.state.search.trim().length) {
            this.props.searchMovies(this.state.search, this.state.type);
        }
    };

    // handleFilter = (event) => {
    //     this.setState(
    //         () => ({ type: event.target.dataset.type }),
    //         () => {
    //             this.props.searchMovies(this.state.search, this.state.type);
    //         }
    //     );
    //     this.props.searchMovies(this.state.search, this.state.type);
    // };

    render() {
        return (
            <>
                <div className="row">
                    <div className="col s12">
                        <div className="input-field">
                            <input
                                className="validate"
                                placeholder="search"
                                type="search"
                                value={this.state.search}
                                onChange={(e) =>
                                    this.setState({ search: e.target.value })
                                }
                                onKeyDown={this.handleKey}
                            />

                            {/* <button
                                className="btn search-btn"
                                onClick={() =>
                                    this.props.searchMovies(
                                        this.state.search,
                                        this.state.type
                                    )
                                }
                            >
                                Search
                            </button> */}

                            <button
                                className="btn search-btn"
                                onClick={this.handleClick}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                {/* <div className="radio-holder">
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="all"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'}
                        />
                        <span>All</span>
                    </label>

                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="movie"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span>Movie</span>
                    </label>

                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="series"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'}
                        />
                        <span>Series</span>
                    </label>

                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="episode"
                            onChange={this.handleFilter}
                            checked={this.state.type === 'episode'}
                        />
                        <span>Episode</span>
                    </label>
                </div> */}

                <Type searchMovies={this.props.searchMovies} />
            </>
        );
    }
}

export { Search };
