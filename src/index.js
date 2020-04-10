window.addEventListener('DOMContentLoaded', (event) => {
   
    obj.renderGrid();
    //obj.generateRandomCircle();
    // op.updateRoom();
    // op.renderPath();
    // document.addEventListener('keydown',op.move.bind(op));
});

function DataTable() {

    this.gridSize = { width: 6, height: 6 };
    this.score = 0;
    this.randomId;
    this.renderGrid = () => {
        let table = document.getElementById('tbody');
        for (let i = 0; i < this.gridSize.height; i++) {
            let row = document.createElement('div');
            row.setAttribute('class', 'Rtable-row full-width');

            for (let j = 0; j < this.gridSize.width; j++) {
                let col;
                col = document.createElement('span');
                col.setAttribute('class', 'dot');
                col.setAttribute('id',i + '' + j);
                row.appendChild(col);
            }
            table.appendChild(row);
        }
    }
    this.findScore = (event) => {
        if(event.target.id == this.randomId) { 
            this.score++; 
            this.generateRandomCircle()
        }
        else this.score--;
        document.getElementById('score').textContent = this.score;


    }
    this.generateRandomCircle = () => {
        this.randomId = Math.floor(Math.random() * this.gridSize.height) + '' + Math.floor(Math.random() * this.gridSize.width);
    }
}
DataTable.prototype.play = function() {
    this.generateRandomCircle();
    this.score = 0;
    document.getElementById('score').textContent = this.score;
}
DataTable.prototype.stop = function() {
    alert("Your Score is:"+ this.score);
    this.score = 0;
    document.getElementById('score').textContent = this.score;
}
var obj = new DataTable();
