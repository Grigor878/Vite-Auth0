export const getAxiosConfig = () => {
  const token = sessionStorage.getItem("tag-token")
    ? sessionStorage.getItem("tag-token")
    : "";

  return {
    headers: { Authorization: "Bearer " + token },
  };
};
