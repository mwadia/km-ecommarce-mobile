import { io } from "socket.io-client";
const socket = io.connect("https://commercekm.onrender.com/");
export default socket;