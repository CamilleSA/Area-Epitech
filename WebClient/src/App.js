import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import Settings from './pages/Settings';
import SignIn from './pages/Sign-in';
import SignUp from './pages/Sign-up';

import NewMailSendMail from './pages/Gmail/NewMail/NewMailSendMail';
import NewMailResponse from './pages/Gmail/NewMail/NewMailResponse';


import NewMailAddRole from './pages/Gmail/NewMail/NewMailAddRole';
import NewMailRemoveRole from './pages/Gmail/NewMail/NewMailRemoveRole';
import NewMailSendMessage from './pages/Gmail/NewMail/NewMailSendMessage';
import NewMailRenameChan from './pages/Gmail/NewMail/NewMailRenameChan';



import NewMailDelBranch from './pages/Gmail/NewMail/NewMailDelBranch';
import NewMailCreateIssue from './pages/Gmail/NewMail/NewMailCreateIssue';
import NewMailCreateComment from './pages/Gmail/NewMail/NewMailCreateComment';




import NewCommentUserLinkPost from './pages/Reddit/NewCommentByUser/NewCommentUserLinkPost';
import NewHotPostLinkPost from './pages/Reddit/NewHotPost/NewHotPostLinkPost';
import NewPostMatchingLinkPost from './pages/Reddit/NewPostMatching/NewPostMatchingNewLink';
import NewCommentMatchingLinkPost from './pages/Reddit/NewCommentMatching/NewCommentMatchingNewLink';

import NewCommentUserSendMail from './pages/Reddit/NewCommentByUser/NewCommentUserSendMail';
import NewCommentUserMailResponse from './pages/Reddit/NewCommentByUser/NewCommentUserMailResponse';


import NewCommentMatchingSendMail from './pages/Reddit/NewCommentMatching/NewCommentMatchingSendMail';
import NewCommentMatchingMailResponse from './pages/Reddit/NewCommentMatching/NewCommentMatchingMailResponse';

import NewPostMatchingSendMail from './pages/Reddit/NewPostMatching/NewPostMatchingSendMail';
import NewPostMatchingMailResponse from './pages/Reddit/NewPostMatching/NewPostMatchingMailResponse';

import NewHotPostSendMail from './pages/Reddit/NewHotPost/NewHotPostSendMail';
import NewHotPostMailResponse from './pages/Reddit/NewHotPost/NewHotPostMailResponse';

import NewCommentUserDelBranch from './pages/Reddit/NewCommentByUser/NewCommentUserDelBranch';
import NewCommentUserCreateIssue from './pages/Reddit/NewCommentByUser/NewCommentUserCreateIssue';
import NewCommentUserCreateComment from './pages/Reddit/NewCommentByUser/NewCommentUserCreateComment';

import NewCommentMatchingDelBranch from './pages/Reddit/NewCommentMatching/NewCommentMatchingDelBranch';
import NewCommentMatchingCreateIssue from './pages/Reddit/NewCommentMatching/NewCommentMatchingCreateIssue';
import NewCommentMatchingCreateComment from './pages/Reddit/NewCommentMatching/NewCommentMatchingCreateComment';

import NewPostMatchingDelBranch from './pages/Reddit/NewPostMatching/NewPostMatchingDelBranch';
import NewPostMatchingCreateIssue from './pages/Reddit/NewPostMatching/NewPostMatchingCreateIssue';
import NewPostMatchingCreateComment from './pages/Reddit/NewPostMatching/NewPostMatchingCreateComment';

import NewHotPostDelBranch from './pages/Reddit/NewHotPost/NewHotPostDelBranch';
import NewHotPostCreateIssue from './pages/Reddit/NewHotPost/NewHotPostCreateIssue';
import NewHotPostCreateComment from './pages/Reddit/NewHotPost/NewHotPostCreateComment';

import NewCommentUserAddRole from './pages/Reddit/NewCommentByUser/NewCommentUserAddRole';
import NewCommentUserRemoveRole from './pages/Reddit/NewCommentByUser/NewCommentUserRemoveRole';
import NewCommentUserSendMessage from './pages/Reddit/NewCommentByUser/NewCommentUserSendMessage';
import NewCommentUserRenameChan from './pages/Reddit/NewCommentByUser/NewCommentUserRenameChan';

import NewCommentMatchingAddRole from './pages/Reddit/NewCommentMatching/NewCommentMatchingAddRole';
import NewCommentMatchingRemoveRole from './pages/Reddit/NewCommentMatching/NewCommentMatchingRemoveRole';
import NewCommentMatchingSendMessage from './pages/Reddit/NewCommentMatching/NewCommentMatchingSendMessage';
import NewCommentMatchingRenameChan from './pages/Reddit/NewCommentMatching/NewCommentMatchingRenameChan';

import NewPostMatchingAddRole from './pages/Reddit/NewPostMatching/NewPostMatchingAddRole';
import NewPostMatchingRemoveRole from './pages/Reddit/NewPostMatching/NewPostMatchingRemoveRole';
import NewPostMatchingSendMessage from './pages/Reddit/NewPostMatching/NewPostMatchingSendMessage';
import NewPostMatchingRenameChan from './pages/Reddit/NewPostMatching/NewPostMatchingRenameChan';

