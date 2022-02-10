import { useState } from "react";
const SearchForm = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleType = (e) => {
    setType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch({ name: "", type: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleName}
        value={name}
        type="text"
        placeholder="name of pokemon"
      />
      <input
        value={type}
        onChange={handleType}
        type="text"
        placeholder="type of pokemon"
      />
      <button type="submint">Search</button>
    </form>
  );
};
export default SearchForm;
