const APP_ID = "1f7c7e23b18c4c4f93cc0cee12bc05fa"

let uid = sessionStorage.getItem('uid')
if (!uid) {
    uid = String(Math.floor(Math.random() * 10000))
    sessionStorage.setItem('uid', uid)

}

let token = null;
let client;

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
let roomId = urlParams.get('room')

if (!roomId) {
    roomId = 'main'    
}

let localTract = []
let remoteUsers = {}

let joinRoomInit = async () => {
    client = AgoraRtc.createClient({mode:'rtc', codec:'vp8'})
    await client.join(APP_ID, roomId, token, uid)
}

//room.html?room=234
