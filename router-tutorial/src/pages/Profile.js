import { useParams } from "react-router-dom";

const data = {
  me: {
    name: "표상우",
    description: "이게 나야",
  },
  gildong: {
    name: "홍길동",
    description: "홍길동전의 주인공",
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;
