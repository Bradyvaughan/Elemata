class Row {
  constructor(length, rule, start) {
    let row = [];
    for (let i = 0; i < length; i++) {
      row.push(new Cell(i, rule, start[i]));
    }
    this.auto = row;
    this.int = 0;
    this.gen = 0;
    this.color = 0;
    this.record = {};
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
    if (!this.record[this.render().join('')]) {
      this.record[this.render().join('')] = this.gen + 1
    } else {
      this.stop()
      this.period = this.gen + 1 - this.record[this.render().join('')]
      $('#period').text(`${this.period}`)
      $('#cycle-time').text(`${this.gen + 1 - this.period}`)
      $('#cycle-modal').toggleClass('hidden')
      this.highlight()
    }
    this.gen = this.gen + 1
    $('#counter').text(`Current Generation: ${this.gen}`)
  }

  highlight() {
    let timeToCycle = this.gen + 1 - this.period

    $(`.grid ul:nth-child(${timeToCycle + 1})`).css('background-color','#888')
    for (let i = timeToCycle + 2; i < this.gen + 2; i++) {
      $(`.grid ul:nth-child(${i})`).css('background-color','#ccc');
    }
    $(`.grid ul:nth-child(${this.gen + 2})`).css('background-color','#888')
  }

  append() {
    let renderRow = $("<ul>");
    renderRow.addClass("row")

    for (let i = 0; i < this.auto.length; i++) {
      let cell = $("<li>").text(" ");
      cell.addClass("cell");
      if (this.auto[i].alive) {
        cell.addClass("black");
        cell.css('background-color',`#${colors[this.color % 12]}`)
      }
      renderRow.append(cell)
    }
    this.color = this.color + 1
    $(".grid").append(renderRow)
    window.scrollTo(0,document.body.scrollHeight)
  }

  run(n) {
    this.int = setInterval(this.step.bind(this), n);
  }

  stop() {
    clearInterval(this.int)
    this.int = 0
  }
}

export default Row;
