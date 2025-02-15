import React from 'react';

function Chat() {
  return (
    <div>
      <div className="container mx-auto shadow-lg rounded-lg mt-2">
        {/* Header */}
        <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
          <div className="font-semibold text-2xl">GoingChat</div>
          <div className="w-1/2">
            <input
              type="text"
              name=""
              id=""
              placeholder="search IRL"
              className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
            />
          </div>
          <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
            RA
          </div>
        </div>
        
        <div className="flex flex-row justify-between bg-white">
          {/* Chat List */}
          <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
            {/* Search Component */}
            <div className="border-b-2 py-4 px-2">
              <input
                type="text"
                placeholder="search chatting"
                className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
              />
            </div>
            
            <div className="flex flex-row py-4 px-2 justify-center items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Luis1994</div>
                <span className="text-gray-500">Pick me at 9:00 AM</span>
              </div>
            </div>
            <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://source.unsplash.com/otT2199XwI8/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Everest Trip 2021</div>
                <span className="text-gray-500">Hi Sam, Welcome</span>
              </div>
            </div>
            <div className="flex flex-row py-4 px-2 items-center border-b-2 border-l-4 border-blue-400">
              <div className="w-1/4">
                <img
                  src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">MERN Stack</div>
                <span className="text-gray-500">Luis: Thanks Everyone</span>
              </div>
            </div>
            <div className="flex flex-row py-4 px-2 items-center border-b-2">
              <div className="w-1/4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="object-cover h-12 w-12 rounded-full"
                  alt=""
                />
              </div>
              <div className="w-full">
                <div className="text-lg font-semibold">Javascript Indonesia</div>
                <span className="text-gray-500">Evan: Someone can fix this</span>
              </div>
            </div>
            {/* End User List */}
          </div>
          {/* End Chat List */}
          {/* Message */}
          <div className="w-full px-5 flex flex-col justify-between">
            <div className="flex flex-col mt-5">
              {/* Message from other user */}
              <div className="flex justify-start mb-4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
                <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                  at praesentium, 
                </div>
              </div>
              {/* End Message from other user */}
              {/* Message from current user */}
              <div className="flex justify-end mb-4">
                <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                  Welcome to the group everyone!
                </div>
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
              </div>
              <div className="flex justify-start mb-4">
                <img
                  src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                  className="object-cover h-8 w-8 rounded-full"
                  alt=""
                />
                <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                  at praesentium,
                </div>
              </div>
              {/* End Message from current user */}
            </div>
            <div className="py-5">
              <input
                className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                type="text"
                placeholder="type your message here..."
              />
            </div>
          </div>
          {/* End Message */}
          <div className="w-2/5 border-l-2 px-5">
            <div className="flex flex-col">
              <div className="font-semibold text-xl py-4">Mern Stack Group</div>
              <img
                src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
                className="object-cover rounded-xl h-64"
                alt=""
              />
              <div className="font-semibold py-4">Created 22 Sep 2021</div>
              <div className="font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
                perspiciatis!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
