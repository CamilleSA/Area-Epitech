/*eslint eqeqeq:0*/
import React, {Component} from 'react';
import '../styles/selectServices.css'
import { If, Then} from 'react-if-elseif-else-render';
import GmailServices from './Gmail/GmailGmail'
import GmailRedditServices from './Gmail/GmailReddit';
import GmailDiscordServices from './Gmail/GmailDiscord';
import GmailGithubServices from './Gmail/GmailGithub';
import YoutubeGmailServices from './Youtube/YoutubeGmail';
import YoutubeRedditServices from './Youtube/YoutubeReddit';
import YoutubeDiscordServices from './Youtube/YoutubeDiscord';
import YoutubeGithubServices from './Youtube/YoutubeGithub';
import RedditGmailServices from './Reddit/RedditGmail';
import RedditRedditServices from './Reddit/RedditReddit';
import RedditDiscordServices from './Reddit/RedditDiscord';
import RedditGithubServices from './Reddit/RedditGithub';
import WeatherGmailServices from './Weather/WeatherGmail';
import WeatherRedditServices from './Weather/WeatherReddit';
import WeatherDiscordServices from './Weather/WeatherDiscord';
import WeatherGithubServices from './Weather/WeatherGithub';
import DiscordDiscordServices from './Discord/DiscordDiscord';
import DiscordGmailServices from './Discord/DiscordGmail';
import DiscordRedditServices from './Discord/DiscordReddit';
import DiscordGithubServices from './Discord/DiscordGithub';
import GithubGithubServices from './Github/GithubGithub';
import GithubGmailServices from './Github/GithubGmail';
import GithubRedditServices from './Github/GithubReddit';
import GithubDiscordServices from './Github/GithubDiscord';
import SpotifyGmailServices from './Spotify/SpotifyGmail';
import SpotifyRedditServices from './Spotify/SpotifyReddit';
import SpotifyDiscordServices from './Spotify/SpotifyDiscord';
import SpotifyGithubServices from './Spotify/SpotifyGithub';

class SelectServices extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'hide',
      value2: 'hide'
    };
  }

  componentDidMount() {

  }

 divstatus = (e) =>{
   this.setState({value: e.target.value});
 }

  divstatuse = (e) =>{
    this.setState({value2: e.target.value});
  }


    render() { 
      
      return (  

        <div className="cardo">
        <div className="container">
        <h1 className="creatework">Create your own workflow !</h1>
        <h2 className="subwork">Select the apps you want to connect to start your custom setup.</h2>
        <h3 className="subsel">Connect this app...</h3>
        <h3 className="subsele">with this one !</h3>
        <h3 className="subselo">.........<i class="fa fa-plus-circle" aria-hidden="true"></i>.........</h3>
      

<div className="servicej">
<div class="box">

  <select onChange={this.divstatus}>
  <option value="hide" selected className="nose">Select an app ...</option>

  <option  value="1" className="Gmail">&#xf0e0; Gmail</option>
  <option  value="3" className="Gmail">&#xf05e; Pornhub</option>  
  <option  value="12" className="Gmail">&#xf1bc; Spotify</option>  

    <option value="2" className="Youtube">&#xf16a; Youtube</option>
    <option value="4" className="Weather">&#xf2c7; Weather</option>
    <option value="6" className="Discord"> &#xf09b; Github</option>
  </select>

</div>

<div class="boxi">
  <select onChange={this.divstatuse}>
  <option value="hide" selected className="nose">Select an app ...</option>

    <option  value="7" className="Gmail">&#xf0e0; Gmail</option>
  
    <option value="9" className="Reddit">&#xf281; Reddit</option>
    <option value="10" className="Discord"> &#xf16e; Discord</option>
    <option value="11" className="Discord"> &#xf09b; Github</option>
  </select>
  

</div>
<If condition={  this.state.value == 1  && this.state.value2 == 7}>
          <Then>
          <GmailServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 9 }>
          <Then>
            <GmailRedditServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 10}>
          <Then>
            <GmailDiscordServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 11}>
          <Then>
            <GmailGithubServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 12  && this.state.value2 == 7}>
          <Then>
          <SpotifyGmailServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 12 && this.state.value2 == 9 }>
          <Then>
            <SpotifyRedditServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 12 && this.state.value2 == 10}>
          <Then>
            <SpotifyDiscordServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 12 && this.state.value2 == 11}>
          <Then>
            <SpotifyGithubServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 2 && this.state.value2 == 7}>
          <Then>
            <YoutubeGmailServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 2 && this.state.value2 == 9}>
          <Then>
            <YoutubeRedditServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 2 && this.state.value2 == 10}>
          <Then>
            <YoutubeDiscordServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 2 && this.state.value2 == 11}>
          <Then>
            <YoutubeGithubServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 3 && this.state.value2 == 9}>
          <Then>
            <RedditRedditServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 3 && this.state.value2 == 7}>
          <Then>
            <RedditGmailServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 3 && this.state.value2 == 10}>
          <Then>
            <RedditDiscordServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 3 && this.state.value2 == 11}>
          <Then>
            <RedditGithubServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 4 && this.state.value2 == 7}>
          <Then>
            <WeatherGmailServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 4 && this.state.value2 == 9}>
          <Then>
            <WeatherRedditServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 4 && this.state.value2 == 10}>
          <Then>
            <WeatherDiscordServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 4 && this.state.value2 == 11}>
          <Then>
            <WeatherGithubServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 5 && this.state.value2 == 10}>
          <Then>
            <DiscordDiscordServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 5 && this.state.value2 == 7}>
          <Then>
            <DiscordGmailServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 5 && this.state.value2 == 9}>
          <Then>
            <DiscordRedditServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 5 && this.state.value2 == 11}>
          <Then>
            <DiscordGithubServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 6 && this.state.value2 == 7}>
          <Then>
            <GithubGmailServices/>
          </Then>
        </If>
        <If condition={  this.state.value == 6 && this.state.value2 == 9}>
          <Then>
            <GithubRedditServices/>
          </Then>
        </If>        
        <If condition={  this.state.value == 6 && this.state.value2 == 10}>
          <Then>
            <GithubDiscordServices/>
          </Then>
        </If>        
        <If condition={  this.state.value == 6 && this.state.value2 == 11}>
          <Then>
            <GithubGithubServices/>
          </Then>
        </If>
        
        
      </div>
      </div>
</div>

  



      );
    
};
}


export default SelectServices;