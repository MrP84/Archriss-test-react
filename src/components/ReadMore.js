import React, { Component } from 'react';

class ReadMore extends Component {

  render() {

    const { titre, url, genre } = this.props;

    return (
      <div className='readMore'>
        <div className="readmore--box-titre"></div>
        <div className="readMore--box-info">
          <div className={`readMore--box-image-${genre}`}>
            <img
              src={ url }
              alt= { url.substr(9, url.length - 4) }
              />
          </div>
          <div className={`readMore--box-complement-${genre}`}>
            <p>{ genre }</p>
            <p>{ titre }</p>
          </div>
        </div>
      </div>
    );
  }

}

export default ReadMore;
