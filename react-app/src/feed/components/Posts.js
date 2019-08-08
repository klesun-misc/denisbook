import React, { Component } from 'react';
import { connect } from "react-redux";
import moment from "moment";
import {post} from "../../requests";
import {FETCH_POSTS, setPostsLength, showPosts} from "../../actions/actions";
import ReactMarkdown from "react-markdown";
import RemovePost from "./RemovePost";
import ThumbUp from "@material-ui/icons/ThumbUpTwoTone";
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import { Tooltip } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Icon from "@material-ui/core/Icon";
import Zoom from '@material-ui/core/Zoom';

const UserAvatar = withStyles( theme => ({
    root : {
        backgroundColor : "#e0f2f1",
        border : "1px solid #c1c5c5",
        width : 48,
        height : 48
    }
}) )(Avatar);

const DateTooltip = withStyles( theme => ({
    tooltip: {
        backgroundColor: '#098c7f'
    },
    popper : {
        top : '-8px !important'
    }
}) )(Tooltip);

function ParagraphRenderer ({ children }) {
    const hasImage = !!children.find(
        (child) => typeof child === 'object' && child.key && !!child.key.match(/image/g)
    );

    return hasImage ? <React.Fragment><p>{children[0]}</p><div style={{textAlign: 'center'}}>{children[1]}</div></React.Fragment> : <p>{children}</p>
}

class Posts extends Component {
    constructor (props) {
        super(props);

        this.postSound          = null;
        this.processingUsers    = [];
        this.isBlurred          = false;
        this.updateInterval     = null;

        this.state = {
            users : [],
            play : false,
            likedPosts : []
        };

        this.step = 1;
        this.postsLength = 35;

        this.getUserAvatar = this.getUserAvatar.bind(this);
        this.like = this.like.bind(this);
    }

    getBlurred () {
        return this.isBlurred;
    }

    changeFavIco ({type}) {
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');

        link.type   = 'image/x-icon';
        link.rel    = 'shortcut icon';
        link.href   = type && type === "NEW MESSAGE" ? '../react-app/src/style/img/favicon-msg.ico' : "../react-app/src/style/img/favicon.ico";

        document.getElementsByTagName('head')[0].appendChild(link);
    }

    componentWillMount () {
        const updatePostsToShow = e => {
            if (window.pageYOffset + 1200 > document.body.clientHeight)
            {
                this.step = this.step + 1;

                window.removeEventListener('scroll', updatePostsToShow);

                fetchPosts();
            }
        };

        const fetchPosts = () => {
            return post({
                func : 'getRelevantPosts',
                length : (this.postsLength * this.step),
                beforeId : '',
                componentDispatch: this.props.dispatch
            })
                .then( response => {
                    // check for new posts
                    if (this.props.postsLength > 0)
                    {
                        const postsLastDate = new Date(this.props.posts[0]['dt']).getTime();
                        const responseLastDate = new Date(response['records'][0]['dt']).getTime();

                        // check if currently recorded posts first element isn't equals with response first element
                        if (this.props.posts[0]['rowId'] !== response['records'][0]['rowId'] && responseLastDate > postsLastDate)
                        {
                            if (this.getBlurred() && this.props.posts[0].author !== this.props.user.getBasicProfile().getEmail())
                            {
                                this.changeFavIco({type: "NEW MESSAGE"});
                                this.postSound.play();
                            }
                        }
                    }

                    this.props.dispatch({
                        type    : FETCH_POSTS,
                        posts   : response['records'] || []
                    });

                    this.props.dispatch( setPostsLength({ postsLength: this.props.posts.length }) );

                    window.addEventListener('scroll', updatePostsToShow);
                });
        };

        fetchPosts();

        this.updateInterval = setInterval( fetchPosts, 2000 );
    }

    getUserAvatar (author) {
        let fount = false;

        this.state.users.forEach( user => {
            if (user.email === author)
            {
                fount = true;
            }
        } );

        if (!fount && this.processingUsers.indexOf(author) < 0)
        {
            this.processingUsers = this.processingUsers.concat([author]);

            post( {func: 'getUserData', email: author, componentDispatch: this.props.dispatch} )
                .then( response => {
                    if (response && response['message'] === "ok")
                    {
                        const [fountUser] = this.state.users.filter( user => response.email === user.email);

                        if (!fountUser)
                        {
                            this.processingUsers = this.processingUsers.filter( user => user !== author );

                            this.setState({
                                ...this.state,
                                users : this.state.users.concat({...response})
                            })
                        }
                    }
                } );
        }
    }

