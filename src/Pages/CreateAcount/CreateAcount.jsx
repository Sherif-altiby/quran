import "./CreateAcount.scss";
import { useMainContext } from "../../Context/MainContext";

const CreateAcount = () => {
  const { theme } = useMainContext();
  
  return (
    <div className={"create_acount " + theme}>
      <h2> تسجيل الدخول الى موقع <br />القران الكريم </h2>
      <div className="sign_google">
        <p> ادخل عبر جوجل </p>
        <div className="icon">
          <i className="fa-brands fa-google"></i>
        </div>
      </div>
      <div className="sign_facebook">
        <p> ادخل عبر فيس بوك</p>
        <div className="icon">
          <i className="fa-brands fa-facebook-f"></i>
        </div>
      </div>
      <div className="sign_apple">
        <p> ادخل عبر ابل</p>
        <div className="icon">
          <i className="fa-brands fa-apple"></i>
        </div>
      </div>
      <div className="sign_email">
        <p> ادخل عبر البريد الالكتروني</p>
      </div>
    </div>
  );
};

export default CreateAcount;
