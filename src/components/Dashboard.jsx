import Counter from "./Counter";
import Header from "./Header";
import UserProfile from "./UserProfile";

export default function Dashboard() {
    return (
        <>
           <Header />
           <UserProfile />
           <Counter />
        </>
    )
}