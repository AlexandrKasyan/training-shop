import React, { useMemo, useRef, useState } from "react";
import PostForms from "./components/PostForms";
import PostList from "./components/PostList";
import Input1 from "./components/UI/input/Input1";
import Select1 from "./components/UI/select/Select1";
import './styles/App.css';



function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'ивет мир', body: 'дебил' },
    { id: 2, title: 'ривет мир 1', body: 'Я дебил' },
    { id: 3, title: 'вет мир 2', body: 'ебил' }
  ]);

  const [serchQury, setSerchQrey] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  function getSortedPost() {

  }

  const [selectedSort, setSelectedSort] = useState('')

  const sortedPost = useMemo(() => {
    console.log('jn')
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts])

  const sortedAndSearchedPost = useMemo(() => {

  }, [])

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForms create={createPost} />
      <hr style={{ margin: '15px 0 ' }} />
      <div>

        <Input1
          value={serchQury}
          onChange={e => setSerchQrey(e.target.value)}
          placeholder="Поиск..."
        />
        <Select1
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' }
          ]}
        />
      </div>

      {posts.length
        ? <PostList remove={removePost} posts={sortedPost} title='Список' />
        : <h1 style={{ textAlign: 'center' }}>Постов нет</h1>
      }

    </div>
  );
}

export default App;
