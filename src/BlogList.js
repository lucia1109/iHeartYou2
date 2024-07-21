import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Age</th>
          <th>Sex</th>
          <th>Height</th>
          <th>Education</th>
          <th>Marital status</th>
          <th>Income</th>
          <th>Cholestrol</th>
          <th>Education</th>
          <th>Diabetes</th>
          <th>Blood Pressure</th>
          <th>Date</th>

        </tr>
      </thead>
      <tbody>
        {blogs.map(blog => (
          <tr key={blog.id}>
            
            {/* <td><link to={`/records/${blog.id}`}>{blog.Age}</link></td> */}
            <td>{blog.Sex}</td>
            <td>{blog.Height}</td>
            <td>{blog.Education}</td>
            <td>{blog.Marital}</td>
            <td>{blog.Income}</td>
            <td>{blog.Cholestrol}</td>
            <td>{blog.Diabetes}</td>
            <td>{blog.Bloodpressure}</td>
            <td>{new Date(blog.date).toLocaleDateString()}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BlogList;


/*
const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;

*/