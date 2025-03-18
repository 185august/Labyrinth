function updateView() {
    let html = `
    <table>
       ${mazeModel.rows.map((row, rowIndex) => `
        <tr> 
            ${row.map((column, columnIndex) => `
            <td onclick="removeWall(${rowIndex}, ${columnIndex})" class="${whatCssClass(column)}"></td>`).join('')}
        </tr>`).join('')}
    </table>
    `
    document.getElementById('app').innerHTML = html;
}

function initModel(size) {
    mazeModel.size = parseInt(size)
    mazeModel.rows = []

    for (let i = 0; i <= mazeModel.size; i++) {
        const row = []
        let isHigh = i % 2 === 0 ? false : true;
        if (i === mazeModel.size) {
            isHigh = false;
        }
        let isWide;
        row.push({ isHigh, isWide: false })
        for (let j = 0; j <= mazeModel.size; j++) {
            isWide = j % 2 === 0 ? true : false;
            if (j == mazeModel.size || i == 0 || i == mazeModel.size) {
                row.push({ isHigh: false, isWide: false })
            } else {
                const isOpen = Math.random() > .5
                row.push({ isHigh, isWide, isOpen })
            }
        }
        mazeModel.rows.push(row);
    }
    return mazeModel.rows;
}
function removeWall(rowIndex, columnIndex) {
    console.log(rowIndex, columnIndex)
    const cell = mazeModel.rows[rowIndex][columnIndex]
    console.log(cell)
    if (cell.isOpen === undefined) return;
    cell.isOpen = !cell.isOpen;
    updateView();
}

function isAWall(rowIndex, columnIndex) {

    for (let row in rows) {
        row.isHigh = false;
    }
}
function whatCssClass(square) {
    if (square.isHigh && square.isWide) return 'room';
    const highLow = square.isHigh ? 'high ' : 'low ';
    const wideSmall = square.isWide ? 'wide ' : 'small ';
    const wall = square.isOpen ? 'noWall ' : 'wall ';
    return highLow + wideSmall + wall;
}