import NewHotPostAddRole from './pages/Reddit/NewHotPost/NewHotPostAddRole';
import NewHotPostRemoveRole from './pages/Reddit/NewHotPost/NewHotPostRemoveRole';
import NewHotPostSendMessage from './pages/Reddit/NewHotPost/NewHotPostSendMessage';
import NewHotPostRenameChan from './pages/Reddit/NewHotPost/NewHotPostRenameChan';


import CreateRepositoryDelBranch from './pages/Github/CreateRepository/CreateRepositoryDeleteBranch';
import CreateRepositoryCreateIssue from './pages/Github/CreateRepository/CreateRepositoryCreateIssue';
import CreateRepositoryCreateComment from './pages/Github/CreateRepository/CreateRepositoryCreateComment';

import CreateOrganisationDelBranch from './pages/Github/CreateOrganisation/CreateOrganisationDelBranch';
import CreateOrganisationCreateIssue from './pages/Github/CreateOrganisation/CreateOrganisationCreateIssue';
import CreateOrganisationCreateComment from './pages/Github/CreateOrganisation/CreateOrganisationCreateComment';

import CreateCommitDelBranch from './pages/Github/CreateCommit/CreateCommitDelBranch';
import CreateCommitCreateIssue from './pages/Github/CreateCommit/CreateCommitCreateIssue';
import CreateCommitCreateComment from './pages/Github/CreateCommit/CreateCommitCreateComment';

import CreateBranchDelBranch from './pages/Github/CreateBranch/CreateBranchDelBranch';
import CreateBranchCreateIssue from './pages/Github/CreateBranch/CreateBranchCreateIssue';
import CreateBranchCreateComment from './pages/Github/CreateBranch/CreateBranchCreateComment';

import CreateBranchAddRole from './pages/Github/CreateBranch/CreateBranchAddRole';
import CreateBranchRemoveRole from './pages/Github/CreateBranch/CreateBranchRemoveRole';
import CreateBranchSendMessage from './pages/Github/CreateBranch/CreateBranchSendMessage';
import CreateBranchRenameChan from './pages/Github/CreateBranch/CreateBranchRenameChan';

import CreateCommitAddRole from './pages/Github/CreateCommit/CreateCommitAddRole';
import CreateCommitRemoveRole from './pages/Github/CreateCommit/CreateCommitRemoveRole';
import CreateCommitSendMessage from './pages/Github/CreateCommit/CreateCommitSendMessage';
import CreateCommitRenameChan from './pages/Github/CreateCommit/CreateCommitRenameChan';

import CreateOrgaAddRole from './pages/Github/CreateOrganisation/CreateOrganisationAddRole';
import CreateOrganisationRemoveRole from './pages/Github/CreateOrganisation/CreateOrganisationRemoveRole';
import CreateOrganisationSendMessage from './pages/Github/CreateOrganisation/CreateOrganisationSendMessage';
import CreateOrganisationRenameChan from './pages/Github/CreateOrganisation/CreateOrganisationRenameChan';

import CreateRepositoryAddRole from './pages/Github/CreateRepository/CreateRepositoryAddRole';
import CreateRepositoryRemoveRole from './pages/Github/CreateRepository/CreateRepositoryRemoveRole';
import CreateRepositorySendMessage from './pages/Github/CreateRepository/CreateRepositorySendMessage';
import CreateRepositoryRenameChan from './pages/Github/CreateRepository/CreateRepositoryRenameChan';

import CreateBranchSendMail from './pages/Github/CreateBranch/CreateBranchSendMail';

import CreateBranchMailResponse from './pages/Github/CreateBranch/CreateBranchMailResponse';

import CreateCommitSendMail from './pages/Github/CreateCommit/CreateCommitSendMail';
import CreateCommitMailResponse from './pages/Github/CreateCommit/CreateCommitMailResponse';

import CreateOrganisationSendMail from './pages/Github/CreateOrganisation/CreateOrganisationSendMail';
import CreateOrganisationMailResponse from './pages/Github/CreateOrganisation/CreateOrganisationMailResponse';

import CreateRepositorySendMail from './pages/Github/CreateRepository/CreateRepositorySendMail';
import CreateRepositoryMailResponse from './pages/Github/CreateRepository/CreateRepositoryMailResponse';

import CreateRepositoryLinkPost from './pages/Github/CreateRepository/CreateRepositoryLinkPost';
import CreateOrganisationLinkPost from './pages/Github/CreateOrganisation/CreateOrganisationLinkPost';
import CreateCommitLinkPost from './pages/Github/CreateCommit/CreateCommitLinkPost';
import CreateBranchLinkPost from './pages/Github/CreateBranch/CreateBranchLinkPost';

import ItIsRainingSendMail from './pages/Weather/ItIsRaining/ItIsRainingSendMail';
import ItIsRainingMailResponse from './pages/Weather/ItIsRaining/ItIsRainingMailResponse';

