import { connect } from "react-redux";
import React, { Component } from 'react';
import {post} from "../../requests";
import {addPost} from "../../actions/actions";

class AddPosts extends Component {
    constructor (props) {
        super(props);

        this.state = {
            text : '',
            pastedImages : [],
            isError : false,
            newLine : {
                16 : false, // shift
                13 : false  // enter
            }
        };

        this.onKeyDown  = this.onKeyDown.bind(this);
        this.onInput    = this.onInput.bind(this);
        this.onKeyUp    = this.onKeyUp.bind(this);
        this.onPaste    = this.onPaste.bind(this);
    }

    addPost () {
        const data = { text : this.state.text };

        post({func: "addPost", ...data})
            .then( response => {
                const newPost = {
                    rowId   : response.rowId,
                    author  : response.author,
                    ...data
                };

                this.props.dispatch( addPost( newPost ) );
            } );

        this.setState({
            ...this.state,
            text : ''
        })
    }

    onInput (e) {
        this.setState({
            ...this.state,
            text : e.target.value,
            isError : e.target.value.length < 1
        });
    }

    removePreviewImage (index) {
        const images = this.state.pastedImages;

        images.splice(index, 1);

        this.setState({
            ...this.state,
            pastedImages : images
        });
    }

    onPaste (e) {
        const items = (e.clipboardData || e.originalEvent.clipboardData).items;

        for (let index in items) {
            let item = items[index];

            if (item.kind === 'file')
            {
                const blob      = item.getAsFile();
                const reader    = new FileReader();

                reader.onload = event => {
                    //console.log(event.target.result); base64
                };

                this.setState({
                    ...this.state,
                    pastedImages : this.state.pastedImages.concat([blob])
                });

                reader.readAsDataURL(blob)
            }
        }
    }

    onKeyUp (e) {
        if (e.keyCode === 13 || e.keyCode === 16)
        {
            this.setState( {
                ...this.state,
                newLine: {
                    ...this.state.newLine,
                    [e.keyCode] : false
                }
            } );
        }
    }

    onKeyDown (e) {
        if (e.keyCode === 16 || e.keyCode === 13)
        {
            this.setState( {
                ...this.state,
                newLine : {
                    ...this.state.newLine,
                    [e.keyCode] : true
                }
            } );

            if (e.keyCode === 13 && !this.state.newLine['16'])
            {
                e.preventDefault();

                if (e.target.value.length < 1)
                {
                    return this.setState({
                        ...this.state,
                        isError : true
                    })
                }

                return this.addPost();
            }
        }
    }

    render() {
        const previewImages = [];

        if (this.state.pastedImages.length > 0)
        {
            const URLObj = window.URL || window.webkitURL;

            this.state.pastedImages.forEach( (imageBlob, i) => {
                previewImages.push(
                    <div className="preview-image-wrapper" key={i}>
                        <span className="preview-image-remove" onClick={ () => this.removePreviewImage(i) }>
                            <svg className="close-svg" viewBox="0 0 40 40">
                                <path className="close-svg-path" d="M 10,10 L 30,30 M 30,10 L 10,30" />
                            </svg>
                        </span>
                        <img src={URLObj.createObjectURL(imageBlob)} alt={"preview" + i} width={175} height={135}/>
                    </div>
                );
            } );
        }

        return (
            <div className="create-post">
                <div className="create-post-wrapper">
                    <textarea value={this.state.text} onPaste={this.onPaste} className={"create-post-text" + (this.state.isError ? " error" : "") } onKeyDown={this.onKeyDown} onKeyUp={this.onKeyUp} onChange={this.onInput} placeholder="Write something here..." />
                </div>
                {this.state.pastedImages.length > 0 &&
                    <div className="create-post-image-preview">{previewImages}</div>
                }
            </div>
        );
    }
}

export default connect(null)(AddPosts);
