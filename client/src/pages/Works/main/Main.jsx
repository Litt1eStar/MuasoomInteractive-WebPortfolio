import CheckboxComponent from "../../../components/Checkbox/Checkbox";
import styles from "./Main.module.css"
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import WorkCard from "../../../components/WorkCard/WorkCard";

import WORKS_DATA from "../../../data/worksData";

const Main = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.topContainer}>
                <Button color="primary" variant="contained" sx={{height: '5rem'}}>Show All Project</Button>
                <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel id="work-type-select-label"></InputLabel> 
                    <Select
                        labelId="work-type-select-label"
                        id="work-type-select"
                        label="Type of Works"
                        sx={{ width: {sm: '30%', md: '100%', lg: '100%'} ,height: '5rem', border: '5px solid black', textAlign: 'center'}}
                        defaultValue={"None"}
                    >
                        <MenuItem value={"None"} sx={{color: 'black'}}>None</MenuItem>
                        <MenuItem value={"Videography"} sx={{color: 'black'}}>Videography</MenuItem>
                        <MenuItem value={"Photography"} sx={{color: 'black'}}>Photography</MenuItem>
                        <MenuItem value={"2D Animation"} sx={{color: 'black'}}>2D Animation</MenuItem>
                        <MenuItem value={"3D Animation"} sx={{color: 'black'}}>3D Animation</MenuItem>
                        <MenuItem value={"Editing"} sx={{color: 'black'}}>Editing</MenuItem>
                        <MenuItem value={"Colour Grading"} sx={{color: 'black'}}>Colour Grading</MenuItem>
                        <MenuItem value={"Website Development"} sx={{color: 'black'}}>Website Development</MenuItem>
                        <MenuItem value={"Game Development"} sx={{color: 'black'}}>Game Development</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel id="work-type-select-label"></InputLabel> 
                    <Select
                        labelId="work-type-select-label"
                        id="work-type-select"
                        label="Type of Works"
                        sx={{ width: {sm: '30%', md: '100%', lg: '100%'} , height: '5rem', border: '5px solid black', textAlign: 'center'}}
                        defaultValue={"None"}
                    >
                        <MenuItem value={"None"} sx={{color: 'black'}}>None</MenuItem>
                        <MenuItem value={"Less Than 1 Month"} sx={{color: 'black'}}>Less Than 1 Month</MenuItem>
                        <MenuItem value={"More Than 1 Month"} sx={{color: 'black'}}>More Than 1 Month</MenuItem>

                    </Select>
                </FormControl>
            </div>
            <div className={styles.leftContainer}>
                <div className={styles.categoryTitle}>Type of Works</div>
                <div className={styles.workTypeContainer}>
                    <CheckboxComponent title="See All Projects" />
                    <CheckboxComponent title="Videography" />
                    <CheckboxComponent title="Photography" />
                    <CheckboxComponent title="2D Animation" />
                    <CheckboxComponent title="3D Animation" />
                    <CheckboxComponent title="Editing" />
                    <CheckboxComponent title="Colour Grading" />
                    <CheckboxComponent title="Website Development" />
                    <CheckboxComponent title="Game Development" />
                </div>
                <div className={styles.categoryTitle}>Production Period</div>
                <div className={styles.productionPeriodContainer}>
                    <CheckboxComponent title="Less Than Month" />
                    <CheckboxComponent title="More Than 1 Month" />
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.carousel}>
                    <div className={styles.group}>
                        {WORKS_DATA.map((work) => (
                            <WorkCard id={work.id} imageUrl={work.imageUrl} types={work.types} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
};

export default Main;
