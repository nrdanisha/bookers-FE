const getter = {
	token: state => state.user.token,
	name: state => state.user.name,
	user_id: state => state.user.user_id,
	email: state => state.user.email
}

export default getter