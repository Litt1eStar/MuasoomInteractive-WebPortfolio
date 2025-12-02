import CheckboxComponent from "../../../components/Checkbox/Checkbox";
import styles from "./Main.module.css"
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import WorkCard from "../../../components/WorkCard/WorkCard";

import WORKS_DATA from "../../../data/worksData";
import { useMemo, useState } from "react";

const ALL_CATEGORIES = [
    "Videography", "Photography", "2D Animation", "3D Animation", 
    "Editing", "Colour Grading", "Website Development", "Game Development"
];

const Main = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryChange = (category) => {
        setSelectedCategories(prevSelected => {
            if(prevSelected.includes(category)){
                return prevSelected.filter(c => c != category);
            }else{
                return [...prevSelected, category];
            }
        })
    }

    const filteredWorks = useMemo(() => {
        if(selectedCategories.length == 0 || selectedCategories.includes("See All Projects")){
            return WORKS_DATA;
        }

        return WORKS_DATA.filter(work => {
            return selectedCategories.some(selectedCat => work.types.includes(selectedCat));
        });
    }, [selectedCategories]);

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
                    <CheckboxComponent 
                        title="See All Projects" 
                        checked={selectedCategories.includes("See All Projects")}
                        onChange={() => handleCategoryChange("See All Projects")}
                    />
                    {ALL_CATEGORIES.map(category => (
                        <CheckboxComponent 
                            key={category}
                            title={category}
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.group}>
                    {filteredWorks.map((work) => (
                        <WorkCard 
                            key={work.id} 
                            id={work.id} 
                            imageUrl={work.imageUrl} 
                            types={work.types} 
                        />
                    ))}
                </div>
                {filteredWorks.length === 0 && (
                    <p style={{color: 'white', padding: '20px', fontSize: '1.2rem'}}>No projects match the selected criteria.</p>
                )}
            </div>
        </div>
    </>
  )
};

export default Main;
