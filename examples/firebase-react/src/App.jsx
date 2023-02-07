import { useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";

import "./App.css";

import {
  getCollectionName,
  onSnapshotDataCollection,
  getCollection,
  createDocument,
  setDocument,
} from "./utils/firebase";

const auth = getAuth();
const provider = new FacebookAuthProvider();

function App() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  const getOnSnapshotDataCollection = async () => {
    const col = getCollection("tasks");

    const unsubscribe = onSnapshotDataCollection(col, (snapshot) => {
      const task = [];

      snapshot.forEach((doc) => {
        task.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setData(task);
    });

    return unsubscribe;
  };

  const handleAddTask = async () => {
    const task = {
      title: "task 1",
      description: "description 1",
      userId: user.id,
    };

    const data = await createDocument("tasks", task);
    console.log(data);
  };

  const handleLoginWithFacebook = async () => {
    const result = await signInWithPopup(auth, provider);
    const { user } = result;

    const addUserToDB = {
      id: user.uid,
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      role: "user",
    };
    await setDocument("users", addUserToDB);
    setUser(addUserToDB);
  };

  useEffect(() => {
    getOnSnapshotDataCollection();
  }, []);

  return (
    <div className="App-header">
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>

      <button onClick={handleAddTask}>add task</button>

      <button onClick={handleLoginWithFacebook}>Login with Facebook</button>
    </div>
  );
}

export default App;
