import { FC } from "react";
import style from "./SignIn.module.css";

const Main  = () => {
    return (
        <div className={style.SignIn}>
            <span className={style.Button}>Sign Up</span> / <span className={style.Button}>Sign In</span>
        </div>
    );
}

export default Main;
