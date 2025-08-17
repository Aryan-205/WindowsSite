
import { motion, useDragControls } from "framer-motion";
import useStore from "../store/feature";

export default function Me() {
  const clearActiveComponent = useStore((state) => state.clearActiveComponent);
  const nightLight = useStore(state => state.nightLight);


  const controls = useDragControls();

  return (
    <motion.div
      drag
      dragControls={controls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      className={`z-10 w-[60%] h-[70%] flex flex-col rounded-lg overflow-hidden shadow-xl ${nightLight ? "bg-gray-900" : "bg-white"}`}
    >

      
    </motion.div>
  );
}