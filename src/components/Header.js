import React, { Component } from 'react';
import ReactSwipe from 'react-swipe'

const imageStyles = {
  margin: "0 auto",
  width: "100%",
  height: "400px"
}

const nbArticles = 3
const nbPanes = Array
  .apply(null, Array(nbArticles))
  .map((_, i) => {
    return (
      <div key={i}>
      <div className="item">
        <img
          style = {imageStyles}
          alt={ `danse${i+1}` }
          src={ `./images/danse${i+1}.jpg` }
        />
      </div>
      </div>
    )
  }
  )

  const options = {
    startSlide: 0,
    auto: 1000,
    speed : 1000,
    continuous: true,
    callback() {
      console.log('slide passé');
    },
    transitionEnd() {
      console.log('transition terminée');
    }
  }

class Header extends Component {
  next() {
    this.reactSwipe.next()
  }

  prev() {
    this.reactSwipe.prev()
  }

  render() {
    return (

      <div className='Header'>
        <div className='Header--btn-close ion-close' />
        <div className='Header--title'>À la une</div>


      <ReactSwipe
        ref={ reactSwipe => (this.reactSwipe = reactSwipe) }
        className="mySwipe"
        swipeOptions = { options }
        >
          { nbPanes }
      </ReactSwipe>

        <div className="Header--buttons">
          <button type="button" onClick={this.prev.bind(this)}>
            Prev
          </button>
          <button type="button" onClick={this.next.bind(this)}>
            Next
          </button>
        </div>

      </div>
    )
  }
}



export default Header
