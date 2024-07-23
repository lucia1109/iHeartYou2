import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import db from "./firebase";

const Create = () => {
  const [Age, setAge] = useState('');
  const [Sex, setSex] = useState('');
  const [Height, setHeight] = useState('');
  const [Education, setEducation] = useState('');
  const [Marital, setMarital] = useState('Single');
  const [Income, setIncome] = useState('');
  const [Cholestrol, setCholestrol] = useState('Yes');
  const [Diabetes, setDiabetes] = useState('Yes');
  const [Bloodpressure, setBloodpressure] = useState('Yes');
  const [Alcohol, setAlcohol] = useState('Yes');
  const [Smoke, setSmoke] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { Age, Sex, Height, Education, Marital, Income, Cholestrol, Diabetes, Bloodpressure, Alcohol, Smoke, createdAt: serverTimestamp() };

    setIsPending(true);

    try {
      const colRef = collection(db, 'userData');
      await addDoc(colRef, blog);
      console.log('New blog added to Firestore');
      setIsPending(false);
      history.push('/');
    } catch (error) {
      console.error("Error adding document: ", error);
      setIsPending(false);
    }
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit} className="add">
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
        />
        <label>Have you ever been told you have high Cholestrol:</label>
        <select
          value={Cholestrol}
          onChange={(e) => setCholestrol(e.target.value)}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>What was your alcohol consumption frequency this week:</label>
        <select
          value={Alcohol}
          onChange={(e) => setAlcohol(e.target.value)}
        >
          <option value="1">+3</option>
          <option value="2">3-5</option>
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
