import React from "react";
import Button1 from "./UI/button/Button1";

const PostItem = (props) => {

    return (
        <div className="post">
            <div className="post__content">

                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <Button1 onClick={() => props.remove(props.post)}>
                    Удалить
                </Button1>
            </div>
        </div>
    )
}

export default PostItem;