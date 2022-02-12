/*eslint eqeqeq:0*/
import React, {Component} from 'react';
import '../../styles/selectServices.css'
import Discord from '../../media/discorde.png';
import Pornhub from '../../media/Pornhub_Logo.jpg'
import { If, Then} from 'react-if-elseif-else-render';


class PornhubDiscordServices extends Component {

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

  <option value="1" className="Gmail">&#xf05e; Search Video by Title</option>
    <option value="2" className="Pornhub">&#xf05e; Search Gif by Title</option>
    <option value="3" className="Pornhub">&#xf05e; Search Video by Author</option>
    <option value="4" className="Weather">&#xf05e; Search Gif by Author</option>
    <option value="5" className="Weather">&#xf05e; Search Video by Category</option>
    <option value="11" className="Weather">&#xf05e; Search Gif by Category</option>
  </select>

</div>

<div class="boxi">
  <select onChange={this.divstatuse}>
  <option value="hide" selected className="nose">Select an Reaction ...</option>

  <option  value="6" className="Gmail">&#xf16e; Add Role</option>
  <option  value="7" className="Gmail">&#xf16e; Remove Role of User</option>
  <option  value="8" className="Gmail">&#xf16e; Send Message</option>
  <option  value="9" className="Gmail">&#xf16e; Rename an Channel</option>

  </select>

</div>
<If condition={  this.state.value == 1  && this.state.value2 == 6}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Video by Title in Pornhub, Add Role in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 1  && this.state.value2 == 7}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Video by Title in Pornhub, Remove Role of User in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-removerole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 1  && this.state.value2 == 8}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Video by Title in Pornhub, Send Message in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-sendmessage">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 1  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Video by Title in Pornhub, Rename an Channel in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-renamechannel">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5  && this.state.value2 == 10}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Pornhub} alt="gmail"/> 

                <h1 className="details">Search Video by Category in Pornhub, New Link Post to Pornhub</h1>

                <h2 className="subdetailes">Pornhub   +  Pornhub</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5  && this.state.value2 == 6}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Video by Category in Pornhub, Add Role in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newvideocategory-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5  && this.state.value2 == 7}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Video by Categoryin Pornhub, Remove Role of User in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newvideocategory-removerole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5  && this.state.value2 == 8}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Video by Category in Pornhub, Send Message in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newvideocategory-sendmessage">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 5  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Video by Category in Pornhub, Rename an Channel in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newvideocategory-renamechannel">Make a Area !</a></button>

            </div>
          </Then>
        </If>

        <If condition={  this.state.value == 5  && this.state.value2 == 10}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Pornhub} alt="gmail"/> 

                <h1 className="details">Search Video by Category in Pornhub, New Link Post to Pornhub</h1>

                <h2 className="subdetailes">Pornhub   +  Pornhub</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentuser-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 11  && this.state.value2 == 6}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Gif by Category in Pornhub, Add Role in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newgifcategory-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 11  && this.state.value2 == 7}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Video by Categoryin Pornhub, Remove Role of User in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newgifcategory-removerole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 11  && this.state.value2 == 8}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Gif by Category in Pornhub, Send Message in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newgifcategory-sendmessage">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 11  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Gif by Category in Pornhub, Rename an Channel in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newgifcategory-renamechannel">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 6}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Gif by Title in Pornhub, Add Role in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 7}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Gif by Title in Pornhub, Remove Role of User in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-removerole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 8}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Gif by Title in Pornhub, Send Message in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-sendmessage">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Gif by Title in Pornhub, Rename an Channel in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-renamechannel">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 2  && this.state.value2 == 10}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Pornhub} alt="gmail"/> 

                <h1 className="details">Search Gif by Title in Pornhub, New Link Post to Pornhub</h1>

                <h2 className="subdetailes">Pornhub   +  Pornhub</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newhotpost-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 6}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Video by Author in Pornhub, Add Role in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 7}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Video by Author in Pornhub, Remove Role of User in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-removerole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 8}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Video by Author in Pornhub, Send Message in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-sendmessage">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Video by Author in Pornhub, Rename an Channel in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-renamechannel">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 3  && this.state.value2 == 10}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Pornhub} alt="gmail"/> 

                <h1 className="details">Search Video by Author in Pornhub, New Link Post to Pornhub</h1>

                <h2 className="subdetailes">Pornhub   +  Pornhub</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newpostmatching-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 6}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Gif by Author in Pornhub, Add Role in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-addrole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 7}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Gif by Author in Pornhub, Remove Role of User in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-removerole">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 8}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Gif by Author in Pornhub, Send Message in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-sendmessage">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 9}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Discord} alt="gmail"/> 

                <h1 className="details">Search Gif by Author in Pornhub, Rename an Channel in Discord</h1>

                <h2 className="subdetailes">Pornhub   +  Discord</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-renamechannel">Make a Area !</a></button>

            </div>
          </Then>
        </If>
        <If condition={  this.state.value == 4  && this.state.value2 == 10}>
          <Then>
          <div className="cardi">
                <div className="container">

                <img className="weather" src={Pornhub} alt="gmail"/> 
                <img className="discord" src={Pornhub} alt="gmail"/> 

                <h1 className="details">Search Gif by Author in Pornhub, New Link Post to Pornhub</h1>

                <h2 className="subdetailes">Pornhub   +  Pornhub</h2>
                </div>
                <button type="submit" name="submit" className="tryite"><a className="sign-link" href="./newcommentmatching-linkpost">Make a Area !</a></button>

            </div>
          </Then>
        </If>
     
      </div>

  



      );
    
};
}


export default PornhubDiscordServices;