import React from 'react'
import Checkbox from './Checkbox'

const PageSelectorItem = ({ title, checked, onClick }) => {
    return (
        <div 
            className='flex justify-between py-2 items-center h-10.5 w-85 px-2 mx-auto cursor-pointer rounded-md transition-colors'
            onClick={onClick}
        >
            <h1 className='font-montserrat text-[14px] text-[#1F2128]'>{title}</h1>
            <Checkbox checked={checked} onChange={() => {}} />
        </div>
    )
}

export default PageSelectorItem