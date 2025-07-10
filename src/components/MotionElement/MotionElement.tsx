import type {FC, ReactNode} from "react";
import {motion} from "framer-motion";
import config from "../../config/config.ts";

interface Props {
    duration?: number,
    children: ReactNode,
}
const defaultDuration = config.menuOpenDuration;

const MotionElement: FC<Props> = ({duration = defaultDuration, children}) => {
    return (
        <motion.div initial={{opacity: 0, scale: 0}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration}}>
            {children}
        </motion.div>
    );
};

export default MotionElement;