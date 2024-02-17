/* eslint-disable react/prop-types */

const Sidebar = ({ open }) => {
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className={`relative overflow-hidden z-40 bg-primarycl  ${open ? "w-52" : "w-20"}`}>
      <div className="fixed h-full">
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li key={index} className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"}`}>
              <img src={`./src/assets/${Menu.src}.png`} alt={Menu.title} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>{Menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
