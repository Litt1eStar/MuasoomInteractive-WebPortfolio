import MemberCard from "../../../components/MemberCard/MemberCard";
import styles from "./TeamMember.module.css"

import WoodyImage from "../../../img/Member/Wood.png";
import BrightImage from "../../../img/Member/Bright.png";
import KaoImage from "../../../img/Member/Kao.png";
import NeImage from "../../../img/Member/Ne.png";
import Ninew from "../../../img/Member/Ninew.png";
import PepperImage from "../../../img/Member/Pep.png";
import PunImage from "../../../img/Member/Pun.png";
import ShogunImage from "../../../img/Member/Shogun.png";
import TamImage from "../../../img/Member/Tam.png";

const TEAM_MEMBERS = [
  {id: 1, name: "Woody", role: "Project Manager, Lead Dev", imageUrl: WoodyImage},
  {id: 2, name: "Kao", role: "Developer", imageUrl: KaoImage},
  {id: 3, name: "Pepper", role: "Developer", imageUrl: PepperImage},
  {id: 4, name: "Tam", role: "Developer", imageUrl: TamImage},
  {id: 5, name: "Ne", role: "Developer", imageUrl: NeImage},
  {id: 6, name: "Pun", role: "UX/UI Designer", imageUrl: PunImage},
  {id: 7, name: "Shogun", role: "UX/UI Designer", imageUrl: ShogunImage},
  {id: 8, name: "Ninew", role: "UX/UI Designer", imageUrl: Ninew},
  {id: 9, name: "Bright", role: "Developer", imageUrl: BrightImage},
]

const TeamMember = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.title}>MEET OUR SAVAGE TEAMS</div>
            <div className={styles.memberContainer}>
              {TEAM_MEMBERS.map((member) => (
                <MemberCard
                  key={member.id} 
                  name={member.name} 
                  role={member.role} 
                  imageUrl={member.imageUrl} />
              ))}
            </div>
        </div>
    </>
  )
};

export default TeamMember;
