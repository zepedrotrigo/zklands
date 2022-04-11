import { useInView } from 'react-intersection-observer';
import "./Container.css";

function Container({ children }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3, delay: 500 });

    return (
        <div
            ref={ref}
            className={inView ? 'container animate__animated animate__zoomIn' : 'container'}
            style={ inView ? {visibility:'visible'} : {visibility: 'hidden'}}
        >
            {children}
        </div>
    )
}

export default Container;