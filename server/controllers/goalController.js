const getGoals = (req, res) => {
	res.status(200).json({ message: "Get goals"})
}

const postGoal = (req, res) => { 
	res.status(200).json({ message :"Set goal"})
}

const putGoal = (req, res) => {
	res.status(200).json({ message : `Update goal ${req.params.id}` })
}

const deleteGoal = (req, res) => {
	res.status(200).json({ message : `Delete goal ${req.params.id}`})
}

module.exports  = {
	getGoals,
	postGoal,
	putGoal,
	deleteGoal
}