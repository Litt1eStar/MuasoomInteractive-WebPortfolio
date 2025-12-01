import React, {useState, useRef, useEffect} from "react";
import styles from "./OurServices.module.css"

import previewImage from '../../../img/Project/Dolorem.jpg'
import { TbHandClick } from "react-icons/tb";

const services = [
  { id: 1, text: 'Videography', image: previewImage},
  { id: 2, text: 'Photography', image: ""},
  { id: 3, text: 'Colour Grading', image: ""}, 
  { id: 4, text: 'Website Development', image: ""},
  { id: 5, text: 'Game Development', image: ""},
  { id: 6, text: '2D Animation', image: ""},
  { id: 7, text: '3D Animation', image: ""},
  { id: 8, text: 'Editing', image: ""},
];


const OurServices = () => {
  const [isFirstTime, setIsFirstTime] = useState(true)
  const [activeIndex, setActiveIndex] = useState(-1);
  const listRef = useRef(null)
  const activeImage = activeIndex !== -1 ? services[activeIndex].image : services[3].image;

  const scrollToActive = (index) => {
    if(listRef.current){
      const activeItem = listRef.current.children[index];
      if(activeItem){
        activeItem.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }
    }
  }

  useEffect(() => {
    scrollToActive(activeIndex);
  }, [activeIndex])

  const handleMouseEnter = () => {
    if(isFirstTime){
      setActiveIndex(3)
      setIsFirstTime(false)
    }
  }

  const handleItemClick = (index) => {
        setActiveIndex(index);
    };

  const scrollUp = () => {
      setActiveIndex(prevIndex => Math.max(0, prevIndex - 1));
  };

  const scrollDown = () => {
      setActiveIndex(prevIndex => Math.min(services.length - 1, prevIndex + 1));
  };

  return (
    <>
      <div className={styles.container} onMouseEnter={handleMouseEnter}>
        <div className={styles.title}>OUR SERVICES</div>
        <div className={styles.box}>
          <div className={styles.leftBox}>
            <div className={styles.arrow} onClick={scrollUp}>↑</div>
            <div className={styles.listWrapper} ref={listRef}>
              {services.map((service, index) => (
                <div 
                    key={service.id} 
                    className={`${styles.serviceItem} ${index === activeIndex ? styles.active : ''}`}
                    onClick={() => handleItemClick(index)}
                >
                    {service.text}
                </div>
              ))}
            </div>
            <div className={styles.arrow} onClick={scrollDown}>↓</div>
          </div>
          <div className={styles.rightBox}>
            {/* <div className={styles.previewImage}></div> */}
            <img src={activeImage} alt="" className={styles.previewImage} />
          </div>
        </div>
        
      </div>
    </>
  )
};

export default OurServices;
