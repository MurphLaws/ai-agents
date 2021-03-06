const Agent = require('../core/Agent');

/**
 * Simple reflex agent. Search for an object whithin a labyrinth. 
 * If the object is found the agen take it.
 */
class CleanerAgent extends Agent {
    constructor(value) {
        super(value);
        this.actions = ["L", "R", "A"]
    }

    setup(initialState={}) {
            this.table = {
                /*'[1,[1,1]]': "A",
                '[0,[1,1]]': "A",
                '[0,[0,1]]': "R",
                '[0,[1,0]]': "A",
                '[1,[1,0]]': "L",
                '[1,[0,1]]': "A",*/

                '0,1' : "A",
                '0,0' : "R",
                '1,1' : "A",
                '1,0' : "L",
            };
        }

    //[1, [1, 1]]

    /**
     * We override the send method. 
     * In this case, the state is just obtained as the join of the perceptions
     */
    send() {
        //this.perception = [1,[1,1]]
        let viewKey = this.perception[0] + "," + [this.perception[1][this.perception[0]]];

        if (this.table[viewKey]) {
            return this.table[viewKey];
        } else {
            return this.table["default"];
        }
    }

}

module.exports = CleanerAgent;