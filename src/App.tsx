import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { userSlice } from "./store/reducers/userSlice";
import { fetchUsers } from "./store/reducers/createActions";

function App() {
	const { removeUser } = userSlice.actions;
	const dispatch = useAppDispatch();
	const { users, isLoading, error } = useAppSelector((state) => state.user);

	useEffect(() => {
		dispatch(fetchUsers());
	}, [])

	return (
		<div className="App">
			{ isLoading && <div> Loading... </div>}
			{ error && <div> {error} </div>}
			{ users && users.map((user) => 
				<div
					key={user.id}
					onClick={() => dispatch(removeUser(user))}
				>
					{user.id}. {user.name}
				</div>
			)}
		</div>
	);
}

export default App;
