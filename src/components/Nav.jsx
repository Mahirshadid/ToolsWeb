import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar fixed bg-base-100 shadow-sm z-50">
      <div className="flex-1">
        <a href='/' className="btn btn-ghost text-xl">ToolsWeb</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 ">
          <li>
            <details>
              <summary>Topics</summary>
              <ul className="bg-base-100 rounded-t-none p-2 left-[-40px]" id='inner_lists'>
                <li>
                  <Link to="/html">HTML</Link>
                </li>
                <li>
                  <Link to="/css">CSS</Link>
                </li>
                <li>
                  <Link to="/github">GitHub</Link>
                </li>
                <li>
                  <Link to="/tailwind">TailwindCSS</Link>
                </li>
                <li>
                  <Link to="/javascript">JavaScript</Link>
                </li>
                <li>
                  <Link to="/api">API</Link>
                </li>
                <li>
                  <Link to="/react">ReactJs</Link>
                </li>
                <li>
                  <Link to="/firebase">Firebase</Link>
                </li>
                <li>
                  <Link to="/mongodb">MongoDB</Link>
                </li>
                <li>
                  <Link to="/fullstack">Full-stack Web App</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
