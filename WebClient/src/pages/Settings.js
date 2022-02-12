import React, { Component } from 'react';
import Menu from '../components/Menu';
import '../styles/settings.css'
import '../styles/selectServices.css'
import ChatBote from '../components/ChatBot';



class Settings extends Component {
    intervalID;

    state = {
        data: [],
    }

    componentDidMount() {
        this.getData();
    }

    componentWillUnmount() {
        clearTimeout(this.intervalID);
    }

    getData = () => {
        var username = sessionStorage.getItem("name");

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json; charset=UTF-8");

        var raw = JSON.stringify({ "username": username });

        console.log(raw)
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };

        fetch("http://localhost:8080/dashboard/list", requestOptions)
            .then(response => response.json())
            .then(result => {
                //window.location.href = link;
                //window.location.href = link;
                console.log(result[0]);
                this.intervalID = setTimeout(this.getData.bind(this), 10000);
                console.log(this.intervalID)
                let array = [];
                for (let i = 0; i < result.length; i++) {
                    array.push(
                        {
                            action: result[i].action,
                            reaction: result[i].reaction,
                            placeholder: result[i].placeholder,
                            run: result[i].running,
                            serviceAction: result[i].serviceAction,
                            serviceReaction: result[i].serviceReaction,
                        }
                    );
                }
                this.setState({ data: array });
                console.log(this.state.data);
            });
    };

    boxSure(placeholder) {
        var result = window.confirm('Are you sure you want to delete this area ?');
        console.log(result)

        var link = '/settings';
        if (result === true) {

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json; charset=UTF-8");

            var raw = JSON.stringify({ "username": sessionStorage.getItem("name"), "placeholder": placeholder });
            var requestOptions = {
                method: 'DELETE',
                headers: myHeaders,
                body: raw,
            };

            fetch("http://localhost:8080/dashboard", requestOptions)

                .then(response => {
                    response.json();

                    if (response.status === 200) {
                        alert('Area deleted !');
                        window.location.href = link;
                    }
                })
                .catch(error => console.log('error', error));
        } else {
            console.log("Annulé");
        }
    }

    StopArea(placeholder) {

        var link = '/settings';

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json; charset=UTF-8");

        var raw = JSON.stringify({ "username": sessionStorage.getItem("name"), "placeholder": placeholder });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };

        fetch("http://localhost:8080/dashboard/stop", requestOptions)

            .then(response => {
                response.json();

                if (response.status === 200) {
                    alert('Area stoped !');
                    window.location.href = link;
                }
            })
            .catch(error => console.log('error', error));
    }

    ActivateArea(placeholder) {

        var link = '/settings';

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json; charset=UTF-8");

        var raw = JSON.stringify({ "username": sessionStorage.getItem("name"), "placeholder": placeholder });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
        };

        fetch("http://localhost:8080/dashboard/execute", requestOptions)

            .then(response => {
                response.json();

                if (response.status === 200) {
                    alert('Area activated !');
                    window.location.href = link;
                }
            })
            .catch(error => console.log('error', error));
    }

    ModifyArea(d) {
        var link = '/';
        sessionStorage.setItem('placeholder', d.placeholder);
        sessionStorage.setItem('modify', "true");
        ///////// BAD WEATHER //////////////
        if (d.action === "getBadWeather") {
            if (d.reaction === "addRole")
                link = '/itisraining-addrole'
            if (d.reaction === "removeRole")
                link = '/itisraining-removerole'
            if (d.reaction === "sendMessage")
                link = '/itisraining-sendmessage'
            if (d.reaction === "renameChannel")
                link = '/itisraining-renamechan'
            if (d.reaction === "sendMail")
                link = '/itisraining-sendmail'
            if (d.reaction === "respondMail")
                link = '/itisraining-mailresponse'
            if (d.reaction === "postMessage")
                link = '/itisraining-linkpost'
            if (d.reaction === "createIssue")
                link = '/itisraining-createissue'
            if (d.reaction === "createComment")
                link = '/itisraining-createcomment'
            if (d.reaction === "deleteRepo")
                link = '/itisraining-deletebranch'
        }
        //////////// GET WEATHER //////////////
        if (d.action === "getWeather") {
            if (d.reaction === "addRole")
                link = '/weatherchange-addrole'
            if (d.reaction === "removeRole")
                link = '/weatherchange-removerole'
            if (d.reaction === "sendMessage")
                link = '/weatherchange-sendmessage'
            if (d.reaction === "renameChannel")
                link = '/weatherchange-renamechan'
            if (d.reaction === "sendMail")
                link = '/weatherchange-sendmail'
            if (d.reaction === "respondMail")
                link = '/weatherchange-mailresponse'
            if (d.reaction === "postMessage")
                link = '/weatherchange-linkpost'
            if (d.reaction === "createIssue")
                link = '/weatherchange-createissue'
            if (d.reaction === "createComment")
                link = '/weatherchange-createcomment'
            if (d.reaction === "deleteRepo")
                link = '/weatherchange-deletebranch'
        }
        
        ///////////// SEARCH VIDEO BY TITLE /////////////////
        if (d.action === "searchVideoByTitle") {
            if (d.reaction === "addRole")
                link = '/newcommentuser-addrole'
            if (d.reaction === "removeRole")
                link = '/newcommentuser-removerole'
            if (d.reaction === "sendMessage")
                link = '/newcommentuser-sendmessage'
            if (d.reaction === "renameChannel")
                link = '/newcommentuser-renamechan'
            if (d.reaction === "sendMail")
                link = '/newcommentuser-sendmail'
            if (d.reaction === "respondMail")
                link = '/newcommentuser-mailresponse'
            if (d.reaction === "postMessage")
                link = '/newcommentuser-linkpost'
            if (d.reaction === "createIssue")
                link = '/newcommentuser-createissue'
            if (d.reaction === "createComment")
                link = '/newcommentuser-createcomment'
            if (d.reaction === "deleteRepo")
                link = '/newcommentuser-deletebranch'
        }

        ///////////// SEARCH GIF BY TITLE /////////////////
        if (d.action === "searchGifByTitle") {
            if (d.reaction === "addRole")
                link = '/newhotpost-addrole'
            if (d.reaction === "removeRole")
                link = '/newhotpost-removerole'
            if (d.reaction === "sendMessage")
                link = '/newhotpost-sendmessage'
            if (d.reaction === "renameChannel")
                link = '/newhotpost-renamechan'
            if (d.reaction === "sendMail")
                link = '/newhotpost-sendmail'
            if (d.reaction === "respondMail")
                link = '/newhotpost-mailresponse'
            if (d.reaction === "postMessage")
                link = '/newhotpost-linkpost'
            if (d.reaction === "createIssue")
                link = '/newhotpost-createissue'
            if (d.reaction === "createComment")
                link = '/newhotpost-createcomment'
            if (d.reaction === "deleteRepo")
                link = '/newhotpost-deletebranch'
        }

        ///////////// SEARCH VIDEO BY AUTHOR /////////////////
        if (d.action === "searchVideoByAuthor") {
            if (d.reaction === "addRole")
                link = '/newpostmatching-addrole'
            if (d.reaction === "removeRole")
                link = '/newpostmatching-removerole'
            if (d.reaction === "sendMessage")
                link = '/newpostmatching-sendmessage'
            if (d.reaction === "renameChannel")
                link = '/newpostmatching-renamechan'
            if (d.reaction === "sendMail")
                link = '/newpostmatching-sendmail'
            if (d.reaction === "respondMail")
                link = '/newpostmatching-mailresponse'
            if (d.reaction === "postMessage")
                link = '/newpostmatching-linkpost'
            if (d.reaction === "createIssue")
                link = '/newpostmatching-createissue'
            if (d.reaction === "createComment")
                link = '/newpostmatching-createcomment'
            if (d.reaction === "deleteRepo")
                link = '/newpostmatching-deletebranch'
        }

        ///////////// SEARCH GIF BY AUTHOR /////////////////
        if (d.action === "searchGifByAuthor") {
            if (d.reaction === "addRole")
                link = '/newcommentmatching-addrole'
            if (d.reaction === "removeRole")
                link = '/newcommentmatching-removerole'
            if (d.reaction === "sendMessage")
                link = '/newcommentmatching-sendmessage'
            if (d.reaction === "renameChannel")
                link = '/newcommentmatching-renamechan'
            if (d.reaction === "sendMail")
                link = '/newcommentmatching-sendmail'
            if (d.reaction === "respondMail")
                link = '/newcommentmatching-mailresponse'
            if (d.reaction === "postMessage")
                link = '/newcommentmatching-linkpost'
            if (d.reaction === "createIssue")
                link = '/newcommentmatching-createissue'
            if (d.reaction === "createComment")
                link = '/newcommentmatching-createcomment'
            if (d.reaction === "deleteRepo")
                link = '/newcommentmatching-deletebranch'
        }

        ///////////// SEARCH VIDEO BY CATEGORY /////////////////
        if (d.action === "searchVideoByCategory") {
            if (d.reaction === "addRole")
                link = '/newvideocategory-addrole'
            if (d.reaction === "removeRole")
                link = '/newvideocategory-removerole'
            if (d.reaction === "sendMessage")
                link = '/newvideocategory-sendmessage'
            if (d.reaction === "renameChannel")
                link = '/newvideocategory-renamechan'
            if (d.reaction === "sendMail")
                link = '/newvideocategory-sendmail'
            if (d.reaction === "respondMail")
                link = '/newvideocategory-mailresponse'
            if (d.reaction === "postMessage")
                link = '/newvideocategory-linkpost'
            if (d.reaction === "createIssue")
                link = '/newvideocategory-createissue'
            if (d.reaction === "createComment")
                link = '/newvideocategory-createcomment'
            if (d.reaction === "deleteRepo")
                link = '/newvideocategory-deletebranch'
        }

        ///////////// SEARCH GIF BY CATEGORY /////////////////
        if (d.action === "searchGifByCategory") {
            if (d.reaction === "addRole")
                link = '/newgifcategory-addrole'
            if (d.reaction === "removeRole")
                link = '/newgifcategory-removerole'
            if (d.reaction === "sendMessage")
                link = '/newgifcategory-sendmessage'
            if (d.reaction === "renameChannel")
                link = '/newgifcategory-renamechan'
            if (d.reaction === "sendMail")
                link = '/newgifcategory-sendmail'
            if (d.reaction === "respondMail")
                link = '/newgifcategory-mailresponse'
            if (d.reaction === "postMessage")
                link = '/newgifcategory-linkpost'
            if (d.reaction === "createIssue")
                link = '/newgifcategory-createissue'
            if (d.reaction === "createComment")
                link = '/newgifcategory-createcomment'
            if (d.reaction === "deleteRepo")
                link = '/newgifcategory-deletebranch'
        }


        ///////////// SEARCH ARTIST /////////////////
        if (d.action === "searchArtists") {
            if (d.reaction === "addRole")
                link = '/searchartists-addrole'
            if (d.reaction === "removeRole")
                link = '/searchartists-removerole'
            if (d.reaction === "sendMessage")
                link = '/searchartists-sendmessage'
            if (d.reaction === "renameChannel")
                link = '/searchartists-renamechan'
            if (d.reaction === "sendMail")
                link = '/searchartists-sendmail'
            if (d.reaction === "respondMail")
                link = '/searchartists-mailresponse'
            if (d.reaction === "postMessage")
                link = '/searchartists-linkpost'
            if (d.reaction === "createIssue")
                link = '/searchartists-createissue'
            if (d.reaction === "createComment")
                link = '/searchartists-createcomment'
            if (d.reaction === "deleteRepo")
                link = '/searchartists-deletebranch'
        }


        ///////////// SEARCH PLAYLIST /////////////////
        if (d.action === "searchPlaylists") {
            if (d.reaction === "addRole")
                link = '/searchplaylists-addrole'
            if (d.reaction === "removeRole")
                link = '/searchplaylists-removerole'
            if (d.reaction === "sendMessage")
                link = '/searchplaylists-sendmessage'
            if (d.reaction === "renameChannel")
                link = '/searchplaylists-renamechan'
            if (d.reaction === "sendMail")
                link = '/searchplaylists-sendmail'
            if (d.reaction === "respondMail")
                link = '/searchplaylists-mailresponse'
            if (d.reaction === "postMessage")
                link = '/searchplaylists-linkpost'
            if (d.reaction === "createIssue")
                link = '/searchplaylists-createissue'
            if (d.reaction === "createComment")
                link = '/searchplaylists-createcomment'
            if (d.reaction === "deleteRepo")
                link = '/searchplaylists-deletebranch'
        }


        ///////////// SEARCH TRACK /////////////////
        if (d.action === "searchTracks") {
            if (d.reaction === "addRole")
                link = '/searchtracks-addrole'
            if (d.reaction === "removeRole")
                link = '/searchtracks-removerole'
            if (d.reaction === "sendMessage")
                link = '/searchtracks-sendmessage'
            if (d.reaction === "renameChannel")
                link = '/searchtracks-renamechan'
            if (d.reaction === "sendMail")
                link = '/searchtracks-sendmail'
            if (d.reaction === "respondMail")
                link = '/searchtracks-mailresponse'
            if (d.reaction === "postMessage")
                link = '/searchtracks-linkpost'
            if (d.reaction === "createIssue")
                link = '/searchtracks-createissue'
            if (d.reaction === "createComment")
                link = '/searchtracks-createcomment'
            if (d.reaction === "deleteRepo")
                link = '/searchtracks-deletebranch'
        }

        ///////////// NEW VIDEO /////////////////
        if (d.action === "newVideoInPopular") {
            if (d.reaction === "addRole")
                link = '/newvideo-addrole'
            if (d.reaction === "removeRole")
                link = '/newvideo-removerole'
            if (d.reaction === "sendMessage")
                link = '/newvideo-sendmessage'
            if (d.reaction === "renameChannel")
                link = '/newvideo-renamechan'
            if (d.reaction === "sendMail")
                link = '/newvideo-sendmail'
            if (d.reaction === "respondMail")
                link = '/newvideo-mailresponse'
            if (d.reaction === "postMessage")
                link = '/newvideo-linkpost'
            if (d.reaction === "createIssue")
                link = '/newvideo-createissue'
            if (d.reaction === "createComment")
                link = '/newvideo-createcomment'
            if (d.reaction === "deleteRepo")
                link = '/newvideo-deletebranch'
        }
        //////////////NEW VIDEO IN CHANNEL//////////////////
        if (d.action === "newVideoInChannel") {
            if (d.reaction === "addRole")
                link = '/newvideochan-addrole'
            if (d.reaction === "removeRole")
                link = '/newvideochan-removerole'
            if (d.reaction === "sendMessage")
                link = '/newvideochan-sendmessage'
            if (d.reaction === "renameChannel")
                link = '/newvideochan-renamechan'
            if (d.reaction === "sendMail")
                link = '/newvideochan-sendmail'
            if (d.reaction === "respondMail")
                link = '/newvideochan-mailresponse'
            if (d.reaction === "postMessage")
                link = '/newvideochan-linkpost'
            if (d.reaction === "createIssue")
                link = '/newvideochan-createissue'
            if (d.reaction === "createComment")
                link = '/newvideochan-createcomment'
            if (d.reaction === "deleteRepo")
                link = '/newvideochan-deletebranch'
        }
        ////////////NEW VIDEO IN PLAYLIST///////////////
        if (d.action === "newVideoInPlaylist") {
            if (d.reaction === "addRole")
                link = '/newvideoplaylist-addrole'
            if (d.reaction === "removeRole")
                link = '/newvideoplaylist-removerole'
            if (d.reaction === "sendMessage")
                link = '/newvideoplaylist-sendmessage'
            if (d.reaction === "renameChannel")
                link = '/newvideoplaylist-renamechan'
            if (d.reaction === "sendMail")
                link = '/newvideoplaylist-sendmail'
            if (d.reaction === "respondMail")
                link = '/newvideoplaylist-mailresponse'
            if (d.reaction === "postMessage")
                link = '/newvideoplaylist-linkpost'
            if (d.reaction === "createIssue")
                link = '/newvideoplaylist-createissue'
            if (d.reaction === "createComment")
                link = '/newvideoplaylist-createcomment'
            if (d.reaction === "deleteRepo")
                link = '/newvideoplaylist-deletebranch'
        }
        ////////////NEW EMAIL/////////////
        if (d.action === "getMail") {
            if (d.reaction === "addRole")
                link = '/newmail-addrole'
            if (d.reaction === "removeRole")
                link = '/newmail-removerole'
            if (d.reaction === "sendMessage")
                link = '/newmail-sendmessage'
            if (d.reaction === "renameChannel")
                link = '/newmail-renamechan'
            if (d.reaction === "sendMail")
                link = '/newmail-sendmail'
            if (d.reaction === "respondMail")
                link = '/newmail-mailresponse'
            if (d.reaction === "postMessage")
                link = '/newmail-linkpost'
            if (d.reaction === "createIssue")
                link = '/newmail-createissue'
            if (d.reaction === "createComment")
                link = '/newmail-createcomment'
            if (d.reaction === "deleteRepo")
                link = '/newmail-deletebranch'
        }
        ///////////// CREATE REPO ////////////////
        if (d.action === "getNewRepo") {
            if (d.reaction === "addRole")
                link = '/createrepo-addrole'
            if (d.reaction === "removeRole")
                link = '/createrepo-removerole'
            if (d.reaction === "sendMessage")
                link = '/createrepo-sendmessage'
            if (d.reaction === "renameChannel")
                link = '/createrepo-renamechan'
            if (d.reaction === "sendMail")
                link = '/createrepo-sendmail'
            if (d.reaction === "respondMail")
                link = '/createrepo-mailresponse'
            if (d.reaction === "postMessage")
                link = '/createrepo-linkpost'
            if (d.reaction === "createIssue")
                link = '/createrepo-createissue'
            if (d.reaction === "createComment")
                link = '/createrepo-createcomment'
            if (d.reaction === "deleteRepo")
                link = '/createrepo-deletebranch'
        }
        ///////////// NEW ORGANIZATION ////////////////
        if (d.action === "getOrganization") {
            if (d.reaction === "addRole")
                link = '/createorga-addrole'
            if (d.reaction === "removeRole")
                link = '/createorga-removerole'
            if (d.reaction === "sendMessage")
                link = '/createorga-sendmessage'
            if (d.reaction === "renameChannel")
                link = '/createorga-renamechan'
            if (d.reaction === "sendMail")
                link = '/createorga-sendmail'
            if (d.reaction === "respondMail")
                link = '/createorga-mailresponse'
            if (d.reaction === "postMessage")
                link = '/createorga-linkpost'
            if (d.reaction === "createIssue")
                link = '/createorga-createissue'
            if (d.reaction === "createComment")
                link = '/createorga-createcomment'
            if (d.reaction === "deleteRepo")
                link = '/createorga-deletebranch'
        }
        ///////////// NEW BRANCH ////////////////
        if (d.action === "getNewBranch") {
            if (d.reaction === "addRole")
                link = '/createbranch-addrole'
            if (d.reaction === "removeRole")
                link = '/createbranch-removerole'
            if (d.reaction === "sendMessage")
                link = '/createbranch-sendmessage'
            if (d.reaction === "renameChannel")
                link = '/createbranch-renamechan'
            if (d.reaction === "sendMail")
                link = '/createbranch-sendmail'
            if (d.reaction === "respondMail")
                link = '/createbranch-mailresponse'
            if (d.reaction === "postMessage")
                link = '/createbranch-linkpost'
            if (d.reaction === "createIssue")
                link = '/createbranch-createissue'
            if (d.reaction === "createComment")
                link = '/createbranch-createcomment'
            if (d.reaction === "deleteRepo")
                link = '/createbranch-deletebranch'
        }
        ///////////// NEW COMMIT ///////////////
        if (d.action === "getCommit") {
            if (d.reaction === "addRole")
                link = '/createcommit-addrole'
            if (d.reaction === "removeRole")
                link = '/createcommit-removerole'
            if (d.reaction === "sendMessage")
                link = '/createcommit-sendmessage'
            if (d.reaction === "renameChannel")
                link = '/createcommit-renamechan'
            if (d.reaction === "sendMail")
                link = '/createcommit-sendmail'
            if (d.reaction === "respondMail")
                link = '/createcommit-mailresponse'
            if (d.reaction === "postMessage")
                link = '/createcommit-linkpost'
            if (d.reaction === "createIssue")
                link = '/createcommit-createissue'
            if (d.reaction === "createComment")
                link = '/createcommit-createcomment'
            if (d.reaction === "deleteRepo")
                link = '/createcommit-deletebranch'
        }
        window.location.href = link;
    }

    CardList = ({ datas }) => {
        const cardsArray = datas.map(d => (

            <div className="cardu">
                <div className="container">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {d.run === "true" ? <input value="Stop area" onClick={() => { this.StopArea(d.placeholder) }} className="signin-btn" style={{ marginTop: 0, marginBottom: 100 }}></input> :
                        <input value="Activate area" onClick={() => { this.ActivateArea(d.placeholder) }} className="signin-btn" style={{ marginTop: 0, marginBottom: 100 }}></input>}
                    <input value="Modify Area" onClick={() => { this.ModifyArea(d) }} className="signin-btn" style={{ marginTop: 0, marginBottom: 100 }}></input>
                    <a href="http://localhost:8081/" onClick={() => { this.boxSure(d.placeholder) }} className="trash"> <i class="fa fa-trash" aria-hidden="true"></i></a>
                    <h1 className="action">Action</h1>
                    <h1 className="trigger">{d.serviceAction} </h1>
                    <h1 className="account">{d.action}</h1>
                    <h1 className="action">Reaction</h1>
                    <h1 className="trigger">{d.serviceReaction}</h1>
                    <h1 className="account">{d.reaction}</h1>
                </div>
            </div >
        ));

        return (
            <div>
                {cardsArray}
            </div>
        );
    };

    render() {
        return (
            <div className="mid-dashboard" >
                <Menu />
                <ChatBote/>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="areas">
                    <h1>Your own Areas  !</h1>
                </div>
                
                <this.CardList datas={this.state.data} />
            </div >
        )
    }

}

export default Settings;