import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import db from "./firebase";

const Create = () => {
  const [Age, setAge] = useState('');
  const [Sex, setSex] = useState('Female');
  const [BMI, setHeight] = useState('');
  const [Exercise, setEducation] = useState('Yes');
  const [Depression, setMarital] = useState('Yes');
  const [Fruits, setIncome] = useState('');
  const [Vegetables, setCholestrol] = useState('');
  const [Diabetes, setDiabetes] = useState('Yes');
  const [Skin_cancer, setBloodpressure] = useState('Yes');
  const [Other_cancer, setCancer] = useState('Yes');
  const [Alcohol, setAlcohol] = useState('');
  const [Smoke, setSmoke] = useState('Yes');
  const [Heart_attack, setHeart] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { Age, Sex, BMI, Exercise, Depression, 
      Fruits, Vegetables, Diabetes, Skin_cancer, Other_cancer,
      Alcohol, Smoke, createdAt: serverTimestamp(), Heart_attack };

    setIsPending(true);

    try {
      const colRef = collection(db, 'userData');
      await addDoc(colRef, blog);
      console.log('New blog added to Firestore');

      setIsPending(false);
      history.push('/');
    } 
    catch (error) {
      console.error("Error adding document: ", error);
      setIsPending(false);
    }
  }

  return (
    <div className="create">
      <h2>Add an Entry</h2>
      <form onSubmit={handleSubmit} className="add">
        <label>Select your age category:</label>
        <select 
          value={Age}
          onChange={(e) => setAge(e.target.value)}
        >
          <option value="18-24">18-24</option>
          <option value="25-29">25-29</option>
          <option value="30-34">30-34</option>
          <option value="35-39">35-39</option>
          <option value="40-44">40-44</option>
          <option value="45-49">45-49</option>
          <option value="50-54">50-54</option>
          <option value="55-59">55-59</option>
          <option value="60-64">60-64</option>
          <option value="65-69">65-69</option>
          <option value="70-74">70-74</option>
          <option value="80">80+</option>
        </select>


        <label>Sex:</label>
        <select 
          value={Sex}
          onChange={(e) => setSex(e.target.value)}
        >
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
        
        <label>What is your BMI:</label>
        <input 
          type="number" 
          required 
          value={BMI}
          onChange={(e) => setHeight(e.target.value)}
        />
        <label>During the past month, other than your regular job, did you participate in any physical activities or exercises such as running, 
          calisthenics, golf, gardening, or walking for exercise?</label>
        <select 
          value={Exercise}
          onChange={(e) => setEducation(e.target.value)}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        
        <label>Has a doctor, nurse, 
        or other health professional ever told you that you had depression?</label>
        <select
          value={Depression}
          onChange={(e) => setMarital(e.target.value)}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label>How many times do you eat fuits per month?</label>
        <input
          type="number" 
          required 
          value={Fruits}
          onChange={(e) => setIncome(e.target.value)}
        />
        <label>How many times do you eat green vegetables per month?</label>
        <input
          type="number" 
          required 
          value={Vegetables}
          onChange={(e) => setCholestrol(e.target.value)}
        />

        <label>During the past 30 days, how many days did you have atleast on drink of any alcolic beverage?</label>
        <input
          type="number"
          required
          value={Alcohol}
          onChange={(e) => setAlcohol(e.target.value)}
        >
        </input>

        <label>Have you ever been told you have high Diabetes:</label>
        <select
          value={Diabetes}
          onChange={(e) => setDiabetes(e.target.value)}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <label>Have you ever been told you have skin cancer?</label>
        <select
          value={Skin_cancer}
          onChange={(e) => setBloodpressure(e.target.value)}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>Have you ever been told you have other types of cancer?</label>
        <select
          value={Other_cancer}
          onChange={(e) => setCancer(e.target.value)}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label>Have you smoked at least 100 cigarettes in your life:</label>
        <select
          value={Smoke}
          onChange={(e) => setSmoke(e.target.value)}
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>



        { !isPending && <button>Add and Predict</button> }
        { isPending && <button disabled>Adding</button> }
      </form>
    </div>
  );
}

export default Create;
