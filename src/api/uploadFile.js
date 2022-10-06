export async function DemoPOST(access, payload, featuresSelected) {
  const AUDIO_UPLOAD_URL = "https://stt.ins8.ai/api/v1/stt/recognize";

  let config = `&language=en-sg`;
  if (featuresSelected.length > 0) {
    config += featuresSelected.map((item) => `&${item}=true`).join("");
  }

  const endpoint = `?api_token=${access}`;
  const url = AUDIO_UPLOAD_URL + endpoint + config;
  const res = await fetch(url, {
    method: "POST",
    body: payload,
  });
  if (res.status >= 200 && res.status <= 299) {
    const content = await res.json();
    return content;
  } else {
    const error = await res.json();
    // console.log(error.detail)
    alert(`${error.detail}`)
  }
}
