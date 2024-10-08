import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const RestaurantCard = () => {
  return (
    <div>
      <Card className="w-[17rem]">
        <div className={`${true?"cursor-pointer":"cursor-not-allowed"} relative`}>
            <img className='w-full h-[10rem] rounded-t-md object-cover' src="https://th.bing.com/th/id/OIP.T56Bd63N3eTV-zxPRwgPVQAAAA?rs=1&pid=ImgDetMain" alt="" />
            <Chip size="small" className="absolute top-2 left-2" color={true?"success":"error"} label={true?"open":'closed'} />
        </div>
        <div className='p-4 textPart lg:flex w-full justify-between'>
            <div className='space-y-1'>
                <p className='font-semibold text-lg'>Ceylon Foods</p>
                <p className='text-gray-500 text-sm'>Colombo, Sri Lanka</p>
            </div>
            <div>
                <IconButton>
                    {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
                </IconButton>
            </div>
        </div>
      </Card>
    </div>
  )
}

export default RestaurantCard
