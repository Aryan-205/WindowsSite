import useStore from "../store/feature"

interface LogoButtonProps{
  img:string,
  comp:string,
  width:string
}

const TabButton:React.FC<LogoButtonProps> = ({img, comp, width}) => {
  const setActiveComponent = useStore((state) => state.setActiveComponent); 

  const handleClick = () => {
    setActiveComponent(comp);
  };

  return (
    <button onClick={handleClick}>
      <img src={img} className={`${width} object-contain`} alt="" />
    </button>
  );
};
export default TabButton