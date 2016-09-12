class Row {
  constructor(length, rule, start) {
    let row = [];
    for (let i = 0; i < length; i++) {
      row.push(new Cell(i, rule, start[i]));
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
     return new Row(this.auto.length, this.auto[0].rule, this.render());
  }

  step() {
    let oldRow = this.rowCopy();
    this.auto.forEach( (cell) => {
      this.cellUpdate(cell.pos, oldRow);
    });
    this.append()
  }

  append() {
    let renderRow = $("<ul>");
    renderRow.addClass("row")

    for (let i = 0; i < this.auto.length; i++) {
      let cell = $("<li>").text(" ");
      cell.addClass("cell");
      if (this.auto[i].alive) {
        cell.addClass("black");
      }
      renderRow.append(cell)
    }

    $(".grid").append(renderRow)
  }

  run(n) {
    this.int = setInterval(this.step.bind(this), n);
  }

  stop() {
    clearInterval(this.int)
  }
}

export default Row;
