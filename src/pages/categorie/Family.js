import React, {useEffect, useState} from 'react';
import Markdown from 'markdown-to-jsx';

export default function Family() {
    const file_name = 'jade.md';
    const [post, setPost] = useState('')

   


    useEffect(() => {
    import(`../../.././posts/${file_name}`)
      .then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setPost(res))
          .catch(err => console.log(err));
           console.log(res.default)
      })
      .catch(err => console.log(err));
  });

 
  return <div>

<div>
    <Markdown >
        {post}
    </Markdown>
    </div>
  </div>;
}
