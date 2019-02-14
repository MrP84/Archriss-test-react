import React, { Component } from 'react';

class Contact extends Component {

  render() {

    const { title } = this.props;

    return (
      <div className='contact'>

        <div className="contact--box-titre">{ title }</div>
        <div className="contact--box-name">
          <p>
            Musée d'art sacré
          </p>
          <p>
            Informations complémentaires
          </p>
        </div>
        <div className="contact--box-info">
          <p className="contact--box-adress">2 rue saint jacques<br/>30130 pont-saint-esprit</p>
          <div className="contact--box-links">
            <a href="">Appeler</a>
            <a href="">site web</a>
          </div>

        </div>

      </div>
    );
  }

}

export default Contact ;
