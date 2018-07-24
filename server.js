const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3000 })
const client = {}
wss.on('connection', function (ws) {
    const socketId = guid()
    ws.socketId = socketId
    client[socketId] = ws

    ws.onmessage = function (event) {
        console.log('received:', event.data)
        for (let key in client) {
            if (client[key].socketId !== ws.socketId) {
                client[key].send(event.data)
            }
        }
    }

    ws.onclose = function (event) {
        console.log('close:', event)
        delete client[event.target.socketId]
    }

    ws.onerror = function (event) {
        console.log('error:', event)
    }
})

function guid() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    // return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
    return S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4()
}
