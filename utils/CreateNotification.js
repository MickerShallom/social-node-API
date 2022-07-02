const Notification = require("../Services/models/Notification")

module.exports = async ({ user, body }) => {
    const notification = new Notification({ user, body })
    const saveNotification = await notification.save()
    return {
        id: saveNotification.id,
        body,
        createdAt: notification.createdAt
    }

}