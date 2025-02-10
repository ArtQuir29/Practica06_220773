import mongoose from 'mongoose';
const sessionSchema = new mongoose.Schema({
    sessionId: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['Activa', 'Finalizada por el Usuario', 'Finalizada por inactividad', 'Finalizada por falla de Sistema'],
        default: 'Activa',
    },
    clientData: {
        clientIp: {
            type: String,
            required: true,
        },
        clientMac: {
            type: String,
            required: true,
        },
    },
    serverData: {
        serverIp: {
            type: String,
            required: true,
        },
        serverMac: {
            type: String,
            required: true,
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastAccessed: {
        type: Date,
        default: Date.now,
    },
});


const Session = mongoose.model('Session', sessionSchema);

export default Session;
