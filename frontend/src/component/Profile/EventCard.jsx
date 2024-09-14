import React from 'react'
import CardMedia from '@mui/material/CardMedia'
import { Card, CardActions, CardContent, Typography, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}>
            <CardMedia sx={{height:345}} image="https://th.bing.com/th/id/OIP.bfXGR_2kE5legWu3CGUsOAHaE8?rs=1&pid=ImgDetMain" />
            <CardContent>
                <Typography variant='h5'>
                    Ceylon Fast Food
                </Typography>
                <Typography variant='body2'>
                    50% off on your first order.
                </Typography>
                <div className="py-2 space-y-2">
                    <p>{"Colombo"}</p>
                    <p className='text-sm text-blue-500'>June 07, 2024 12:00 AM</p>
                    <p className='text-sm text-red-500'>June 10, 2024 12:00 AM</p>
                </div>
            </CardContent>
            {false && <CardActions>
                <IconButton>
                  <DeleteIcon/>
                </IconButton>
            </CardActions>}
        </Card>
    </div>
  )
}
