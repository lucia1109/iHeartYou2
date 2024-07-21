import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [Age, setAge] = useState('');
  const [Sex, setSex] = useState('');
  const [Height, setHeight] = useState('');
  const [Education, setEducation] = useState('');
  const [Marital, setMarital] = useState('Single');
  const [Income, setIncome] = useState('Single');
  const [Cholestrol, setcholestrol] = useState('Yes');
  const [Diabetes, setDiabetes] = useState('Yes');
  const [Bloodpressure, setBloodpressure] = useState('Yes');
  const [Alcohol, setAlcohol] = useState('Yes');
  const [Smoke, setSmoke] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { Age, Sex, Height, Education, Marital, Income, Cholestrol, Diabetes, Bloodpressure, Alcohol, Smoke };

    setIsPending(true);

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
      //history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Age:</label>
        <input 
          type="text" 
          required 
          value={Age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label>Sex:</label>
        <input 
          type="text" 
          required 
          value={Sex}
          onChange={(e) => setSex(e.target.value)}
        />
        <label>Height:</label>
        <input 
          type="text" 
          required 
          value={Height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <label>Education:</label>
        <select 
          value={Education}
          onChange={(e) => setEducation(e.target.value)}
        >
          <option value="1">Studying</option>
          <option value="2">Not Studying</option>
        </select>
        
        <label>Marital:</label>
        <select
          value={Marital}
          onChange={(e) => setMarital(e.target.value)}
        >
          <option value="Single">Single</option>
          <option value="Married">Married</option>
        </select>
        <label>Income:</label>
        <input
          type="text" 
          required 
          value={Income}
          onChange={(e) => setIncome(e.target.value)}
        >
        </input>
        <label>Have you ever been told you have high Cholestrol:</label>
        <select
          value={Cholestrol}
          onChange={(e) => setcholestrol(e.target.value)}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label>Have you ever been told you have high Diabetes:</label>
        <select
          value={Diabetes}
          onChange={(e) => setDiabetes(e.target.value)}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label>Have you ever been told you have high blood pressure:</label>
        <select
          value={Bloodpressure}
          onChange={(e) => setBloodpressure(e.target.value)}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>What was you alcohol consumption frequency this week:</label>
        <select
          value={Alcohol}
          onChange={(e) => setAlcohol(e.target.value)}
        >
          <option value="1"> +3</option>
          <option value="2">3-5</option>
        </select>

        <label>How was your smoke frequency:</label>
        <select
          value={Smoke}
          onChange={(e) => setSmoke(e.target.value)}
        >
          <option value="1">100</option>
          <option value="2">100+</option>
        </select>
        { !isPending && <button>Add Blog</button> }
        { isPending && <button disabled>Adding Blog</button> }
      </form>
    </div>
  );
}
 
export default Create;