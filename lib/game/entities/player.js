ig.module('game.entities.player')
.requires('impact.entity')
.defines(function(){

    EntityPlayer = ig.Entity.extend({

        init: function(x, y, settings) {
            this.parent(x, y, settings);
        }
    });
});
