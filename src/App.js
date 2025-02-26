import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Tiles from "./Pages/Tiles";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute"; // Import the ProtectedRoute

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/Tiles"
          element={
            <ProtectedRoute>
              <Tiles />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;



// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import Tiles from "./Pages/Tiles";


// function App () {
//   return (
//         <div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Tiles" element={<Tiles />} />
//         </Routes>
//     </div>
//   );
// };

// export default App;

