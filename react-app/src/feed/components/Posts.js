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


const UserAvatar = withStyles( theme => ({
    root : {
        backgroundColor : "#e0f2f1"
    }
}) )(Avatar);


class Posts extends Component {
    constructor (props) {
        super(props);

        this.newPostSound = new Audio('../react-app/src/audio/newpost.mp3');
        this.updateInterval = null;
    }

    componentWillMount () {
        const updatePostsToShow = e => {
            if (window.pageYOffset + 1000 > document.body.clientHeight)
            {
                if (this.props.posts.length)
                {
                    let step = this.props.showPostStep + 35;

                    if (this.props.showPostStep >= this.props.posts.length)
                    {
                        this.props.dispatch( showPosts( {
                            showPosts : this.props.showPosts,
                            showPostStep : this.props.posts.length
                        } ) );

                        return window.removeEventListener('scroll', updatePostsToShow);
                    }

                    this.props.dispatch( showPosts( {
                        showPosts: this.props.showPosts.concat( this.props.posts.slice(this.props.showPosts.length, step) ),
                        showPostStep : step
                    }) );
                }
            }
        };

        const fetchPosts = () => {
            return post({func : 'getRelevantPosts'})
                .then( response =>
                    this.props.dispatch({
                        type    : FETCH_POSTS,
                        posts   : response['records'] || []
                    })
                )
                .then( () => {
                    this.props.dispatch( showPosts( {showPosts: this.props.posts.slice(0, this.props.showPosts.length), showPostStep: this.props.showPostStep}) );
                } )
                .then( () => {
                    if (this.props.postsLength > 0)
                    {
                        if (this.props.posts.length > this.props.postsLength)
                        {
                            console.log(this.props.posts[0]);
                            if (this.props.posts[0].author !== this.props.user['w3']['U3'])
                            {
                                this.newPostSound.play();
                            }

                            this.props.dispatch( setPostsLength({ postsLength: this.props.posts.length }) );
                        }
                    }
                } );
        };

        fetchPosts()
           .then( () => {
               this.props.dispatch( setPostsLength({ postsLength: this.props.posts.length }) );
           } )
           .then( () => {
               this.props.dispatch( showPosts( {showPosts: this.props.posts.slice(0, 35), showPostStep: 35} ) );

               window.addEventListener('scroll', updatePostsToShow)
           } );

        this.updateInterval = setInterval( fetchPosts, 2000 );
    }

    componentDidMount () {

    }

    /*componentWillReceiveProps (nextProps) {
        if (nextProps.newPost && nextProps.newPost.rowId !== this.props.posts[0].rowId)
        {
            this.props.posts.unshift( nextProps.newPost );
            this.props.showPosts.unshift( nextProps.newPost );
        }
    }*/

    render() {
        const posts = [];

        if (this.props.showPosts.length)
        {
            this.props.showPosts.map( post => {
                posts.push(
                    <div key={post.rowId} className="post">
                        <div className="post-wrapper">
                            <RemovePost post={post} />
                            <div className="post-sub-title">
                                <div className="post-avatar">
                                    <UserAvatar src='' />
                                </div>
                                <div className="post-user-info">
                                    <div className="post-author">
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="post-date">{moment(post.dt).format("DD MMMM, HH:mm")}</div>
                                </div>
                            </div>
                            <div className="post-body">
                                <ReactMarkdown source={post.text}/>
                            </div>
                            {<div className="post-footer">
                                <div className="footer-icons">
                                    <span className="icon-like">
                                        <ThumbUp fontSize="small"/>
                                    </span>
                                </div>
                            </div>}
                        </div>
                    </div>
                )
            } )
        }

        return (
            <div className="user-posts">{ posts }</div>
        );
    }
}

const mapStateToProps = state => ({
    posts   : state.posts,
    showPosts   : state.showPosts,
    showPostStep : state.showPostStep,
    newPost : state.newPost,
    postsLength : state.postsLength,
    user : state.user
});

export default connect(mapStateToProps)(Posts);
