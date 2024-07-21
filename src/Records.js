import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Records = ({ blogs }) => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <table>
        <thead>
          <tr>
            <th>Alcohol intake</th>
            <th>Smoke intake</th>
            <th>AVG</th>
            <th>MIN</th>
            <th>MAX</th>
            <th>Date</th>
  
          </tr>
        </thead>
        <tbody>
          {blogs.map(blog => (
            <tr key={blog.id}>
              <td>{blog.Alcohol}</td>
              <td>{blog.Smoke}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>{new Date(blog.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
        <button onClick={handleClick}>delete</button>
      </table>
      )}
      </div>
    );
  };
  export default Records;