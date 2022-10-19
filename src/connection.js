export const BACKEND = process.env.REACT_APP_BACKEND_URL;

export const WEBSOCKET_URL = process.env.REACT_APP_BACKEND_WSS + "/api/v1/stt/websocket/recognize";

export const AUDIO_UPLOAD_URL = BACKEND + "/stt/recognize";
