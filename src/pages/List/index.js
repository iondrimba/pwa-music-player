import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import ListItem from '../../components/ListItem';
import './style.scss';

class List extends PureComponent {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(evt) {
    const id = Number(evt.currentTarget.attributes['data-id'].value);

    this.props.onClick(id);
  }

  render() {
    return (
      <Fragment>
        <ul className="track-list" >
          {
            this.props.tracks.map((track) => {
              return <ListItem key={track.id} active={this.props.active} selectedTrack={this.props.track} onClick={this.onClick} track={track} />
            })
          }
        </ul>
      </Fragment>
    );
  }
}

List.propTypes = {
  track: PropTypes.shape({
    id: PropTypes.number,
    artwork_url: PropTypes.string.isRequired,
    title: PropTypes.string,
    artist: PropTypes.string,
  }),
  tracks: PropTypes.array,
  onClick: PropTypes.func.isRequired,
}

export default List;