import WeatherChangeSendMail from './pages/Weather/WeatherChange/WeatherChangeSendMail';
import WeatherChangeMailResponse from './pages/Weather/WeatherChange/WeatherChangeMailResponse';

import ItIsRainingAddRole from './pages/Weather/ItIsRaining/ItIsRainingAddRole';
import ItIsRainingRemoveRole from './pages/Weather/ItIsRaining/ItIsRainingRemoveRole';
import ItIsRainingSendMessage from './pages/Weather/ItIsRaining/ItIsRainingSendMessage';
import ItIsRainingRenameChan from './pages/Weather/ItIsRaining/ItIsRainingRenameChan';

import WeatherChangeAddRole from './pages/Weather/WeatherChange/WeatherChangeAddRole';
import WeatherChangeRemoveRole from './pages/Weather/WeatherChange/WeatherChangeRemoveUser';
import WeatherChangeSendMessage from './pages/Weather/WeatherChange/WeatherChangeSendMessage';
import WeatherChangeRenameChan from './pages/Weather/WeatherChange/WeatherChangeRenameChan';
import WeatherChangeLinkPost from './pages/Weather/WeatherChange/WeatherChangeLinkPost';

import ItIsRainingDelBranch from './pages/Weather/ItIsRaining/ItIsRainingDelBranch';
import ItIsRainingCreateIssue from './pages/Weather/ItIsRaining/ItIsRainingCreateIssue';
import ItIsRainingCreateComment from './pages/Weather/ItIsRaining/ItIsRainingCreateComment';

import WeatherChangeDelBranch from './pages/Weather/WeatherChange/WeatherChangeDelBranch';
import WeatherChangeCreateIssue from './pages/Weather/WeatherChange/WeatherChangeCreateIssue';
import WeatherChangeCreateComment from './pages/Weather/WeatherChange/WeatherChangeCreateComment';

import ItIsRainingLinkPost from './pages/Weather/ItIsRaining/ItIsRainingLinkPost';

import NewVideoSendMail from './pages/Youtube/NewVideo/NewVideoSendMail';
import NewVideoMailResponse from './pages/Youtube/NewVideo/NewVideoMailResponse';

import NewVideoChanSendMail from './pages/Youtube/NewVideoInChannel/NewVideoChanSendMail';
import NewVideoChanMailResponse from './pages/Youtube/NewVideoInChannel/NewVideoChanMailResponse';

import NewVideoPlaylistSendMail from './pages/Youtube/NewVideoInPlaylist/NewVideoPlaylistSendMail';
import NewVideoPlaylistMailResponse from './pages/Youtube/NewVideoInPlaylist/NewVideoPlaylistMailResponse';

import NewVideoLinkPost from './pages/Youtube/NewVideo/NewVideoLinkPost';
import NewVideoChanLinkPost from './pages/Youtube/NewVideoInChannel/NewVideoChanLinkPost';
import NewVideoPlaylistLinkPost from './pages/Youtube/NewVideoInPlaylist/NewVideoPlaylistLinkPost';

import NewVideoAddRole from './pages/Youtube/NewVideo/NewVideoAddRole';
import NewVideoRemoveRole from './pages/Youtube/NewVideo/NewVideoRemoveRole';
import NewVideoSendMessage from './pages/Youtube/NewVideo/NewVideoSendMessage';
import NewVideoRenameChan from './pages/Youtube/NewVideo/NewVideoRenameChan';

import NewVideoChanAddRole from './pages/Youtube/NewVideoInChannel/NewVideoChanAddRole';
import NewVideoChanRemoveRole from './pages/Youtube/NewVideoInChannel/NewVideoChanRemoveRole';
import NewVideoChanSendMessage from './pages/Youtube/NewVideoInChannel/NewVideoChanSendMessage';
import NewVideoChanRenameChan from './pages/Youtube/NewVideoInChannel/NewVideoChanRenameChan';

import NewVideoPlaylistAddRole from './pages/Youtube/NewVideoInPlaylist/NewVideoPlaylistAddRole';
import NewVideoPlaylistRemoveRole from './pages/Youtube/NewVideoInPlaylist/NewVideoPlaylistRemoveRole';
import NewVideoPlaylistSendMessage from './pages/Youtube/NewVideoInPlaylist/NewVideoPlaylistSendMessage';
import NewVideoPlaylistRenameChan from './pages/Youtube/NewVideoInPlaylist/NewVideoPlaylistRenameChan';

import NewVideoDelBranch from './pages/Youtube/NewVideo/NewVideoDelBranch';
import NewVideoCreateIssue from './pages/Youtube/NewVideo/NewVideoCreateIssue';
import NewVideoCreateComment from './pages/Youtube/NewVideo/NewVideoCreateComment';


import NewVideoChanDelBranch from './pages/Youtube/NewVideoInChannel/NewVideoChanDelBranch';
import NewVideoChanCreateIssue from './pages/Youtube/NewVideoInChannel/NewVideoChanCreateIssue';
import NewVideoChanCreateComment from './pages/Youtube/NewVideoInChannel/NewVideoChanCreateComment';

