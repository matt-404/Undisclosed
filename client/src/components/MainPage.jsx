import React from 'react';
import { Link } from 'react-router-dom';

export default class MainPage extends React.Component {

  render() {
    return (
      <div>
        <div id="blog-list">
          {
            this.props.blogs.map(blog => (
              <div className="blogs" key={blog.id}>
                <img src={blog.image_url} alt="blog-picture" />
                <h2>Author: {this.props.currentUser.username}</h2>
                <h4>Content: {blog.content}</h4>
                <Link to={`/blogs/${this.props.blog_id}`}>
                  <button onClick={() => this.props.handleClick(blog.id)}>...read more!</button>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}