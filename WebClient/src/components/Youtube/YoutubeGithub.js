/*eslint eqeqeq:0*/
import React, {Component} from 'react';
import '../../styles/selectServices.css'
import Youtube from '../../media/youtube.png'
import Github from '../../media/github.png'
import { If, Then} from 'react-if-elseif-else-render';


class YoutubeGithubServices extends Component {

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

     
      

<div className="serviceje">
<h3 className="subsl">When this happens...</h3>
<h3 className="subsle">then do this !</h3>
<h3 className="subslo">.........<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>.........</h3>


<div class="box">
    
  <select onChange={this.divstatus}>
  <option value="hide" selected className="nose">Select an Action ...</option>

    <option value="1" className="Gmail">&#xf16a; New Video</option>
    <option value="2" className="Youtube">&#xf16a; New Video in Channel</option>
    <option value="4" className="Weather">&#xf16a; New Video in Playlist</option>
    <option value="5" className="Gmail">&#xf09b; New Repository</option>
    <option value="6" className="Youtube">&#xf09b; New Organization  </option>

    <option value="7" className="Reddit">&#xf09b; New Commit</option>
    <option value="8" className="Weather">&#xf09b; New Branch</option>
  </select>

</div>

<div class="boxi">
  <select onChange={this.divstatuse}>
  <option value="hide" selected className="nose">Select an Reaction ...</option>

  <option  value="9" className="Gmail">&#xf09b; Create Comment</option>
    <option value="10" className="Reddit">&#xf09b; Create Issue</option>
    <option value="11" className="Discord">&#xf09b; Delete Repository</option>

  </select>

</div>
<If condition={  this.state.value == 2  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Youtube} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Video in Channel in Youtube, Create Comment to Github</h1>

                <h2 className="subdetailes">Youtube   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newvideochan-deletebranch">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2 && this.state.value2 == 10 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Youtube} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Video in Channel in Youtube, Create Issue to Github</h1>

                <h2 className="subdetailes">Youtube   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newvideochan-createissue">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 2 && this.state.value2 == 11}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Youtube} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Video in Channel in Youtube, Delete Repository to Github</h1>

                <h2 className="subdetailes">Youtube   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newvideochan-createcomment">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 1  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Youtube} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Video in Youtube, Create Comment to Github</h1>

                <h2 className="subdetailes">Youtube   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newvideo-deletebranch">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 10 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Youtube} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Video in Youtube, Create Issue to Github</h1>

                <h2 className="subdetailes">Youtube   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newvideo-createissue">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 1 && this.state.value2 == 11}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Youtube} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Video in Youtube, Delete Repository to Github</h1>

                <h2 className="subdetailes">Youtube   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newvideo-createcomment">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
   
        <If condition={  this.state.value == 4  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Youtube} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Video in Playlist in Youtube, Create Comment to Github</h1>

                <h2 className="subdetailes">Youtube   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newvideoplaylist-deletebranch">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4 && this.state.value2 == 10 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Youtube} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Video in Playlist in Youtube, Create Issue to Github</h1>

                <h2 className="subdetailes">Youtube   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newvideoplaylist-createissue">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 4 && this.state.value2 == 11}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Youtube} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Video in Playlist in Youtube, Delete Repository to Github</h1>

                <h2 className="subdetailes">Youtube   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newvideoplaylist-createcomment">Make a Area !</a></button>

            </div> 
          </Then>
        </If>
        <If condition={  this.state.value == 5  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Repository in Github, Create Comment to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createrepo-deletebranch">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5 && this.state.value2 == 10 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Repository in Github, Create Issue to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createrepo-createissue">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 5 && this.state.value2 == 11 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Repository in Github, Delete Repository to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createrepo-createcomment">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
   

        <If condition={  this.state.value == 6  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Organization   in Github, Create Comment to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createorga-deletebranch">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 6 && this.state.value2 == 10 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Organization   in Github, Create Issue to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createorga-createissue">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 6 && this.state.value2 == 11 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Organization   in Github, Delete Repository to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createorga-createcomment">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 7  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Commit in Github, Create Comment to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createcommit-deletebranch">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 7 && this.state.value2 == 10 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Commit in Github, Create Issue to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createcommit-createissue">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 7 && this.state.value2 == 11 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Commit in Github, Delete Repository to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createcommit-createcomment">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 8  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Branch in Github, Create Comment to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createbranch-deletebranch">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 8 && this.state.value2 == 10 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Branch in Github, Create Issue to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createbranch-createissue">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
        <If condition={  this.state.value == 8 && this.state.value2 == 11 }>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Github} alt="gmail"/> 
                <img className="discord" src={Github} alt="gmail"/> 

                <h1 className="details">New Branch in Github, Delete Repository to Github</h1>

                <h2 className="subdetailes">Github   +  Github</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./createbranch-createcomment">Make a Area !</a></button>

            </div>          
            </Then>
        </If>
       
      </div>

  



      );
    
};
}


export default YoutubeGithubServices;