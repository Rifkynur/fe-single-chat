import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";
import useConversation from "../../zustand/useConversation";

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState("");
  const { setSelectedConversation } = useConversation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchInput) return;
    if (searchInput.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (conversation) {
      console.log(conversation);

      setSelectedConversation(conversation);
      setSearchInput("");
    } else {
      toast.error("No such user found!");
    }
  };
  const { conversations } = useGetConversation();
  return (
    <div>
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered rounded-full"
          name="searchInput"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
