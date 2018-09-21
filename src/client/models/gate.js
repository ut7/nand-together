import { Vector } from 'p5';

export default class Gate {
    constructor({pos} = {}) {
        this.pos = pos || new Vector(50, 100);
        this.size = new Vector(80, 80);
    }

    draw(p) {
        p.rect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }

    mousePressed(p, {x, y, button}) {
        if ( x >= this.pos.x && x < this.pos.x + this.size.x 
             && y >= this.pos.y && y < this.pos.y + this.size.y ) {
            this.handlePos = new Vector(x - this.pos.x, y - this.pos.y);
            return true;
        }
    }

    mouseDragged(p, {x, y, button}) {
        if (this.handlePos) {
            this.pos = Vector.sub(new Vector(x, y), this.handlePos);
            return true;
        }
    }

    mouseReleased() {
        this.handlePos = null;
    }

    toJSON() {
        return { pos: this.pos };
    }
}