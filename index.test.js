const {db} = require('./db');
const {Band, Musician} = require('./index')


describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async () => {
        await Band.create({
            name: "Gorillaz",
            genre: "Rock"
        })
        const bandCreated = await Band.findOne({where: {name: "Gorillaz"}})
        expect([bandCreated.name, bandCreated.genre]).toEqual(["Gorillaz", "Rock"]);
    })

    test('can create a Musician', async () => {

        // TODO - test creating a musician
        await Musician.create({
            name: "James Blake",
            instrument: "Piano"
        })
        const musicianCreated = await Musician.findOne({where: {name: "James Blake"}})
        expect([musicianCreated.name, musicianCreated.instrument]).toEqual(["James Blake", "Piano"]);
    })
})