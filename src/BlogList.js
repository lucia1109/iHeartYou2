import React from 'react';
import { Link } from 'react-router-dom';

import { onSnapshot, collection } from 'firebase/firestore';
import { useEffect, useState } from "react";
import db from "./firebase";

const BlogList = ({ blogs }) => {

  const [userData, setUserData] = useState([]);
 
  console.log(userData);
  useEffect(
    () => 
      onSnapshot(collection(db, "userData"), (snapshot) =>
        setUserData(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
      ),

    []
  );

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
          <th>Alcohol</th>
          <th>Diabetes</th>
          <th>Blood Pressure</th>
          <th>Smoke</th>

        </tr>
      </thead>
      <tbody>
        {/* 
        {blogs.map(blog => (
          <tr key={blog.id}>
            
            <td>{blog.Age}</td>
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

        */}

        {userData.map((userData) => (
          <tr key={userData.id}>
            <td userData={userData.value}>{userData.Age}</td>
            <td userData={userData.value}>{userData.Sex}</td>
            <td userData={userData.value}>{userData.Height}</td>
            <td userData={userData.value}>{userData.Education}</td>
            <td userData={userData.value}>{userData.Marital_Status}</td>
            <td userData={userData.value}>{userData.Income}</td>
            <td userData={userData.value}>{userData.Cholestrol}</td>
            <td userData={userData.value}>{userData.Education}</td>
            <td userData={userData.value}>{userData.Diabetes}</td>
            <td userData={userData.value}>{userData.Smoke}</td>
            <td userData={userData.value}>{userData.Smoke}</td>

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