import NewVideoPlaylistDelBranch from './pages/Youtube/NewVideoInPlaylist/NewVideoPlaylistDelBranch';
import NewVideoPlaylistCreateIssue from './pages/Youtube/NewVideoInPlaylist/NewVideoPlaylistCreateIssue';
import NewVideoPlaylistCreateComment from './pages/Youtube/NewVideoInPlaylist/NewVideoPlaylistCreateComment';
import NewMailLinkPost from './pages/Gmail/NewMail/NewMailLinkPost';
import NewVideoMatchingLinkPost from './pages/Reddit/NewVideoByCategory/NewPostMatchingNewLink';
import NewVideoMatchingSendMail from './pages/Reddit/NewVideoByCategory/NewPostMatchingSendMail';
import NewVideoMatchingMailResponse from './pages/Reddit/NewVideoByCategory/NewPostMatchingMailResponse';
import NewVideoMatchingDelBranch from './pages/Reddit/NewVideoByCategory/NewPostMatchingDelBranch';
import NewVideoMatchingCreateIssue from './pages/Reddit/NewVideoByCategory/NewPostMatchingCreateIssue';
import NewVideoMatchingCreateComment from './pages/Reddit/NewVideoByCategory/NewPostMatchingCreateComment';
import NewVideoMatchingAddRole from './pages/Reddit/NewGifByCategory/NewPostMatchingAddRole';
import NewVideoMatchingRemoveRole from './pages/Reddit/NewVideoByCategory/NewPostMatchingRemoveRole';
import NewVideoMatchingSendMessage from './pages/Reddit/NewVideoByCategory/NewPostMatchingSendMessage';
import NewVideoMatchingRenameChan from './pages/Reddit/NewVideoByCategory/NewPostMatchingRenameChan';
import NewGifMatchingLinkPost from './pages/Reddit/NewGifByCategory/NewPostMatchingNewLink';
import NewGifMatchingSendMail from './pages/Reddit/NewGifByCategory/NewPostMatchingSendMail';
import NewGifMatchingMailResponse from './pages/Reddit/NewGifByCategory/NewPostMatchingMailResponse';
import NewGifMatchingDelBranch from './pages/Reddit/NewGifByCategory/NewPostMatchingDelBranch';
import NewGifMatchingCreateIssue from './pages/Reddit/NewGifByCategory/NewPostMatchingCreateIssue';
import NewGifMatchingCreateComment from './pages/Reddit/NewGifByCategory/NewPostMatchingCreateComment';
import NewGifMatchingAddRole from './pages/Reddit/NewVideoByCategory/NewPostMatchingAddRole';
import NewGifMatchingRemoveRole from './pages/Reddit/NewGifByCategory/NewPostMatchingRemoveRole';
import NewGifMatchingSendMessage from './pages/Reddit/NewGifByCategory/NewPostMatchingSendMessage';
import NewGifMatchingRenameChan from './pages/Reddit/NewGifByCategory/NewPostMatchingRenameChan';
import SearchArtistsSendMail from './pages/Spotify/SearchArtists/SearchArtistsSendMail';
import SearchArtistsMailResponse from './pages/Spotify/SearchArtists/SearchArtistsMailResponse';
import SearchArtistsAddRole from './pages/Spotify/SearchArtists/SearchArtistsAddRole';
import SearchArtistsRemoveRole from './pages/Spotify/SearchArtists/SearchArtistsRemoveRole';
import SearchArtistsSendMessage from './pages/Spotify/SearchArtists/SearchArtistsSendMessage';
import SearchTrackRenameChan from './pages/Spotify/SearchTracks/SearchTrackRenameChan';
import SearchArtistsLinkPost from './pages/Spotify/SearchArtists/SearchArtistsLinkPost';
import SearchArtistsDelBranch from './pages/Spotify/SearchArtists/SearchArtistsDelBranch';
import SearchTrackCreateIssue from './pages/Spotify/SearchTracks/SearchTrackCreateIssue';
import SearchArtistsCreateComment from './pages/Spotify/SearchArtists/SearchArtistsCreateComment';
import SearchPlaylistsSendMail from './pages/Spotify/SearchPlaylists/SearchPlaylistSendMail';
import SearchPlaylistsMailResponse from './pages/Spotify/SearchPlaylists/SearchPlaylistMailResponse';
import SearchPlaylistAddRole from './pages/Spotify/SearchPlaylists/SearchPlaylistAddRole';
import SearchPlaylistsRemoveRole from './pages/Spotify/SearchPlaylists/SearchPlaylistRemoveRole';
import SearchPlaylistsSendMessage from './pages/Spotify/SearchPlaylists/SearchPlaylistSendMessage';
import SearchPlaylistsRenameChan from './pages/Spotify/SearchPlaylists/SearchPlaylistRenameChan';
import SearchPlaylistsLinkPost from './pages/Spotify/SearchPlaylists/SearchPlaylistLinkPost';
import SearchPlaylistsDelBranch from './pages/Spotify/SearchPlaylists/SearchPlaylistDelBranch';
import SearchPlaylistsCreateIssue from './pages/Spotify/SearchPlaylists/SearchPlaylistCreateIssue';
import SearchPlaylistsCreateComment from './pages/Spotify/SearchPlaylists/SearchPlaylistCreateComment';
import SearchTrackSendMail from './pages/Spotify/SearchTracks/SearchTrackSendMail';
import SearchTrackMailResponse from './pages/Spotify/SearchTracks/SearchTrackMailResponse';
import SearchTrackAddRole from './pages/Spotify/SearchTracks/SearchTrackAddRole';
import SearchTrackRemoveRole from './pages/Spotify/SearchTracks/SearchTrackRemoveRole';
import SearchTrackSendMessage from './pages/Spotify/SearchTracks/SearchTrackSendMessage';
import SearchTrackLinkPost from './pages/Spotify/SearchTracks/SearchTrackLinkPost';
import SearchTrackDelBranch from './pages/Spotify/SearchTracks/SearchTrackDelBranch';
import SearchArtistsCreateIssue from './pages/Spotify/SearchArtists/SearchArtistsCreateIssue';
import SearchArtistsRenameChan from './pages/Spotify/SearchArtists/SearchArtistsRenameChan';
import SearchTrackCreateComment from './pages/Spotify/SearchTracks/SearchTrackCreateComment';






