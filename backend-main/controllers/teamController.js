import Team from "./../models/team";

export const getTeam = async (query) => {
  return await Team.find(query);
};

export const getOneTeam = async (id) => {
  return (res = await Team.findById(id));
};

export const addTeam = async (user) => {
  return await Team.create(user);
};

export const updateTeam = async (team) => {
  return await Team.findByIdAndUpdate(team._id, team);
};

export const deleteTeam = async (id) => {
  return await Team.findOneAndRemove({ _id: id });
};
