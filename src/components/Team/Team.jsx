import { Typography } from '@material-ui/core'
import React from 'react'
import Button from '../Button/Button'
const Team = () => {
    return (
        <div>
            <div className="box">
                <img src={img1} alt="team member 1"/>
                <Typography>Aslam Jaan</Typography>
                <Typography>President</Typography>
                <Button text="Learn More"/>
            </div>
            
        </div>
    )
}

export default Team
