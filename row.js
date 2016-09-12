class Row {
  constructor(length, rule) {
    let row = [];
    for (let i = 0; i < length; i++) {
      row.push(new Cell(i, rule));
    }
    this.auto = row;
  }

  render() {
    return this.auto.map((cell) => cell.alive);
  }

  cellUpdate(n, oldRow) {
    let left = 0;
    let right = 0;

    if (this.auto[n-1] && oldRow.auto[n-1].alive) {
      left = 1;
    }
    if (this.auto[n+1] && oldRow.auto[n+1].alive) {
      right = 1;
    }
    this.auto[n].update([left,this.auto[n].alive, right]);
  }

  rowCopy() {
    let newRow = new Row(this.auto.length, this.auto[0].rule);
    newRow.auto.forEach((cell) => {
      cell.alive = this.auto[cell.pos].alive;
    });
    return newRow;
  }

  step() {
    let oldRow = this.rowCopy();
    this.auto.forEach( (cell) => {
      this.cellUpdate(cell.pos, oldRow);
    });
    console.log(this.render());
  }

  run() {
    setInterval(this.step.bind(this), 1000);
  }
}

export default Row;
