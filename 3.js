import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
  const array = [
    'https://www.pixiv.net/messages.php?thread_id=33962050&content_id=15768910',
    'https://www.lofter.com/tag/6713/new#',
    'https://twitter.com/home',
    'https://m.weibo.cn/search?containerid=231522type%3D1%26t%3D10%26q%3D%236713%23&luicode=10000011&lfid=100103type%3D1%26q%3D%236713%23'
  ];

  return (
    <Router>
      <ul>
        {array.map((url, index) => (
          <li key={index}><Link to={url}>{url}</Link></li>
        ))}
      </ul>
    </Router>
  );
}

export default App;
