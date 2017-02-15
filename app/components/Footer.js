import React from 'react';
import {Link} from 'react-router';
import FooterStore from '../stores/FooterStore'
import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = FooterStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    FooterStore.listen(this.onChange);
    FooterActions.getTopCharacters();
  }

  componentWillUnmount() {
    FooterStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    let images = [
      {
        id: 1,
        imgUrl: '/img/footer/1.gif'
      },
      {
        id: 2,
        imgUrl: '/img/footer/2.gif'
      },
      {
        id: 3,
        imgUrl: '/img/footer/3.gif'
      }
    ];
    let leaderboardCharacters = images.map(function(character) {
      return (
        <li key={character.id}>
          <img src={character.imgUrl} />
        </li>
      );
    });
    // let leaderboardCharacters = this.state.characters.map(function(character) {
    //   return (
    //     <li key={character.characterId}>
    //       <Link to={'/characters/' + character.characterId}>
    //         <img className='thumb-md' src={'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg'} />
    //       </Link>
    //     </li>
    //   );
    // });

    return (
      <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5'>
              <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
              <p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong> and <strong>React</strong> with Flux architecture and server-side rendering.</p>
              <p>Copyright © 2013-2017 爵盾实业有限公司 All Rights Reserved.</p>
              <p>沪ICP备13039417号-1(备案号与网站一致)</p>
            </div>
            <div className='col-sm-7 hidden-xs'>
              <h3 className='lead'><strong>Leaderboard</strong> Top 5 Characters</h3>
              <ul className='list-inline'>
                {leaderboardCharacters}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;