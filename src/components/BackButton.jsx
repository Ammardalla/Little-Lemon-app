import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} id="back-btn">
      ⬅ Back
    </button>
  );
}

export default BackButton;
