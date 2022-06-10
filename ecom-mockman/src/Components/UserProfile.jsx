import { useAuth } from "../contexts/auth-context";


const UserProfile = () => {
  const { logoutHandler } = useAuth();
  const user = JSON.parse(localStorage.getItem("user"));

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <div className="profile-container">
      <div className="profile-details">
        <img
          src={`https://avatars.dicebear.com/api/initials/${user.firstName}%20${user.lastName}.svg?b=%23ff316d&r=50&size=80&fontSize=40`}
          alt={fullName}
        />

        <div className="profile-creds">
          <p className="user-name">{fullName}</p>
          <p className="user-email">{user.email}</p>
        </div>
      </div>

      <button className="btn-logout" onClick={logoutHandler}>
        Logout
      </button>
    </div>
   
  );
};

export { UserProfile };