    componentDidMount () {
        const blurEvent     = e => this.isBlurred = true;
        const focusEvent    = e => {
            this.isBlurred = false;
            this.changeFavIco({type: false});
        };

        window.onblur = blurEvent;
        window.onfocus = focusEvent;
    }

    like (postId) {
        const [likedAlready] = this.state.likedPosts.filter( id => postId === id );

        if (!likedAlready)
        {
            this.setState( state => ({
                ...state,
                likedPosts : [].concat(state.likedPosts, postId)
            }) );
        }
        else
        {
            this.setState( state => ({
                ...state,
                likedPosts : [].concat(state.likedPosts).filter( id => id !== postId )
            }) );
        }
    }

    render() {
        const posts = [];

        const profile = this.props.user.getBasicProfile();

        if (this.props.posts.length)
        {
            this.props.posts.map( post => {
                let avatarUrl, userName;

                const [liked] = this.state.likedPosts.filter( id => post.rowId === id );

                if (profile.getEmail() === post.author)
                {
                    avatarUrl = profile.getImageUrl();
                    userName = profile.getName();
                }
                else
                {
                    const [fountUser] = this.state.users.filter( user => post.author === user.email);

                    if (fountUser)
                    {
                        avatarUrl = fountUser.imageUrl;
                        userName = fountUser.displayName;
                    }
                    else
                    {
                        this.getUserAvatar(post.author);
                    }
                }

                const dateDifferenceMin     = moment(new Date()).diff(moment(post.dt), 'minutes');
                const dateDifferenceHour    = moment(new Date()).diff(moment(post.dt), 'hours');
                const dateDifferenceDay     = moment(new Date()).diff(moment(post.dt), 'days');

                const postDate = dateDifferenceMin < 1
                    ? "just now"
                    : dateDifferenceMin < 60
                        ? dateDifferenceMin + (dateDifferenceMin < 2 ? " minute ago" : " minutes ago")
                        : dateDifferenceHour < 24
                            ? dateDifferenceHour + (dateDifferenceHour < 2 ? " hour ago" : " hours ago")
                            : dateDifferenceDay < 7
                                ? dateDifferenceDay + (dateDifferenceDay < 2 ? " day ago" : " days ago")
                                : moment(post.dt).format("DD MMMM, HH:mm");

                posts.push(
                    <div key={post.rowId} className="post">
                    <div className="post-wrapper">
                        {this.props.user.getBasicProfile().getEmail() === post.author && <RemovePost post={post}/> }
                        <div className="post-sub-title">
                            <div className="post-avatar">
                                <UserAvatar src={avatarUrl} />
                            </div>
                            <div className="post-user-info">
                                <div className="post-author">
                                    <span>{userName ? userName : post.author}</span>
                                    {
                                        post.fromMobile && (
                                            <div className="post-from-mobile">
                                                <Icon className='post-from-mobile-icon'>phone_iphone</Icon>
                                            </div>
                                        )
                                    }
                                </div>
                                {
                                    dateDifferenceMin > 1
                                        ? <DateTooltip TransitionComponent={Zoom} title={moment(post.dt).format("MMMM D, HH:mm")}>
                                            <div className="post-date">{postDate}</div>
                                        </DateTooltip>
                                        : <div className="post-date">{postDate}</div>
                                }
                            </div>
                        </div>
                        <div className="post-body">
                            <ReactMarkdown
                                source={post.text}
                                renderers={{
                                    paragraph : ParagraphRenderer
                                }}
                            />
                        </div>
                        <div className="post-footer">
                            <div className="footer-icons">
                                <span className={'icon-like' + (liked ? " liked" : '')}>
                                    <IconButton className='icon-like-btn' onClick={ () => this.like(post.rowId) }>
                                        <ThumbUp fontSize="small"/>
                                    </IconButton>
                                    <div className='icon-like-container'>
                                        <span className="icon-like-count"></span>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                )
            } )
        }

        return (
            <div className="user-posts">
                { posts }
                <audio src='../react-app/src/audio/newpost.mp3' ref={ el => this.postSound = el }/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts   : state.posts,
    newPost : state.newPost,
    postsLength : state.postsLength,
    user : state.user
});

export default connect(mapStateToProps)(Posts);
