export function ActioKeyNav(key,uid) {
  switch (key) {
    case "logout":
      localStorage.removeItem("token");
      localStorage.removeItem("uid");
      localStorage.removeItem("role");
      window.location.replace("/Login"); //check if this fun is working
      break;
    case "profile":
      window.location.replace(`/userFolder/${uid}/ProfilePage`)
    default:
      break;
  }

  return;
}
