import React from 'react'

const Nav = () => {
  return (
    <div className="navbar fixed bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">ToolsWeb</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 ">
      <li>
        <details>
          <summary>Topics</summary>
          <ul className="bg-base-100 rounded-t-none p-2 left-[-40px]">
            <li><a>Introduction</a></li>
            <li><a>HTML (A-Z)</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Nav
