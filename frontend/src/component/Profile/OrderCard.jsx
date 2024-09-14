import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className="flex items-center space-x-5">
            <img className='h-16 w-16' src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div>
                <p>Biriyani</p>
                <p>LKR 550</p>
            </div>
        </div>
        <div>
            <Button className='cursor-not-allowed'>completed</Button>
        </div>
    </Card>
  )
}
