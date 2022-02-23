import React, { useState } from 'react';
import Button1 from './UI/button/Button1';
import Input1 from './UI/input/Input1';

const PostForms = ({create}) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
        ...post, id: Date.now()
    }   
    create(newPost)
    setPost({title: '', body: ''})
  }

    return (
        <form>
            <Input1
                type="text"
                placeholder="Название поста"
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
            />
            <Input1
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder="Описание поста" />
            <Button1 onClick={addNewPost}>Создать</Button1>
        </form>
    );
};

export default PostForms;