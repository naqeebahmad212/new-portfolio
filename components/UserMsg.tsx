"use client";
import { Message } from "@prisma/client";
import React, { useState } from "react";

interface MessageProps {
  userMessages: Message[];
}

const UserMsg = ({ userMessages }: MessageProps) => {
  const [selectedId, setSelectedId] = useState<string>("");

  const found = userMessages.find((msg) => msg.id == selectedId);
  let i = 1;
  return (
    <div className="w-full">
      <div className="p-10 mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Message</th>
                <th>Received</th>
              </tr>
            </thead>
            <tbody>
              {userMessages.map((message) => (
                <tr
                  key={message.id}
                  onClick={() => {
                    window.location.href = "#my_modal_8";
                    setSelectedId(message.id);
                  }}
                >
                  <th>{i++}</th>
                  <td>{message.name}</td>
                  <td>
                    {/* <a key={message.id} href="#my_modal_8" className=""> */}{" "}
                    {message.message} {/* </a> */}
                  </td>
                  <td>
                    {new Date(message.createdAt).toDateString().slice(3, 10)}
                  </td>

                  {/* Put this part before </body> tag */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {found && <SelectedMsg userMsg={found} />}
    </div>
  );
};

export default UserMsg;

const SelectedMsg = ({ userMsg }: { userMsg: Message }) => {
  return (
    <div className="modal" role="dialog" id="my_modal_8">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{userMsg.name}</h3>
        <p className="py-4">{userMsg.message}</p>
        <div className="modal-action">
          <a href="#" className="btn">
            Close
          </a>
        </div>
      </div>
    </div>
  );
};
