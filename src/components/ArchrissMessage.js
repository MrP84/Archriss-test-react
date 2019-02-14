import React, { Component, PropTypes } from 'react'

class ArchrissMessage extends Component {

  state = {
    jour: 25,
    mois: 'juillet',
    annee: 2016
  }

  render () {
    const { title, message, messageColor, type, displayStyle } = this.props;

    const messageStyles = messageColor ? { color: messageColor } : {};

    const messageType = type === 'pictures' ? '-pictures': type === 'videos' ? '-videos' : ''

    const displayStyles = displayStyle === 'none' ? {display: displayStyle} : {}

    const messageContent = message? message : ''

      return (

        <div className='ArchrissMessage'>
          <img className={`ArchrissMessage--image-header${messageType}`} src="./images/danse1.jpg" alt="danse1"/>
          <div className={`ArchrissMessage--title${messageType}`}>{title}</div>
          <div className={`ArchrissMessage${messageType}`}></div>
          <div
            className={`ArchrissMessage${messageType}-threeFirst`}
            style={displayStyles}>
            <img
              src="./images/danse1.jpg"
              alt="danse1"
              className={`ArchrissMessage${messageType}-threeFirst-a`}/>
            <img
              src="./images/danse6.jpg"
              alt="danse6"
              className={`ArchrissMessage${messageType}-threeFirst-b`}/>
            <img
              src="./images/danse3.jpg"
              alt="danse3"
              className={`ArchrissMessage${messageType}-threeFirst-c`}/>
          </div>
          <div
            className={`ArchrissMessage${messageType}-threeLast`}
            style={displayStyles}>
            <img
              src="./images/danse4.jpg"
              alt="danse4"
              className={`ArchrissMessage${messageType}-threeLast-d`}/>
            <img
              src="./images/danse5.jpg"
              alt="danse5"
              className={`ArchrissMessage${messageType}-threeLast-e`}/>
            <img
              src="./images/danse2.jpg"
              alt="danse2"
              className={`ArchrissMessage${messageType}-threeLast-f`} />
          </div>
          <div className={`ArchrissMessage${messageType}-frame`}>

            <iframe
              className={`ArchrissMessage${messageType}-frame-a`}
              title="Gala"
              src="https://www.youtube.com/embed/C5CHcdf5md0"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={messageType !== '-videos'? {display:'none'} : {}}></iframe>
            <img
              src="./images/youtube.png"
              alt="youtube"
              className={`ArchrissMessage${messageType}-logo`}
              style={messageType !== '-videos'? {display:'none'} : {}}/>

            <iframe
              className={`ArchrissMessage${messageType}-frame-b`}
              title="Thaïlande"
              frameBorder="0"
              src="https://www.dailymotion.com/embed/video/x6h16wi"
              allowFullScreen
              style={messageType !== '-videos'? {display:'none'} : {}}
            ></iframe>
            <img
              src="./images/dailymotion.png"
              alt="dailymotion"
              className={`ArchrissMessage${messageType}-logo`}
              style={messageType !== '-videos'? {display:'none'} : {}}/>

          </div>
          <div className={`ArchrissMessage--info${messageType}`}>
            <div className={`ArchrissMessage--message${messageType}`} style={messageStyles}>{messageContent}</div>
            <div className={`ArchrissMessage--date${messageType}`}>
              <div className="ArchrissMessage--date--annee">{this.state.annee}</div>
              <div className="ArchrissMessage--date--jour-mois">
                <div className="ArchrissMessage--date--mois">{this.state.mois}</div>
                <div className="ArchrissMessage--date--jour">{this.state.jour}</div>
              </div>

            </div>
          </div>

          <div className={`ArchrissMessage--complement${messageType}`}>
            <p className="ArchrissMessage--complement-paragraphe">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio accusantium ex quia fugit dolorem eum dolores repellat quod accusamus, delectus, numquam possimus saepe sit laborum nobis voluptatem. Omnis, veritatis, necessitatibus.
            </p>
            <div className="ArchrissMessage--complement-image">
              <img src="./images/danse2.jpg" alt="danse2" />
            </div>
            <div className="ArchrissMessage--complement-paragraphe">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, natus? Quisquam, consequuntur, accusantium. Vero odio ea voluptatibus tenetur saepe veritatis.
              </p>
              <p>Dolore eum debitis, dicta dolorem facilis et sapiente quos, nisi assumenda cum nemo. Sunt, doloribus optio quia, ad alias nesciunt!
              </p>
              <p>Magni vero eaque blanditiis dolorum molestias repellendus quidem nostrum, explicabo distinctio nihil facilis ea iure sed dolorem asperiores omnis excepturi.
              </p>

            </div>

          </div>
        </div>
      )

    }

}




export default ArchrissMessage
