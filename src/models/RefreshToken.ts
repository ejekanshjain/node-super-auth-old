import mongoose from 'mongoose'

import IRefreshToken from './types/refreshToken'

const refreshTokenSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    refreshToken: {
        type: String,
        required: true,
        unique: true
    },
    userAgent: {
        type: String,
        required: true
    },
    type: String,
    browser: String,
    engine: String,
    version: String,
    os: String
}, {
    timestamps: true
})

export default mongoose.model<IRefreshToken>('RefreshToken', refreshTokenSchema)
