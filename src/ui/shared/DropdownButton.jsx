import { useEffect, useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

function DropdownButton({ children, dropdownContent, onSelect, openModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleItemClick = (item) => {
    onSelect(item);
    if (openModal) {
      openModal(true);
    }
    setIsOpen(false);
  };
  return (
    <div className="relative inline-block" ref={buttonRef}>
      <button
        onClick={toggleDropdown}
        className="p-2 md:h-10 text-sm md:text-base bg-[#2AD5A5] text-white font-semibold flex justify-center items-center gap-1 rounded-xl"
      >
        {children}
        <FaChevronDown 
        className={`text-white transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-2 w-[150px] absolute z-10 top-full right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
          <ul>
            {dropdownContent.map((item) => (
              <li key={item.id}>
                <button onClick={() => handleItemClick(item.type)}>
                  {item.type}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownButton;