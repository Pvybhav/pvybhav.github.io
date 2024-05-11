import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      Page not found. Click <button onClick={() => navigate(-1)}>here</button>{" "}
      to navigate back to previous page
    </div>
  );
};

export default NotFound;
