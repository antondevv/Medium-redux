export const changeUsersAge = (age) => {
  return {
    type: "CHANGEAGE",
    payload: age,
  };
};
