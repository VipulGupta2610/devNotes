import { IoLogoReact } from "react-icons/io5";
import { FaCalculator } from "react-icons/fa";
import { SlChemistry } from "react-icons/sl";
import { MdComputer } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { PiPlantFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { AddItem } from "../../redux/abcSlice";
import { FaPython } from "react-icons/fa";


function Notes() {
    const dipatch = useDispatch();
    // const items = useSelector(state => state)
    // const [clck, setclck] = useState(items)

    useEffect(() => {
        const shouldReload = sessionStorage.getItem('shouldReload')
        if (shouldReload === 'true') {
            sessionStorage.removeItem('shouldReload')
            window.location.reload();
        }
    }, [])



    const subjects = [{
        "subject": "DBMS",
        "photo": <IoBookOutline />
    },
    {
        "subject": "Python",
        "photo":<FaPython />
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
        "photo": <PiPlantFill />
    },
    {
        "subject": "CS",
        "photo": <MdComputer />
    },
    {
        "subject": "Maths",
        "photo": <FaCalculator />
    },
    ]

    return <>

        <div className='sm:mt-20 mt-15' data-aos="fade-up"
            data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
            <div className='sm:w-[40vw] sm:mx-auto w-[85vw] mx-auto sm:pt-15 pt-20'>
                <div className='grid items-center bg-gradient-to-r from-violet-700 to-pink-400 sm:h-[30vh] sm:w-[40vw] sm:mt-0 rounded-3xl sm:grid sm:justify-around sm:items-center text-center h-[40vh] w-[85vw] shadow-2xl shadow-gray-400'>
                    <p className='font-semibold text-4xl text-white sm:mt-10 sm:my-0 mt-15'>
                        Free Chapter-wise Notes
                    </p>
                    <p className='font-semibold text-2xl text-white text-center sm:mb-10 mb-10  '>
                        Secure and Fast
                    </p>
                    <div className='text-center  dark:text-black'> <button id='btn' className='bg-white w-[180px] p-2 text-center rounded-2xl text-xl font-semibold mb-20 cursor-pointer hover:opacity-80'
                        onClick={
                            () => {
                                return window.scrollTo({
                                    top: window.innerHeight / 2,
                                    behavior: 'smooth'
                                });
                            }
                        }
                    >Get Started</button></div>
                </div>
            </div>
            <div className='text-4xl font-bold text-center my-20 '>
                <p>Subjects</p>
            </div>
            <Link to="/Anote">

                <button className='flex justify-around sm:w-[40vw] w-[70vw] mx-auto flex-wrap gap-20 my-5 mb-15'
                // onClick={()=>{
                //     dipatch(AddItem(e.subject))
                // }}
                >
                    {

                        subjects.map((e) => {
                            return <>


                                <div key={e.subject} className='sm:w-[200px] h-[200px] w-[230px] flex justify-between items-center flex-col  p-10 shadow-2xl shadow-gray-400  rounded-3xl hover:scale-110 cursor-pointer dark:bg-blue-950 dark:shadow-gray-600'
                                    onClick={() => {
                                        dipatch(AddItem(e.subject))
                                        cat(e)
                                    }}
                                >
                                    <div className='text-5xl'>{e.photo}</div>
                                    <div className="flex justify-start items-center flex-col gap-[10px] text-2xl">
                                        <span className='font-semibold '>{e.subject}</span>
                                        {/* <span className="price">{ }</span>
                                        <button onClick={() => {

                                        }}></button> */}
                                    </div>
                                </div>


                            </>
                        })

                    }
                </button></Link>

        </div>
    </>
}

export default Notes
