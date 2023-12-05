const ServiceDesc = ({ imgUrl, title, desc }) => {
  return (
    <div className="child-component">
      <div>
        <img src={imgUrl} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default ServiceDesc;
