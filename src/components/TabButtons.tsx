import useStore from "../store/feature"

interface LogoButtonProps{
  img:string,
  comp:string
}

const TabButton:React.FC<LogoButtonProps> = ({img, comp}) => {
  const setActiveComponent = useStore((state) => state.setActiveComponent); 

  const handleClick = () => {
    setActiveComponent(comp);
  };

  return (
    <button onClick={handleClick}>
      <img src={img} className="w-8 h-8 object-contain" alt="" />
    </button>
  );
};
export default TabButton