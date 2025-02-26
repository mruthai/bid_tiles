import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Tiles = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    navigate("/");
  };
  const totalButtons = 120;
  const [soldButtons, setSoldButtons] = useState(Array(totalButtons).fill(false));

  const toggleSold = (index) => {
    setSoldButtons((prev) => {
      const newSoldButtons = [...prev];
      newSoldButtons[index] = !newSoldButtons[index];
      return newSoldButtons;
    });
  };
  return (
    <div className=" bg-dark vh-100">
      <div className="d-flex justify-content-end p-2">
        <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>Logout</button>
      </div>
      <div className="d-flex justify-content-center">
      <style> {
        `
          .tile{
          width: 125px;
          border: none;
          font-weight: bold;

        }
        `}

      </style>
      <table >
        <tbody>
          {[...Array(Math.ceil(totalButtons / 10))].map((_, rowIndex) => (
            <tr key={rowIndex}>
              {[...Array(10)].map((_, colIndex) => {
                const index = rowIndex * 10 + colIndex;
                if (index >= totalButtons) return null;
                return (
                  <td className="p-2" key={index}>
                    <button
                      className={`tile ${soldButtons[index] ? "btn bg-danger p-3 shadow-sm" : "btn bg-warning p-3 shadow-sm"}`}
                      onClick={() => toggleSold(index)}
                    >
                      {soldButtons[index] ? `$${index + 1} Sold` : `$${index + 1}`}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>      
    </div>
    </div>
   
  );
};

export default Tiles;
