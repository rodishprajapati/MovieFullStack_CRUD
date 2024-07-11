import { useNavigate } from "react-router-dom";
import { FaBackspace } from "react-icons/fa";
const Header = ({ title }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-green-400 h-10 w-fillflex flex-direction-row ">
        <div>
          {title === "Add Movies" && (
            <>
              <button
                className="bg-blue-900 h-6 w-10 rounded-md m-0 float-left"
                onClick={() => {
                  navigate(-1);
                }}
              >
                back
              </button>
              <div className="flex justify-between">{title}</div>
            </>
          )}
        </div>

        <div>
          {title === "Movies" && (
            <>
              <div className="float-left m-2">{title}</div>

              <button
                className="bg-blue-900 h-6 w-10 rounded-md m-2 float-right"
                onClick={() => {
                  navigate("/addData");
                }}
              >
                +
              </button>
            </>
          )}
        </div>

        <div>
          {title === "Edit Movies" && (
            <>
              <button
                className="bg-blue-900 h-6 w-10 rounded-md m-0 float-left"
                onClick={() => {
                  navigate(-1);
                }}
              >
                <FaBackspace />
              </button>
              <div className="flex justify-between">{title}</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Header;
