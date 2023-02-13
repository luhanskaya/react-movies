import React from 'react';

class Type extends React.Component {
    state = {
        type: 'all',
    };

    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );

        this.props.searchMovies(this.state.search, this.state.type);
    };

    render() {
        return (
            <div className="radio-holder">
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
            </div>
        );
    }
}

export { Type };
