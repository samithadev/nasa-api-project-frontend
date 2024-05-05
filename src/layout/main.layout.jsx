import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function MainLayout() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <main>
      <Outlet />
    </main>
  );
}

export default MainLayout;
