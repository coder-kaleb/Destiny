import { useEffect, useState } from "react";

const Counter = ({ children, title, dataVal, sign }) => {
  const [number, setNumber] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);
  const handleScroll = () => {
    const container = document.querySelector(".counter");

    const rect = container.getBoundingClientRect();
    const isInViewPort = rect.top >= 0 && rect.bottom <= window.innerHeight;
    if (isInViewPort && !animationStarted) {
      setAnimationStarted(true);
      const increamentInterval = setInterval(() => {
        setNumber((num) => Math.min(num + 1, parseInt(dataVal)));
        if (number === parseInt(dataVal)) clearInterval(increamentInterval);
      }, 30);
    }

  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animationStarted]);
  return (
    <div className="counter">
      <div>{children}</div>
      <h4 id="my-element" data-bound={dataVal}>
        {`${number}${sign.split(" ")[1]}`}
      </h4>
      <p>{title}</p>
    </div>
  );
};

export default Counter;
