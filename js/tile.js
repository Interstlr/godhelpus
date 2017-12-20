class Tile {
    constructor(x, y, imgX, imgY, spriteID) {
        this.pos = {'x': x, 'y': y};
        this.imgPos = {'x': imgX, 'y': imgY};
        this.spriteID = spriteID;
        this.isWalkable = true;

        switch(spriteID) {
            case 0: //black tile
                this.isWalkable = false;
                break;
            case 25: //infinite wall
                this.healthValue = Infinity;
                this.solid = true;
                this.isWalkable = false;
                break;
            case 13: //brick wall
                this.healthValue = 1000;
                this.solid = true;
                this.isWalkable = false;
                break;
            case 31: //bunker entrance
                this.isBunkerEntrance = true;
                break;
        }
    }

    update() {
        if(this.healthValue <= 0) {
            this.imgPos.x = 100;
            this.imgPos.y = 200;
            this.spriteID = 10;
            delete this.solid; 
        }

        image(images,
            this.pos.x,
            this.pos.y, 
            TILE_W, 
            TILE_H, 
            this.imgPos.x, 
            this.imgPos.y, 
            TILE_W, 
            TILE_H
        );
    }
}