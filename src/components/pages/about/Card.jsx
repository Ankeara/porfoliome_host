
const Card = (props) => {
  return (
    <div className="item" >
        <img src={props.image} alt="" className="img__tool" />
    </div>
  );
};

export default Card;
