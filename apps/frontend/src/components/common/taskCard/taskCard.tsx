// NOTE: IGNORE THIS FILE FOR NOW.
// CURRENTLY NOT USED, AND DOES NOT WORK.
// - JOSH







// import "./taskCard.css"
// import { useState } from "react";

// import StarRating from "../starRating/starRating";
// import type { starType } from "../../../types/models/starType";

// function TaskCard() {
//     const [stars] = useState<starType>({difficulty: "hard"});

//     return (
//             <div
//                 className="
//                     bg-white
//                     shadow-[0.35rem_0.35rem_#545454]
//                     border border-[rgb(217,216,216)]
//                     rounded-[12px]
//                     p-8
//                     max-w-[20rem]
//                     text-black
//                     text-left
//                     m-0
                
//             ">
//                 {/*prop passed to fill  */}
//                 <div className="
//                     flex
//                     justify-between
//                 ">
//                     <h1 className="
//                     m-0
//                     text-2xl
//                     ">
//                         Sample Task
//                     </h1>
//                     <p>&#8942;</p> {/** TEMPORARY */}
//                 </div>
//                 <StarRating
//                 star={stars}
//                 />
//                 <div className="
//                     rounded-[9px]
//                     text-[#545454]
//                 ">
//                     {/*prop passed to fill  */}
//                     <p className="
//                         m-0
//                         text-1xl
//                         pb-2
//                         pt-2
//                     ">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//                         Integer sed elit tempor, sodales massa eu, venenatis neque. 
//                         In hac habitasse platea dictumst. 
//                         Curabitur eget nisl id leo placerat ornare at eget lacus.                    
//                     </p>
//                     {/*prop passed to fill  */}
//                     <div className="task-assignee-container">
//                         <p>John Smith</p>
//                     </div>
//                     <div className="task-date-container">
//                         {/*prop passed to fill  */}
//                         <p>Date: Lorem Ipsum</p>
//                     </div>
//                 </div>
//             </div>
//     )
// };

// export default TaskCard;