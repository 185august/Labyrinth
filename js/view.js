function updateView() {
    let html = `
    <table>
        ${mazeModel.rows.join('')}
    </table>
    `
    document.getElementById('app').innerHTML = html;
}


function initModel(size) {
    mazeModel.rows = []
    let isHigh = true;
    for (let rowIndex = 0; rowIndex <= size; rowIndex++) {
        mazeModel.rows.push(createRow(size, !isHigh))
        mazeModel.rows.push(createRow(size, isHigh))
    }
    mazeModel.rows.push(createRow(size, !isHigh))
    let html = mazeModel.rows
    return html
}

function createRow(size, isHigh) {

    let rowHtml = `<tr>`
    for (let i = 0; i <= size; i++) {
        let isWide = i % 2 === 0 ? true : false;
        if (i == 0 || i == size) {
            rowHtml += createColumn(!isHigh, isWide = false);
        }
        rowHtml += createColumn(isHigh, isWide)
    }
    rowHtml += `</tr>`
    return rowHtml
}

function createColumn(isHigh, isWide) {

    /* return `<td class="${whatCssClass(isHigh, isWide)}"></td>` */
}

function isAWall(index) {
    const rows = mazeModel.rows[index]
    for (let row of rows) {
        row.isOpen = false;
    }
}
function whatCssClass(isHigh, isWide, isOpen) {
    if (isOpen) {
        return "nowall wide low"
    }
    if (!isHigh) {
        if (!isWide) {
            return "wall small low"
        } else {
            return "wall wide low"
        }
    }
    else if (!isWide) {
        return "wall small high"
    } else {
        return "nowall wide high"
    }
}
