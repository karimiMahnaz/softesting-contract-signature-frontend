import React, {useState, useEffect, useContext} from 'react';

import '../styles/slideShow.scss';
import { VisibilityContext } from '../contexts/visibilityContext';

export default function SlideShow({images=[], interval=8000}){
    const [thumbnails, setThumnails] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    // const [previousSlideStyle, setPreviousSlideStyle] = useState({});
    // const [nextSlideStyle, setNextSlideStyle] = useState({});
    const [currentSlideStyle, setCurrentSlideStyle] = useState({});
    const { loginFrmShow, registerFrmShow,  resetPassFrmShow } = useContext(VisibilityContext);
    useEffect(()=>{
        setThumnails(images);
        setCurrentSlideStyle({
            backgroundImage: "url('"+images[currentSlide]+"')"
        });

        // if(currentSlide>0){
        //     setPreviousSlideStyle({
        //         backgroundImage: "url('"+images[currentSlide-1]+"')"
        //     });
        // }else{
        //     setPreviousSlideStyle({
        //         backgroundImage: "url('"+images[images.length-1]+"')"
        //     });
        // }

        // if(currentSlide === images.length-1){
        //     setNextSlideStyle({
        //         backgroundImage: "url('"+images[0]+"')"
        //     });
        // }else{
        //     setNextSlideStyle({
        //         backgroundImage: "url('"+images[currentSlide+1]+"')"
        //     });
        // } 

        const loop = setInterval(()=>{
            if(currentSlide === images.length-1){
                setCurrentSlide(0);
            }else{
                setCurrentSlide(currentSlide+1);
            }
        }, interval);
        return () => clearInterval(loop); 
    }, [images, currentSlide, interval]);

    function previous(){
        if(currentSlide>0){
            setCurrentSlide(currentSlide-1);
        }else{
            setCurrentSlide(thumbnails.length-1);
        }
    }

    function next(){
        if(currentSlide === thumbnails.length-1){
            setCurrentSlide(0);
        }else{
            setCurrentSlide(currentSlide+1);
        }
    }


    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight -100,
        width: window.innerWidth -100
      });
    
      function debounce(fn, ms) {
        let timer
        return _ => {
          clearTimeout(timer)
          timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
          }, ms)
        };
      }
    
      useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
          setDimensions({
            height: window.innerHeight -100,
            width: window.innerWidth -100
          })
        }, 1000)
    
        window.addEventListener('resize', debouncedHandleResize)
    
        return _ => {
          window.removeEventListener('resize', debouncedHandleResize)
    
        }
      })
console.log('dimensions.height', dimensions.height)
    return (
        <section className="slideshow" style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}>
            <div className="slide-holder">
                {/* <section className="slide previous-slide">
                    <div style={previousSlideStyle} className="slide-thumbnail"></div>
                </section> */}
                <section className="slide current-slide">
                    <div style={currentSlideStyle} className="slide-thumbnail"></div>
                </section>
                {/* <section className="slide next-slide">
                    <div style={nextSlideStyle} className="slide-thumbnail"></div>
                </section> */}
            </div>

            <div className="slideshow-controller">
                <span className="previous" onClick={previous} disabled= {resetPassFrmShow || loginFrmShow || registerFrmShow}></span>
                <span className="next" onClick={next} disabled= {resetPassFrmShow || loginFrmShow || registerFrmShow}></span>
            </div>
        </section>
    )
}