class App extends Component {
    
    render() {
        return (

            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={SignIn}/>
                    <Route path="/about.json" component={About}/>
                    <Route path= "/dashboard" component={Dashboard}/>
                    <Route path= "/services" component={Services}/>                    
                    <Route path= "/settings" component={Settings}/>                    
                    <Route path= "/sign-in"  component={SignIn}/>
                    <Route path= "/sign-up" component={SignUp}/>

                    <Route path= "/newvideo-sendmail" component={NewVideoSendMail}/>
                    <Route path= "/newvideo-mailresponse" component={NewVideoMailResponse}/>
          
                    <Route path= "/newvideo-linkpost" component={NewVideoLinkPost}/>
                    <Route path= "/newvideo-addrole" component={NewVideoAddRole}/>
                    <Route path= "/newvideo-removerole" component={NewVideoRemoveRole}/>
                    <Route path= "/newvideo-sendmessage" component={NewVideoSendMessage}/>
                    <Route path= "/newvideo-renamechan" component={NewVideoRenameChan}/>
                    <Route path= "/newvideo-deletebranch" component={NewVideoDelBranch}/>
                    <Route path= "/newvideo-createissue" component={NewVideoCreateIssue}/>
                    <Route path= "/newvideo-createcomment" component={NewVideoCreateComment}/>



                    <Route path= "/newvideochan-sendmail" component={NewVideoChanSendMail}/>
                    <Route path= "/newvideochan-mailresponse" component={NewVideoChanMailResponse}/>
   
                    <Route path= "/newvideochan-linkpost" component={NewVideoChanLinkPost}/>
                    <Route path= "/newvideochan-addrole" component={NewVideoChanAddRole}/>
                    <Route path= "/newvideochan-removerole" component={NewVideoChanRemoveRole}/>
                    <Route path= "/newvideochan-sendmessage" component={NewVideoChanSendMessage}/>
                    <Route path= "/newvideochan-renamechan" component={NewVideoChanRenameChan}/>
                    <Route path= "/newvideochan-deletebranch" component={NewVideoChanDelBranch}/>
                    <Route path= "/newvideochan-createissue" component={NewVideoChanCreateIssue}/>
                    <Route path= "/newvideochan-createcomment" component={NewVideoChanCreateComment}/>



                    <Route path= "/newvideoplaylist-sendmail" component={NewVideoPlaylistSendMail}/>
                    <Route path= "/newvideoplaylist-mailresponse" component={NewVideoPlaylistMailResponse}/>
                  <Route path= "/newvideoplaylist-linkpost" component={NewVideoPlaylistLinkPost}/>
                    <Route path= "/newvideoplaylist-addrole" component={NewVideoPlaylistAddRole}/>
                    <Route path= "/newvideoplaylist-removerole" component={NewVideoPlaylistRemoveRole}/>
                    <Route path= "/newvideoplaylist-sendmessage" component={NewVideoPlaylistSendMessage}/>
                    <Route path= "/newvideoplaylist-renamechan" component={NewVideoPlaylistRenameChan}/>
                    <Route path= "/newvideoplaylist-deletebranch" component={NewVideoPlaylistDelBranch}/>
                    <Route path= "/newvideoplaylist-createissue" component={NewVideoPlaylistCreateIssue}/>
                    <Route path= "/newvideoplaylist-createcomment" component={NewVideoPlaylistCreateComment}/>




                    <Route path= "/itisraining-sendmail" component={ItIsRainingSendMail}/>
                    <Route path= "/itisraining-mailresponse" component={ItIsRainingMailResponse}/>
                   <Route path= "/itisraining-addrole" component={ItIsRainingAddRole}/>
                    <Route path= "/itisraining-removerole" component={ItIsRainingRemoveRole}/>
                    <Route path= "/itisraining-sendmessage" component={ItIsRainingSendMessage}/>
                    <Route path= "/itisraining-renamechan" component={ItIsRainingRenameChan}/>
                    <Route path= "/itisraining-linkpost" component={ItIsRainingLinkPost}/>
                    <Route path= "/itisraining-deletebranch" component={ItIsRainingDelBranch}/>
                    <Route path= "/itisraining-createissue" component={ItIsRainingCreateIssue}/>
                    <Route path= "/itisraining-createcomment" component={ItIsRainingCreateComment}/>


                    <Route path= "/weatherchange-sendmail" component={WeatherChangeSendMail}/>
                    <Route path= "/weatherchange-mailresponse" component={WeatherChangeMailResponse}/>
                  <Route path= "/weatherchange-addrole" component={WeatherChangeAddRole}/>
                    <Route path= "/weatherchange-removerole" component={WeatherChangeRemoveRole}/>
                    <Route path= "/weatherchange-sendmessage" component={WeatherChangeSendMessage}/>
                    <Route path= "/weatherchange-renamechan" component={WeatherChangeRenameChan}/>
                    <Route path= "/weatherchange-linkpost" component={WeatherChangeLinkPost}/>
                    <Route path= "/weatherchange-deletebranch" component={WeatherChangeDelBranch}/>
                    <Route path= "/weatherchange-createissue" component={WeatherChangeCreateIssue}/>
                    <Route path= "/weatherchange-createcomment" component={WeatherChangeCreateComment}/>

                    <Route path= "/searchartists-sendmail" component={SearchArtistsSendMail}/>
                    <Route path= "/searchartists-mailresponse" component={SearchArtistsMailResponse}/>
                    <Route path= "/searchartists-addrole" component={SearchArtistsAddRole}/>
                    <Route path= "/searchartists-removerole" component={SearchArtistsRemoveRole}/>
                    <Route path= "/searchartists-sendmessage" component={SearchArtistsSendMessage}/>
                    <Route path= "/searchartists-renamechan" component={SearchArtistsRenameChan}/>
                    <Route path= "/searchartists-linkpost" component={SearchArtistsLinkPost}/>
                    <Route path= "/searchartists-deletebranch" component={SearchArtistsDelBranch}/>
                    <Route path= "/searchartists-createissue" component={SearchArtistsCreateIssue}/>
                    <Route path= "/searchartists-createcomment" component={SearchArtistsCreateComment}/>


                    <Route path= "/searchplaylists-sendmail" component={SearchPlaylistsSendMail}/>
                    <Route path= "/searchplaylists-mailresponse" component={SearchPlaylistsMailResponse}/>
                    <Route path= "/searchplaylists-addrole" component={SearchPlaylistAddRole}/>
                    <Route path= "/searchplaylists-removerole" component={SearchPlaylistsRemoveRole}/>
                    <Route path= "/searchplaylists-sendmessage" component={SearchPlaylistsSendMessage}/>
                    <Route path= "/searchplaylists-renamechan" component={SearchPlaylistsRenameChan}/>
                    <Route path= "/searchplaylists-linkpost" component={SearchPlaylistsLinkPost}/>
                    <Route path= "/searchplaylists-deletebranch" component={SearchPlaylistsDelBranch}/>
                    <Route path= "/searchplaylists-createissue" component={SearchPlaylistsCreateIssue}/>
                    <Route path= "/searchplaylists-createcomment" component={SearchPlaylistsCreateComment}/>


                    <Route path= "/searchtracks-sendmail" component={SearchTrackSendMail}/>
                    <Route path= "/searchtracks-mailresponse" component={SearchTrackMailResponse}/>
                    <Route path= "/searchtracks-addrole" component={SearchTrackAddRole}/>
                    <Route path= "/searchtracks-removerole" component={SearchTrackRemoveRole}/>
                    <Route path= "/searchtracks-sendmessage" component={SearchTrackSendMessage}/>
                    <Route path= "/searchtracks-renamechan" component={SearchTrackRenameChan}/>
                    <Route path= "/searchtracks-linkpost" component={SearchTrackLinkPost}/>
                    <Route path= "/searchtracks-deletebranch" component={SearchTrackDelBranch}/>
                    <Route path= "/searchtracks-createissue" component={SearchTrackCreateIssue}/>
                    <Route path= "/searchtracks-createcomment" component={SearchTrackCreateComment}/>



                    <Route path= "/createrepo-deletebranch" component={CreateRepositoryDelBranch}/>
                    <Route path= "/createrepo-createissue" component={CreateRepositoryCreateIssue}/>
                    <Route path= "/createrepo-createcomment" component={CreateRepositoryCreateComment}/>
                    <Route path= "/createrepo-addrole" component={CreateRepositoryAddRole}/>
                    <Route path= "/createrepo-removerole" component={CreateRepositoryRemoveRole}/>
                    <Route path= "/createrepo-sendmessage" component={CreateRepositorySendMessage}/>
                    <Route path= "/createrepo-renamechan" component={CreateRepositoryRenameChan}/>
                    <Route path= "/createrepo-sendmail" component={CreateRepositorySendMail}/>
                    <Route path= "/createrepo-mailresponse" component={CreateRepositoryMailResponse}/>
                   <Route path= "/createrepo-linkpost" component={CreateRepositoryLinkPost}/>



                    <Route path= "/createorga-deletebranch" component={CreateOrganisationDelBranch}/>
                    <Route path= "/createorga-createissue" component={CreateOrganisationCreateIssue}/>
                    <Route path= "/createorga-createcomment" component={CreateOrganisationCreateComment}/>
                    <Route path= "/createorga-addrole" component={CreateOrgaAddRole}/>
                    <Route path= "/createorga-removerole" component={CreateOrganisationRemoveRole}/>
                    <Route path= "/createorga-sendmessage" component={CreateOrganisationSendMessage}/>
                    <Route path= "/createorga-renamechan" component={CreateOrganisationRenameChan}/>
                    <Route path= "/createorga-sendmail" component={CreateOrganisationSendMail}/>
                    <Route path= "/createorga-mailresponse" component={CreateOrganisationMailResponse}/>
                   <Route path= "/createorga-linkpost" component={CreateOrganisationLinkPost}/>





                    <Route path= "/createcommit-deletebranch" component={CreateCommitDelBranch}/>
                    <Route path= "/createcommit-createissue" component={CreateCommitCreateIssue}/>
                    <Route path= "/createcommit-createcomment" component={CreateCommitCreateComment}/>
                    <Route path= "/createcommit-addrole" component={CreateCommitAddRole}/>
                    <Route path= "/createcommit-removerole" component={CreateCommitRemoveRole}/>
                    <Route path= "/createcommit-sendmessage" component={CreateCommitSendMessage}/>
                    <Route path= "/createcommit-renamechan" component={CreateCommitRenameChan}/>
                    <Route path= "/createcommit-sendmail" component={CreateCommitSendMail}/>
                    <Route path= "/createcommit-mailresponse" component={CreateCommitMailResponse}/>
                    <Route path= "/createcommit-linkpost" component={CreateCommitLinkPost}/>




                    <Route path= "/createbranch-deletebranch" component={CreateBranchDelBranch}/>
                    <Route path= "/createbranch-createissue" component={CreateBranchCreateIssue}/>
                    <Route path= "/createbranch-createcomment" component={CreateBranchCreateComment}/>
                    <Route path= "/createbranch-addrole" component={CreateBranchAddRole}/>
                    <Route path= "/createbranch-removerole" component={CreateBranchRemoveRole}/>
                    <Route path= "/createbranch-sendmessage" component={CreateBranchSendMessage}/>
                    <Route path= "/createbranch-renamechan" component={CreateBranchRenameChan}/>
                    <Route path= "/createbranch-sendmail" component={CreateBranchSendMail}/>
                    <Route path= "/createbranch-mailresponse" component={CreateBranchMailResponse}/>
                    <Route path= "/createbranch-linkpost" component={CreateBranchLinkPost}/>



                    <Route path= "/newcommentuser-linkpost" component={NewCommentUserLinkPost}/>
                    <Route path= "/newcommentuser-sendmail" component={NewCommentUserSendMail}/>
                    <Route path= "/newcommentuser-mailresponse" component={NewCommentUserMailResponse}/>
                   <Route path= "/newcommentuser-deletebranch" component={NewCommentUserDelBranch}/>
                    <Route path= "/newcommentuser-createissue" component={NewCommentUserCreateIssue}/>
                    <Route path= "/newcommentuser-createcomment" component={NewCommentUserCreateComment}/>
                    <Route path= "/newcommentuser-addrole" component={NewCommentUserAddRole}/>
                    <Route path= "/newcommentuser-removerole" component={NewCommentUserRemoveRole}/>
                    <Route path= "/newcommentuser-sendmessage" component={NewCommentUserSendMessage}/>
                    <Route path= "/newcommentuser-renamechannel" component={NewCommentUserRenameChan}/>

                    <Route path= "/newvideocategory-linkpost" component={NewVideoMatchingLinkPost}/>
                    <Route path= "/newvideocategory-sendmail" component={NewVideoMatchingSendMail}/>
                    <Route path= "/newvideocategory-mailresponse" component={NewVideoMatchingMailResponse}/>
                    <Route path= "/newvideocategory-deletebranch" component={NewVideoMatchingDelBranch}/>
                    <Route path= "/newvideocategory-createissue" component={NewVideoMatchingCreateIssue}/>
                    <Route path= "/newvideocategory-createcomment" component={NewVideoMatchingCreateComment}/>
                    <Route path= "/newvideocategory-addrole" component={NewVideoMatchingAddRole}/>
                    <Route path= "/newvideocategory-removerole" component={NewVideoMatchingRemoveRole}/>
                    <Route path= "/newvideocategory-sendmessage" component={NewVideoMatchingSendMessage}/>
                    <Route path= "/newvideocategory-renamechannel" component={NewVideoMatchingRenameChan}/>

                    <Route path= "/newgifcategory-linkpost" component={NewGifMatchingLinkPost}/>
                    <Route path= "/newgifcategory-sendmail" component={NewGifMatchingSendMail}/>
                    <Route path= "/newgifcategory-mailresponse" component={NewGifMatchingMailResponse}/>
                    <Route path= "/newgifcategory-deletebranch" component={NewGifMatchingDelBranch}/>
                    <Route path= "/newgifcategory-createissue" component={NewGifMatchingCreateIssue}/>
                    <Route path= "/newgifcategory-createcomment" component={NewGifMatchingCreateComment}/>
                    <Route path= "/newgifcategory-addrole" component={NewGifMatchingAddRole}/>
                    <Route path= "/newgifcategory-removerole" component={NewGifMatchingRemoveRole}/>
                    <Route path= "/newgifcategory-sendmessage" component={NewGifMatchingSendMessage}/>
                    <Route path= "/newgifcategory-renamechannel" component={NewGifMatchingRenameChan}/>



                    <Route path= "/newhotpost-linkpost" component={NewHotPostLinkPost}/>
                    <Route path= "/newhotpost-sendmail" component={NewHotPostSendMail}/>
                    <Route path= "/newhotpost-mailresponse" component={NewHotPostMailResponse}/>
                   <Route path= "/newhotpost-deletebranch" component={NewHotPostDelBranch}/>
                    <Route path= "/newhotpost-createissue" component={NewHotPostCreateIssue}/>
                    <Route path= "/newhotpost-createcomment" component={NewHotPostCreateComment}/>
                    <Route path= "/newhotpost-addrole" component={NewHotPostAddRole}/>
                    <Route path= "/newhotpost-removerole" component={NewHotPostRemoveRole}/>
                    <Route path= "/newhotpost-sendmessage" component={NewHotPostSendMessage}/>
                    <Route path= "/newhotpost-renamechannel" component={NewHotPostRenameChan}/>



                    <Route path= "/newpostmatching-linkpost" component={NewPostMatchingLinkPost}/>
                    <Route path= "/newpostmatching-sendmail" component={NewPostMatchingSendMail}/>
                    <Route path= "/newpostmatching-mailresponse" component={NewPostMatchingMailResponse}/>
                    <Route path= "/newpostmatching-deletebranch" component={NewPostMatchingDelBranch}/>
                    <Route path= "/newpostmatching-createissue" component={NewPostMatchingCreateIssue}/>
                    <Route path= "/newpostmatching-createcomment" component={NewPostMatchingCreateComment}/>
                    <Route path= "/newpostmatching-addrole" component={NewPostMatchingAddRole}/>
                    <Route path= "/newpostmatching-removerole" component={NewPostMatchingRemoveRole}/>
                    <Route path= "/newpostmatching-sendmessage" component={NewPostMatchingSendMessage}/>
                    <Route path= "/newpostmatching-renamechannel" component={NewPostMatchingRenameChan}/>


                    <Route path= "/newcommentmatching-linkpost" component={NewCommentMatchingLinkPost}/>
                    <Route path= "/newcommentmatching-sendmail" component={NewCommentMatchingSendMail}/>
                    <Route path= "/newcommentmatching-mailresponse" component={NewCommentMatchingMailResponse}/>
                    <Route path= "/newcommentmatching-deletebranch" component={NewCommentMatchingDelBranch}/>
                    <Route path= "/newcommentmatching-createissue" component={NewCommentMatchingCreateIssue}/>
                    <Route path= "/newcommentmatching-createcomment" component={NewCommentMatchingCreateComment}/>
                    <Route path= "/newcommentmatching-addrole" component={NewCommentMatchingAddRole}/>
                    <Route path= "/newcommentmatching-removerole" component={NewCommentMatchingRemoveRole}/>
                    <Route path= "/newcommentmatching-sendmessage" component={NewCommentMatchingSendMessage}/>
                    <Route path= "/newcommentmatching-renamechannel" component={NewCommentMatchingRenameChan}/>



                    <Route path= "/newmail-sendmail" component={NewMailSendMail}/>
                    <Route path= "/newmail-mailresponse" component={NewMailResponse}/>
                    <Route path= "/newmail-addrole" component={NewMailAddRole}/>
                    <Route path= "/newmail-removerole" component={NewMailRemoveRole}/>
                    <Route path= "/newmail-sendmessage" component={NewMailSendMessage}/>
                    <Route path= "/newmail-renamechannel" component={NewMailRenameChan}/>
                    <Route path= "/newmail-linkpost" component={NewMailLinkPost}/>
                    <Route path= "/newmail-deletebranch" component={NewMailDelBranch}/>
                    <Route path= "/newmail-createissue" component={NewMailCreateIssue}/>
                    <Route path= "/newmail-createcomment" component={NewMailCreateComment}/>


            </Switch>  
            </BrowserRouter>
        );
    };
}

export default App;