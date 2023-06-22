import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
      
        
            sx={{ 
                width: '150px',
                color: 'success.main',
                '& .MuiSlider-thumb': {
                    width:"18px",
                    height:'18px',
                    color: "#f7faf6",
                    border:'1px solid #00CC22'
                },
                '& .MuiSlider-track': {
                    color: "#00CC22;"
                },
                '& .MuiSlider-rail': {
                    color: "#8B8B8B;"
                },
                '& .MuiSlider-active': {
                    color: "#00CC22"
                },
                '& .MuiSlider-thumb::after ':{
                    content: '""',
                    width:'6px',
                    height:"6px",
                    background:"#00CC22;"
                }
                // стили для слайдера // пишет студент
                
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
