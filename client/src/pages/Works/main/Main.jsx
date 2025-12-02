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
    const [selectedWorkType, setSelectedWorkType] = useState("None");
    const [isHoveringGroup, setIsHoveringGroup] = useState(false)

    const handleWorkTypeSelectChange = (event) => {
        const newValue = event.target.value;
        setSelectedWorkType(newValue);
        
        // Convert the single select action into the multi-select state format:
        if (newValue === 'None') {
            handleCategoryChange("See All Projects"); 
        } else {
            handleCategoryChange(newValue); // Add the newly selected category
        }
    };
    
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
                <FormControl sx={{ minWidth: 200 }}>
                    <InputLabel id="work-type-select-label"></InputLabel> 
                    <Select
                        labelId="work-type-select-label"
                        id="work-type-select"
                        label="Type of Works"
                        value={selectedWorkType} 
                        onChange={handleWorkTypeSelectChange}
                        sx={{ backgroundColor: 'white', width: {sm: '30%', md: '100%', lg: '100%'} ,height: '5rem', border: '5px solid black', textAlign: 'center'}}
                        defaultValue={"None"}
                        
                    >
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

            {
                isHoveringGroup && (
                    <div className={styles.scrollHint}>
                        SCROLL FOR MORE PROJECT
                    </div>
                )
            }

            <div className={styles.rightContainer}>
                <div 
                    className={styles.group}
                    onMouseEnter={() => setIsHoveringGroup(true)}
                    onMouseLeave={() => setIsHoveringGroup(false)}
                >
                    {filteredWorks.map((work) => (
                        <WorkCard 
                            key={work.id} 
                            id={work.id} 
                            imageUrl={work.imageUrl} 
                            types={work.types} 
                        />
                    ))}
                </div>

            </div>
        </div>
    </>
  )
};

export default Main;
