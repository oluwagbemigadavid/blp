import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Title.css'

const Title = (props: any) => {
  useEffect(() => {
      document.documentElement.style.setProperty('--tittle-size', props.size);
  }, [])
    const { ref, inView: view } = useInView();
  return (
    <div className='b__title'>
      <div className={`b__title-container ${view ? 'show' : ''}`}  ref={ref}>
        <p style={{color:`${props.color}`, fontStyle: `${props.style}`}}>{props.title}</p>
      </div>
    </div>
  )
}

export default Title
