import {
  addDoc,
  collection,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const Home = () => {
  const [val, setVal] = useState("");
  const [data, setData] = useState([]);
  const [index, setIndex] = useState();

  const dbInstance = collection(db, "users");
  async function sendToDb(e) {
    e.preventDefault();
    addDoc(dbInstance, { val })
      .then(() => {
        console.log("done");
      })
      .catch((err) => alert(err));
  }

  async function getFromDb() {
    const data = await getDocs(dbInstance);

    setData(
      data.docs.map((item) => {
        return { ...item.data(), id: item.id };
      })
    );
  }

  const moveUp = (i) => {
    setIndex(i - 1);
    console.log(i, index);
  };
  const moveDown = (i) => {
    setIndex(i + 1);
    console.log("i", i, "index", index);
  };

  const deleteFn = (id) => {
    let dataToDelete = doc(db, "users", id);

    deleteDoc(dataToDelete)
      .then(() => {
        console.log("deleted");
        getFromDb();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getFromDb();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="w-80 ">
          <h1 className="text-center font-bold text-4xl mb-8">List</h1>
          {data?.map((doc, i) => {
            return (
              <>
                <div className="flex justify-between bg-blue-400 px-4 py-2 mb-2 rounded-xl items-center w-full">
                  <h1 key={doc.id}>{doc.val}</h1>
                  <div className=" flex w-20 items-center justify-between">
                    <button
                      disabled={i <= 0 ? true : false}
                      onClick={() => moveUp(i)}
                    >
                      <AiFillCaretUp />
                    </button>
                    <button
                      disabled={i === data.length - 1 ? true : false}
                      onClick={() => moveDown(i)}
                    >
                      <AiFillCaretDown />
                    </button>
                    <ImCross
                      onClick={() => deleteFn(doc.id)}
                      className="text-red-800"
                    />
                  </div>
                </div>
              </>
            );
          })}
          <form className="flex rounded-xl justify-between bg-blue-400 px-4 py-2 w-full">
            <input
              type="text"
              className="rounded-lg px-2"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              placeholder="Enter Value"
            />
            <input
              type="submit"
              onClick={sendToDb}
              className="bg-green-600 px-3 py-1 rounded-xl"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
