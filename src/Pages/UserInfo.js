import ProfilePhoto from "../assets/ProfilePhoto.jpg";
const UserInfo = () => {
  const user = {
    name: "Sagar Kakad",
    age: 33,
    dob: "2025-08-31",
    email: "snkakad@gmail.com",
    Address:"C wing Mumbai Maharashtra, India"
  };

  return (
    <section className="page user-info">
      <div className="user-card">
        <img src={ProfilePhoto} alt={user.name} className="user-img" />
        <h1>User Info</h1>
        <h2>{user.name}</h2>
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Date of Birth:</strong> {user.dob}</p>
        <p><strong>Email:</strong> {user.email}</p>
         <p><strong>Address:</strong> {user.Address}</p>
      </div>
    </section>
  );
};

export default UserInfo;
