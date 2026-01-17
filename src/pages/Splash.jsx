import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    // Go to login page after 3 seconds
    setTimeout(() => {
      navigate("/signup");
    }, 50000);
  }, [navigate]);

  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col items-center justify-between">
      
      {/* Center Logo */}
      <div className="flex flex-1 items-center justify-center">
        <img
          src="/logo2.png"
          alt="Facebook"
          className="w-20 h-20"
        />
      </div>

  {/* Bottom Meta */}
  {/* Bottom Meta */}
<div className="mb-10 flex  items-center text-black-500">
  <span className="leading-none text-lg">from</span>
  <img
    src="/meta.png"
    alt="Meta"
    className="h-16"
  />
</div>








  
  
  

    
    
    
    
    
    
    
    

    </div>
  );
}