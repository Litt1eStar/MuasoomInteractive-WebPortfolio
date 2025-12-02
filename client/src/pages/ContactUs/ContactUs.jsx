import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import styles from "./ContactUs.module.css"
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import Button from '@mui/material/Button';

const ContactUs = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.title}>GET IN TOUCH WITH US</div>
          <div className={styles.item}>
            <FaLocationDot size={50} />
            <div>King Mongkut's University of Technology Thonburi, 126 Pracha Uthit Road, Bang Mot Subdistrict, Thung Khru District, Bangkok 10140</div>
          </div>
          <div className={styles.item}>
            <IoMail size={50} />
            <div>contact@kmutt.ac.th</div>
          </div>
          <div className={styles.item}>
            <IoCall size={50} />
            <div>0 2470 8000, 8035</div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.inputItem}>
            <div className={styles.subHeader}>Name</div>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className={styles.inputItem}>
            <div className={styles.subHeader}>Company Name</div>
            <input type="text" placeholder="Your Company Name" />
          </div>
          <div className={styles.inputItem}>
            <div className={styles.subHeader}>Email</div>
            <input type="text" placeholder="Your Email" />
          </div>
          <div className={styles.inputItem}>
            <div className={styles.subHeader}>Phone Number</div>
            <input type="text" placeholder="Your Phone Number" />
          </div>
          <div className={`${styles.inputItem}`}>
            <div className={styles.subHeader}>Service Needed</div>
            <Select sx={{ backgroundColor: "white", width: {xs: '100%'}, color: 'black'}}>
              <MenuItem sx={{ color: 'black'}}>Videography</MenuItem>
              <MenuItem sx={{ color: 'black'}}>Photography</MenuItem>
              <MenuItem sx={{ color: 'black'}}>2D Animation</MenuItem>
              <MenuItem sx={{ color: 'black'}}>3D Animation</MenuItem>
              <MenuItem sx={{ color: 'black'}}>Colour Grading</MenuItem>
              <MenuItem sx={{ color: 'black'}}>Editing</MenuItem>
              <MenuItem sx={{ color: 'black'}}>Game Development</MenuItem>
              <MenuItem sx={{ color: 'black'}}>Website Development</MenuItem>
            </Select>
          </div>
          <div className={styles.inputItem}>
            <div className={styles.subHeader}>Project Detail</div>
            <input type="text" placeholder="Write Down Your Project Detail" />
          </div>
        <Button variant='contained' color='success' sx={{height: '5rem', fontSize: '2rem'}}>Submit</Button>
        </div>
      </div>
    </>
  )
};

export default ContactUs;
