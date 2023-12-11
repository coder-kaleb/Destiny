

const Counter = ({ children, number, title }) => {
  return (
    <div className="counter">
      <div>{children}</div>
      <h4>{number}</h4>
      <p>{title}</p>
    </div>
  );
};

export default Counter;
