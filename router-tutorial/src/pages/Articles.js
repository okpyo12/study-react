import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <div>
      <Outlet />
      <ul>
        <ActicleItem id={1} />
        <ActicleItem id={2} />
        <ActicleItem id={3} />
      </ul>
    </div>
  );
};

const ActicleItem = ({ id }) => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };
  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

export default Articles;
