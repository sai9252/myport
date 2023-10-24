import React from 'react'
import"./skills.css"

const Skills = () => {

    const skills_data=[
        {
            name:"HTML-5",
            percent:"80%"
        },
        {
            name:"CSS - 3",
            percent:"75%"
        },
        {
            name:"Bootstrap",
            percent:"60%"
        },
        {
            name:"Javascript",
            percent:"50%"
        },
        {
            name:"Adobe Illustrator",
            percent:"75%"
        },
        {
            name:"Adobe Photoshop",
            percent:"60%"
        }
        
    ]


    // console.log(skills_data[0].name)

    return (
    <div  id="skills" className='skill-head'>
        <div className="skills">
            <div className="skill-my">My <span className="skill-skill">Skills</span></div>
            {/* <div className="service-line"><hi>______________________________________</hi></div> */}
        </div>
        <div className='skill-data'>
            {
            skills_data.map((i,j) => {
                return (        
                <div className="sk-main">
                <div className='skill-name1 skill-names'>{i.name}</div>
                <div className="sk-1">
                <div className='skill-rate1 '><div className={'skill-rate'+(j+2).toString()}></div></div>
                <div className='skill-percent1 skill-percent'>{i.percent}</div>
                </div>
                </div>
                )

            }) 
            }




        </div>

        {/* <div className="skill-percent">
        <div className='skill-percent1'>75%</div>
        <div className='skill-percent1'>60%</div>
        <div className='skill-percent1'>50%</div>
        <div className='skill-percent1'>75%</div>
        <div className='skill-percent1'>60%</div>
    </div>

        <div className='skill-name1'>CSS - 3</div>
        <div className='skill-name1'>Bootstrap</div>
        <div className='skill-name1'>JavaScript</div>
        <div className='skill-name1'>Adobe Photoshop</div>
        <div className='skill-name1'>Adobe Illustrator</div> 


        <div className='skill-rate'>
        <div className='skill-rate1 '><div className='skill-rate3'>.</div></div>
        <div className='skill-rate1 '><div className='skill-rate4'>.</div></div>
        <div className='skill-rate1 '><div className='skill-rate5'>.</div></div>
        <div className='skill-rate1 '><div className='skill-rate6'>.</div></div>
        <div className='skill-rate1 '><div className='skill-rate7'>.</div></div>
        </div> */}
    </div>
    )
}

export default Skills