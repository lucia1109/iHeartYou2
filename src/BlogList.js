import React from 'react';
import { Link } from 'react-router-dom';

import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';
import { useEffect, useState } from "react";
import db from "./firebase";

const BlogList = ({ blogs }) => {

  const [userData, setUserData] = useState([]);
 
  useEffect(() => {
    // Create a query that orders by 'createdAt' in descending order
    const q = query(collection(db, "userData"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setUserData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate(); // Convert Firestore Timestamp to JavaScript Date
    return date.toLocaleString(); // Format the date and time
  };
  

  return (
    <table>
      <thead>
        <tr>
          <th>   Age   </th>
          <th>Sex</th>
          <th>BMI</th>
          <th>Exercise</th>
          <th>Depression</th>
          <th>Fruits</th>
          <th>Vegetables</th>
          <th>Diabetes</th>
          <th>Skin cancer</th>
          <th>Other cancer</th>
          <th>Alcohol intake</th>
          <th>Smoking levels</th>
          <th>Created</th>
          <th>Heart attack prediction</th>
        </tr>
      </thead>
      <tbody>


        {userData.map((userData) => (
          <tr key={userData.id}>
            <td userData={userData.value}>{userData.Age}</td>
            <td userData={userData.value}>{userData.Sex}</td>
            <td userData={userData.value}>{userData.BMI}</td>
            <td userData={userData.value}>{userData.Exercise}</td>
            <td userData={userData.value}>{userData.Depression}</td>
            <td userData={userData.value}>{userData.Fruits}</td>
            <td userData={userData.value}>{userData.Vegetables}</td>
            <td userData={userData.value}>{userData.Diabetes}</td>
            <td userData={userData.value}>{userData.Skin_cancer}</td>
            <td userData={userData.value}>{userData.Other_cancer}</td>
            <td userData={userData.value}>{userData.Alcohol}</td>
            <td userData={userData.value}>{userData.Smoke}</td>
            <td>{formatDate(userData.createdAt)}</td>
            <td></td>
            

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