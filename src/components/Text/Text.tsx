import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Text.css'

const Text = (props: any) => {
  useEffect(() => {
    document.documentElement.style.setProperty('--text-size', props.size);
  }, [])
    const { ref, inView: view } = useInView();
  return (
    <div className='b__Text'>
      <div className={`b__Text-container ${view ? 'show' : ''}`}  ref={ref}>
        <p style={{color:`${props.color}`, fontSize:`${props.size}`, fontStyle: `${props.style}`}}>{props.Text}</p>
      </div>
    </div>
  )
}

export default Text
