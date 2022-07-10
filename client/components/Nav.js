import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { UserContext } from "../context";
import { useRouter } from "next/router";
import { Avatar } from "antd";

const Nav = () => {
  const [current, setCurrent] = useState("");
  const [state, setState] = useContext(UserContext);

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  const router = useRouter();

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    router.push("/login");
  };

  return (
    <nav className="nav d-flex bg-light justify-content-between">
      <Link href="/">
        <a className={`nav-link btn-lg ${current === "/" && "active"}`}>
          <Avatar src="/images/logo.JPG" />&nbsp;
           Groupomania
        </a>
      </Link>

      {state !== null ? (
        <>
          <div className="dropdown">
            <a
              className="nav-link btn btn-lg dropdown-toggle"
              type="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-haspopup="dropdown"
              aria-expanded="true"
            >
              {state && state.user && state.user.name}
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <Link href="/user/dashboard">
                  <a
                    className={`nav-link dropdown-item ${
                      current === "/user/dashboard" && "active"
                    }`}
                  >
                    Your dashboard
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/user/profile/update">
                  <a
                    className={`nav-link dropdown-item ${
                      current === "/user/profile/update" && "active"
                    }`}
                  >
                    Your profile
                  </a>
                </Link>
              </li>

              {state.user.role === "Admin" && (
                <li>
                  <Link href="/admin">
                    <a
                      className={`nav-link dropdown-item ${
                        current === "/admin" && "active"
                      }`}
                    >
                      Admin
                    </a>
                  </Link>
                </li>
              )}

              <li>
                <hr></hr>
                <a onClick={logout} className="nav-link dropdown-item">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <Link href="/login">
            <a
              className={`nav-link btn-lg ${
                current === "/login" && "active"
              }`}
            >
              Login
            </a>
          </Link>

          <Link href="/register">
            <a
              className={`nav-link btn-lg ${
                current === "/register" && "active"
              }`}
            >
              Register
            </a>
          </Link>
        </>
      )}
    </nav>
  );
};

export default Nav;
