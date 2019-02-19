const Sequelize = require('sequelize');
var DataAccess = require("./dataAccess.js");

class SubscriberData{
    constructor(){
        this.Subscriber = DataAccess.define('Subscriber', {
            chargeId:{
                type: Sequelize.CHAR(36),
                primaryKey: true
            },
            pageUsername: {
                type: Sequelize.STRING(50),
                primaryKey: true
            },
            discordId: {
                type: Sequelize.STRING(50),
                primaryKey: true
            },
            expirationDate: Sequelize.DATE
        });
    }
    insert(subscriber){
        return this.Subscriber.create(subscriber);
    }
    get(chargeId, pageUsername, discordId){
        return this.Subscriber.findOne({where:{ chargeId: chargeId, pageUsername: pageUsername, discordId: discordId }});
    }
    update(subscriber){
        return subscriber.update(subscriber, { where: { chargeId: subscriber.chargeId, pageUsername: subscriber.pageUsername, discordId: subscriber.discordId }, fields: subscriber.changed() });
    }
}

module.exports = SubscriberData;