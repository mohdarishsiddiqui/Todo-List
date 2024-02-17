import React, { useState } from "react";
import  "./App.css"

function TodoList() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  function addActivity() {
    setListData(() => {
      const updateData = [...listData, activity];
      console.log(updateData);
      setActivity("");
      return updateData;
    });
  }
  function removeActivity(i){
    const updatedListData = listData.filter((elem,id)=>{
      return i!= id;
    })
    setListData(updatedListData);

  }
  const removeAll =()=>{
    setListData([])
  }

  return (
    <>
      <div className="container">
        <div> TODO LIST </div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className="List-heading">Here is your list :{")"}</p>
        {listData!= [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listdata">{data}</div>
                 <div><button onClick={()=>removeActivity(i)}>Remove(-)</button></div> 
                </p>
              </>
            );
          })}
          {listData.length>=1 && <button onClick={removeAll}>Remove All</button>}
      </div>
    </>
  );
}

export default TodoList;
