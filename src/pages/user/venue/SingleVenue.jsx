import React from 'react'
import Button from "../ui/shared/Button";
import { GiWaterBottle } from "react-icons/gi";
import { TbFirstAidKit } from "react-icons/tb";
import { FaRestroom } from "react-icons/fa";
import { FaShirt } from "react-icons/fa6";
import VenueCard from "../venue/component/VenueCard";

function SingleVenuePage() {
  return (
    
    <div>
      <div className="bg-[#f5f5f5] max-w-7xl flex flex-col gap-10 p-10 xl:px-0 mt-[98px]">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl md:text-4xl font-bold">Name of the Venue</h1>
        <div className="flex gap-2">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <p className="font-bold text-xl">4.5(26)</p>
            <a href="#" className="text-green-400 text-xl">Rate The Venue</a>
          </div>
      </div>  

      <div className="bg-[#ffffff] w-full h-[300px]"></div>
          <div className="flex flex-col w-full md:flex-row gap-10 md:gap-20">
            <div className="w-full md:w-[600px] bg-[#ffffff] flex flex-col gap-4 p-10">
              <h1 className="text-4xl font-bold">Timing</h1>
              <div className='flex flex-col md:flex-row gap-2'>
              <h1 className="text-xl md:text-2xl">7AM-12AM | Till 1AM</h1>
              <h1 className="text-xl md:text-2xl">ON FRI, SAT, SUN</h1>
              </div>
            </div>
            <div className="w-full md:w-[600px] bg-[#ffffff] p-10 flex flex-col gap-4 items-center">
              <h1 className="text-2xl md:text-4xl font-bold">Book This Venue</h1>
              <Button customClass="md:w-[150px]">BOOK</Button>
            </div>
          </div>
          <div className="flex flex-col bg-[#ffffff] justify-center p-10 gap-10">
            <h1 className="font-bold text-4xl">Amenities</h1>
            <div className="flex flex-col md:flex-row gap-10 text-2xl">
              <div className="flex gap-2 ">
              <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11 6C9.34315 6 8 7.34315 8 9V17C8 17.5523 8.44772 18 9 18C9.55229 18 10 17.5523 10 17V14L12.0045 14C12.2149 13.9987 12.426 13.974 12.6332 13.9395C12.9799 13.8817 13.4575 13.7642 13.9472 13.5194C14.4409 13.2725 14.9649 12.8866 15.3633 12.289C15.7659 11.6851 16 10.9249 16 9.99996C16 9.07499 15.7659 8.31478 15.3633 7.71092C14.9649 7.11332 14.4408 6.7274 13.9472 6.48058C13.4575 6.23573 12.9799 6.11828 12.6332 6.06049C12.4248 6.02575 12.2117 6.0001 12 6H11ZM10 12V9C10 8.44772 10.4477 8 11 8L12.0004 8.00018C12.3603 8.01218 12.7318 8.10893 13.0528 8.26944C13.3092 8.39762 13.5351 8.5742 13.6992 8.82033C13.8591 9.06021 14 9.42497 14 9.99996C14 10.575 13.8591 10.9397 13.6992 11.1796C13.5351 11.4258 13.3091 11.6023 13.0528 11.7305C12.7318 11.891 12.3603 11.9878 12.0003 11.9998L10 12Z" fill="#0F0F0F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"></path> </g></svg>
                <h1>Parking</h1>
              </div>
              <div className="flex gap-2">
              <GiWaterBottle className="w-[30px] h-[30px]" />
                <h1>Drinking Water</h1>
              </div>
              <div className="flex gap-2">
              <TbFirstAidKit className="w-[30px] h-[30px]"/>
                <h1>First Aid</h1>
              </div>
              <div className="flex gap-2">
              <FaRestroom className="w-[30px] h-[30px]"/>
                <h1>Rest Room</h1>
              </div>
              <div className="flex gap-2">
              <FaShirt className="w-[30px] h-[30px]"/>
                <h1>Change Room</h1>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-[#ffffff] justify-center p-10 gap-4">
            <h1 className="font-bold text-4xl">About Venue</h1>
            <div className="flex flex-col gap-2 text-2xl">
              <h1>Description</h1>
              <h1>Description</h1>
              <h1>Description</h1>
              <h1>Description</h1>
            </div>
          </div>

          <div className="flex flex-col bg-[#ffffff] justify-center p-10 gap-4">
            <h1 className="font-bold text-4xl">Terms && Conditions</h1>
            <div className="flex flex-col gap-2 text-2xl">
              <h1>Description</h1>
              <h1>Description</h1>
              <h1>Description</h1>
            </div>
          </div>

          <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl md:text-4xl">Feature Venue</h1>
          <div className="flex">
            <a className="flex items-center font-bold text-xl" href="#">
              more
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6 12H18M18 12L13 7M18 12L13 17"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <VenueCard />
          <VenueCard />
          <VenueCard />
        </div>
      </div>
    </div> 
    </div>
  )
}

export default SingleVenuePage