import React from 'react';
import { secNavData } from '../../components/Nav/DataNav';

const importantMenus = [
  "Academic Programs",
  "Admissions",
  "Fees & Scholarships",
  "Student Life",
  "Downloadable Resources",
  "Apply Now"
];

// Define six different colors
const colors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500"
];

const MenuItems = () => {
  const filteredMenus = secNavData.filter(menu => importantMenus.includes(menu.name.trim()));

  return (
    <div className="xl:mx-32 md:mx-20 mx-8">
      <div className="grid md:grid-cols-3 grid-cols-3 gap-0">
        {filteredMenus.map((menu, index) => (
          <div key={menu.name} className={`p-6 ${colors[index % colors.length]} border border-white shadow-lg md:h-40`}>
            <center><menu.icon className="h-8 w-auto fill-white"/></center>
            <h1 className="md:block hidden text-center mt-4 font-semibold text-white">{menu.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
