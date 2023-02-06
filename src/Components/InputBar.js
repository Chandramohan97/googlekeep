import React from "react";
import "../Assets/InputBar.css";

const InputBar = () => {
  const [item, setItem] = React.useState("");
  const [editItem, setEditItem] = React.useState("");
  const [list, setList] = React.useState([]);

  function edit(editItem, id) {
    const newList = list.map((list) => {
      if (list.id === id) {
        return { ...list, value: editItem };
      }
      return list;
    });

    setList(newList);
    setEditItem("");
  }

  function Click() {
    if (!item || item.trim().length == 0) {
      setItem("");
      document.getElementById("myInput").value = "";
      return -1;
    } else {
      const obj = { id: Math.random() * 100, value: item };
      setList([...list, obj]);
      // list.push({ id: Math.random() * 100, item: item });
      // console.log(list);
      document.getElementById("myInput").value = "";
      setItem("");
    }
  }

  function onDelete(list, id) {
    const newArray = list.filter((el) => el.id != id);
    // console.log(newArray);
    setList(newArray);
  }
  // console.log(item);
  return (
    <div className="App">
      <input
        placeholder="enter the toDo list item"
        onChange={(e) => setItem(e.target.value)}
        id="myInput"
      />
      <br />
      <br />
      <button onClick={() => Click()}>Click</button>
      <br />

      <ul>
        {list.map((el) => (
          <>
            <li key={el.id}>
              <input
                onChange={(e) => setEditItem(e.target.value)}
                defaultValue={el.value}
              />
              <button onClick={() => edit(editItem, el.id)}> Update </button>
              <button onClick={() => onDelete(list, el.id)}> Delete </button>
              <br />
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default InputBar;
