const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect:'sqlite',
    storage:'./db/hadith_db.db'
});

async function Connect() {
    try{
        await sequelize.authenticate();
        console.log('Connection success');
    }
    catch ( err ) {
        console.error("Unable to connect",err);
    }
}
Connect();

module.exports = sequelize;