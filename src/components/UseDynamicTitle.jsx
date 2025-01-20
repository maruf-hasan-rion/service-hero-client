import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UseDynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    const titleMap = {
      "/": "Service Hero",
      "/services": "Sevices",
      "/dashboard": "Dashboard",
      "/dashboard/addService": "Add service - Dashboard",
    };

    document.title = titleMap[path] || "Service Hero";
  }, [location]);

  return(
      <div>

      </div>
  )
};

export default UseDynamicTitle;
