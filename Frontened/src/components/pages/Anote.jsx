import { IoSearchOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import banner from "../../assets/Banner.png";
import { FaAngleLeft } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaMicrophone } from "react-icons/fa";


function Anote() {


  const items = useSelector((state) => state);
  console.log(items);
  const [clck, setclck] = useState(items);

  const [store, setstore] = useState([]);
  const [data, setdata] = useState("");

  useEffect(() => {
    const getNote = async () => {
      try {
        const res = await axios.get("http://localhost:4002/note");
        console.log(res.data);
        setstore(res.data);
      } catch (error) {
        console.log("Error is " + error);
      }
    };
    getNote();
  }, []);

  const getdata = (e) => {
    // console.log(e.target.value);
    setdata(e.target.value);
  };

  const filtertwo = store.filter((curValue) => {
    return (
      curValue.subject.includes(clck.cart) &&
      curValue.name.toLowerCase().includes(data)
    );
  });

  const navigate = useNavigate();

  const handlereload = () => {
    sessionStorage.setItem("shouldReload", true);
    navigate("/notes");
  };

  const microphone = (text) => {
    window.speechSynthesis.cancel();
    let voices = window.speechSynthesis.getVoices();
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-GB";
    speech.voice = voices.find(v => v.lang === "en-GB") || voices[0];
    window.speechSynthesis.speak(speech);
  }
  function wishMe() {
  let hour = new Date().getHours();
  if (hour >= 0 && hour < 12) {
    speak("Good morning sir");
  } else if (hour >= 12 && hour < 16) {
    speak("Good afternoon sir");
  } else {
    speak("Good evening sir");
  }
}

  // const getdata = (e) => {

  //     console.log(e.target.value);
  //     setdata(e.target.value)

  // }

  // const filterout = store.filter((curValue) => {
  //     return curValue.name.toLowerCase().includes(data) || curValue.subject.toLowerCase().includes(data)

  // })

  return (
    <>
      <div className=" w-[100vw] mx-auto ">
        <div className="text-center flex gap-5 sm:ml-130 sm:gap-20 ml-0 sm:mt-20 mt-15 dark:text-black">
          {/* <Link to="/Notes"> */}
          <button
            className="flex justify-around items-center sm:gap-1  bg-indigo-50 rounded-4xl sm:w-[55px] w-[75px] h-[40px] cursor-pointer mt-15  sm:flex sm:mt-15 "
            onClick={handlereload}
          >
            <div>
              <FaAngleLeft />
            </div>
            <p className="sm:hidden hidden text-xl font-semibold  py-1 pr-1">Back</p>
          </button>
          {/* </Link> */}
          <form action="">
            <div className="w-[30vw] mx-auto rounded-4xl sm:mt-15 mt-15 flex justify-around items-center gap-2">
              {/* <div className="text-center h-[2px] mt-5 -top-2 left-3 "><IoSearchOutline /></div> */}
              <input
                onChange={getdata}
                className="bg-gray-100 p-3 sm:w-[30vw] sm:mx-auto w-[60vw] mx-auto rounded-4xl focus:outline-none focus:ring-2 focus:ring-indigo-500 mr-9/25 dark:text-black"
                type="text"
                placeholder="Search Chapters Here.."
              />
              <div onClick={wishMe} className="text-2xl bg-gray-100 rounded-full p-3 cursor-pointer hover:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <FaMicrophone />
              </div>
            </div>
          </form>
        </div>
        <div>
          <div>
            <h1 className="text-black text-center font-bold text-3xl sm:my-15 my-20 dark:text-white">
              {" "}
              Suggested notes
            </h1>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="flex justify-around items-center sm:w-[60vw] sm:mx-auto w-[75vw] mx-auto flex-wrap wrap-normal space-y-15 text-center "
        >
          {filtertwo.map((e) => {
            return (
              <div>
                <div className=" text-center sm:h-[42vh] h-[45vh] sm:w-[18vw] w-[75vw] mx-auto rounded-3xl shadow-2xl shadow-gray-400 dark:shadow-gray-700 hover:scale-105 transition dark:bg-gray-800 dark:text-black">
                  <div className=" flex justify-around ">
                    <img className="h-[150px] mt-3" src={banner} alt="" />
                  </div>
                  <div className="flex justify-around my-2">
                    <h2 className="bg-green-100 px-2 py-1 rounded-3xl text-green-800">
                      {e.subject}
                    </h2>
                    <h2 className="bg-blue-100 px-2 py-1 rounded-3xl text-blue-800">
                      Unit:
                      {e.unit}
                    </h2>
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold my-3 dark:text-gray-100">
                      {e.name}
                    </h1>
                  </div>
                  <div className="my-3 dark:text-gray-200">
                    <p className="">{e.description}</p>
                  </div>
                  <a href={e.downloadUrl} downnload>
                    <div className="flex mt-2 justify-center items-center gap-2 bg-indigo-100  w-[120px] mx-auto rounded-2xl py-2 font-semibold hover:opacity-70 hover:scale-95 cursor-pointer">
                      <div>
                        <HiDownload />
                      </div>
                      <h1>Download</h1>
                    </div>
                  </a>
                  <a href={e.viewUrl} target="_blank">
                    <div className="flex mt-2 justify-center items-center gap-2 bg-rose-100  w-[120px] mx-auto rounded-2xl py-2 font-semibold hover:opacity-70 hover:scale-95 cursor-pointer">
                      <div>
                        <FaEye />
                      </div>
                      <h1>View</h1>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Anote;
