import { Typography } from '@mui/material'
import React from 'react'

const Content = () => {
    return (
        <div>
            <Typography variant='h3' component="h3" padding={2}>Objective</Typography>
            <Typography variant='p' component='p' padding={2}>
                I want to have an experience that will enhance my knowledge and skills for a better future ahead.
                <br />
                I'm seeking a competitive and challenging environment where I can serve your organization and
                <br />establish an enjoyable career for myself.
            </Typography>

            <Typography variant='h3' component="h3"  padding={2}>Skills Summary</Typography>
            <Typography variant='p' component='p' padding={2}>
                I am knowledgeable about working in a computer-based environment with efficiency.
                <br />
                Known programming languages:
                <ul>
                    <li> ReactJs</li>
                    <li> HTML5</li>
                    <li> Boostrap</li>
                    <li> ReactJs</li>
                </ul></Typography>
        </div>
    )
}

export default Content