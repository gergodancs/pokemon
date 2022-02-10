import Type from "./Type";

//egy pokemon adatai
const Pokemon = (props) => {
  return (
    <div className="container">
      <h1>{props.name}</h1>
      <img src={props.img} alt="pok" />
      {props.type.map((type) => {
        return <Type key={type} type={type} />;
      })}
    </div>
  );
};

export default Pokemon;
