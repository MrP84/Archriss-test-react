import React, {Component} from 'react'

import ArchrissMessage from './ArchrissMessage'
import Header from './Header'
import Contact from './Contact'
import ReadMore from './ReadMore'
import '../styles/main.scss'

const articles = {
  cinema: {
    titre: '4e festival ciné été',
    url: './images/cinema.jpg',
    genre: 'cinema'
  },
  exposition: {
    titre: 'le monde des dinausores',
    url: './images/exposition.jpg',
    genre: 'exposition'
  },
  concert: {
    titre: 'concert de boccherini à bério',
    url: './images/concert.jpg',
    genre: 'concert'
  }
}

class CoreLayout extends Component {

  state = {
    articles,
    pictures : 'pictures',
    videos: 'videos'
  }

  render() {

    const { articles } = this.state

    const list = Object
    .keys(articles)
    .map(type => (
      <ReadMore
        key = { type }
        titre = { articles[type].titre }
        url = { articles[type].url }
        genre = { articles[type].genre }
      />
    ))

    return (

      <div className='CoreLayout'>
        <Header />
          <div className='CoreLayout--viewport'>
            <div className='CoreLayout--background'>


              <ArchrissMessage
              title='Les festivals dans le Gard'
              message="L'été est propice aux festivals, le Gard n'échappe pas à la règle. Tout d'horizon des festivals soutenus par le département."
              type="begin"
              displayStyle="none"
              />

              <ArchrissMessage
              title='Photos'
              messageColor='#fac5b3'
              type={this.state.pictures}
              />

              <ArchrissMessage
              title='Vidéos'
              messageColor='#71515c'
              type={this.state.videos}
              displayStyle='none'
              />

              <Contact
                title='Contact'
              />
              <p className="CoreLayout--mainTitle">à lire aussi</p>
              <div className="CoreLayout--box"></div>
              <div className="CoreLayout--info">
                { list }
              </div>
            </div>
          </div>
      </div>
    )

  }





}




// CoreLayout.propTypes = {
//   children : React.PropTypes.element.isRequired
// }

export default CoreLayout
