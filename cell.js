class Cell {
  constructor(pos, rule, alive) {
    this.pos = pos;
    this.alive = 0;
    this.rule = rule;

    if (alive) {
      this.alive = 1;
    }
  }

  update(neighbors) {
    if (this.rule[neighbors.join('')]) {
      this.alive = 1;
    } else {
      this.alive = 0;
    }
    return this.alive;
  }
}

export default Cell;
