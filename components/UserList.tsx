import { fetchUser } from "@/utils/user";

export default async function UserList() {
  const users = await fetchUser();
  return (
    <div>
      UserList
      {users.map((user, i) => (
        <li key={i}>
          {user.id} {user.firstname}
        </li>
      ))}
    </div>
  );
}
