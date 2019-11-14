import React from 'react';
import { Link } from 'react-router-dom';


export default function MainPageUser(props) {
  return (
    <div className="main-side">
      <div className="main-side-top">
        <div className="black">
          <h1>Hello, {props.currentUser.username}</h1>
          <div id="user-image">
            {props.currentUser.image_url === null ? <img src='https://i.imgur.com/HZPz2tu.png' alt="default user image" /> : <img src={props.currentUser.image_url} />}
            <Link to={`/update_profile/${props.currentUser.id}`}><p>edit profile</p></Link>
            <h3>{props.currentUser.city}</h3>
          </div>
          <button onClick={props.handleLogout}>Logout</button>
          <button>Following</button>
          <button>Favorites</button>
        </div>
        <div className="sticky black">
          <Link to="/blogs/new">
            <button>Create</button>
          </Link>
        </div>
        {
          props.currentUserBlogs.map(blog => (
            <div className="main-user-blogs" key={blog.id}>
              <Link to={`/full_blog/${blog.id}`} >
                <img src={blog.image_url} alt="blog post" id={blog.id} onClick={props.handleClick} />
              </Link>
              <div className="main-user-blog-heading">
                <h2>{blog.title}</h2>
                <h3>{blog.location}</h3>
                {/* <p>{blog.content}</p> */}
              </div>
            </ div>
          ))
        }
      </div>
    </div>
  )
}