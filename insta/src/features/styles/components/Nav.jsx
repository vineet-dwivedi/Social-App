// import React from "react";
// import { Search, PlusSquare, Heart, User } from "lucide-react";
import "../../styles/nav.scss";

// const Nav = () => {
//   return (
//     <nav className="nav">
//       <div className="nav-container">
        
//         {/* Left - Logo */}
//         <div className="nav-left">
//           <h2 className="logo">InstaX</h2>
//         </div>

//         {/* Center - Search */}
//         <div className="nav-center">
//           <div className="search-box">
//             <Search size={18} className="search-icon" />
//             <input type="text" placeholder="Search..." />
//           </div>
//         </div>

//         {/* Right - Actions */}
//         <div className="nav-right">
//           <PlusSquare className="icon" />
//           <Heart className="icon" />
//           <User className="icon" />
//           <button className="primary-btn">New Post</button>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Nav;

import React from "react";
import { Search, Plus, Heart, User } from "lucide-react";


const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-inner">

        {/* Logo */}
        <div className="nav-left">
          <h1 className="logo">InstaX</h1>
        </div>

        {/* Search */}
        <div className="nav-center">
          <div className="search-wrapper">
            <Search size={18} />
            <input type="text" placeholder="Search creators..." />
          </div>
        </div>

        {/* Right Actions */}
        <div className="nav-right">
          <div className="icon-3d">
            <Heart size={20} />
          </div>

          <div className="icon-3d">
            <User size={20} />
          </div>

          <button className="new-post-btn">
            <Plus size={18} />
            <span>New</span>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Nav;