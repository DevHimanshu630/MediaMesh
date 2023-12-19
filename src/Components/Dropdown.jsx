import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'

function Dropdown() {
    return (
    
                <div className=' flex gap-16 items-start justify-start   '>
                    <div className='w-[15vw] shadow-md rounded-md hover:shadow-lg h-[30vh]'>
                        <img src="https://www.pickcel.com/assets/img/menu-icon/product-01.jpg" alt="" />
                    </div>
                    <div className=' grid grid-cols-3 w-[70%] h-80  ' >
                        <div className=' h-full'>
                            <a href="/retail" class="block hover:bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800] rounded-lg hover:text-white   text-start">Retail</a>
                            <a href="/healthcare" class="block hover:bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800]  rounded-lg hover:text-white   text-start">Healthcare</a>
                            <a href="/hospitality" class="block hover:bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800]  rounded-lg hover:text-white   text-start">Hospitality</a>
                            <a href="/corporate" class="block hover:bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800]  rounded-lg hover:text-white   text-start">Corporate</a>
                        </div>
                        <div className=''>
                            <a href="#" class="block hover:bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800] rounded-lg hover:text-white   text-start">Link 1</a>
                            <a href="#" class="block hover:bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800] rounded-lg hover:text-white   text-start">Link 2</a>
                            <a href="#" class="block hover:bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800] rounded-lg hover:text-white   text-start">Link 3</a>
                        </div>
                        <div className=''>
                            <a href="#" class="block hover:bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800] rounded-lg hover:text-white   text-start">Link 1</a>
                            <a href="#" class="block hover:bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800] rounded-lg hover:text-white   text-start">Link 2</a>
                            <a href="#" class="block hover:bg-gradient-to-r from-[#fd0036] via-[#ff5100] to-[#ffa800] rounded-lg hover:text-white   text-start">Link 3</a>
                        </div>

                    </div>
                </div>
   
   
    )
}

export default Dropdown
