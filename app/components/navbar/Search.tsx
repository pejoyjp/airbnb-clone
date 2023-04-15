import React from 'react'
import {ImSearch} from 'react-icons/im'
type Props = {}

const Search = (props: Props) => {
  return (
    <div className='border-[1px] w-full md:w-auto rounded-full shadow-sm
                    hover:shadow-md transition cursor-pointer'>
        <div className='flex items-center justify-between h-10'>
            <div className='text-sm font-semibold px-6'>
                Anywhere
            </div>

            <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
                Any Week
            </div>

            <div className='text-sm pl-6 pr-2 text-gray-600 flex items-center gap-3'>
                <div className='hidden sm:block'>
                    Add Guests
                </div>
                <div className='p-2 bg-rose-500 rounded-full text-white'>
                    <ImSearch size={13}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search