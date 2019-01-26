/* eslint-disable no-undef */
import React, { PureComponent, Fragment } from 'react';
import ListItem from '../../components/ListItem/ListItem';
import './styles.scss';

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
              return <ListItem key={track.id} selectedTrack={this.props.track} onClick={this.onClick} track={track} />
            })
          }
        </ul>
      </Fragment>
    );
  }
}

export default List;
