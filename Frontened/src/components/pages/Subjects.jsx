import React from 'react'


function Subjects() {

    const subjects = [{
        "subject": "Maths",
        "photo": <FaCalculator />
    },
    {
        "subject": "Physics",
        "photo": <IoLogoReact />
    },
    {
        "subject": "Chemistry",
        "photo": <SlChemistry />
    },
    {
        "subject": "Biology",
        "photo": <IoLogoReact />
    },
    {
        "subject": "CS",
        "photo": <MdComputer />
    },
    {
        "subject": "Physics",
        "photo": <IoLogoReact />
    },
    ]

    return <>
        <div className="flex justify-around wi-[40vw] mx-auto">
            <div className='flex w-[150px] mx-auto justify-around flex-wrap flex-col'>
                <div className='w-[150px] h-[200px] flex justify-between items-center flex-col  p-10 shadow-2xl shadow-gray-400  rounded-3xl'>
                    <div className='text-5xl'>{photo}</div>
                    <div className="flex justify-start items-center flex-col gap-[10px] text-2xl">
                        <span className='name'>{subject}</span>
                        {/* <span className="price">{ }</span>
                                        <button onClick={() => {

                                        }}></button> */}
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Subjects
