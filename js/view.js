function updateView() {
    let html = `
    <table>
       ${mazeModel.rows.map((row) => `
        <tr> 
            ${row.map((column) => `<td class="${whatCssClass(column.isHigh, column.isWide, column.isOpen)}"></td>`).join('')}
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
        for (let j = 0; j <= mazeModel.size; j++) {
            let isWide = j % 2 === 0 ? false : true;
            if (j === mazeModel.size) {
                isWide = false;
                isHigh = false;
                row.push({ isHigh, isWide });
                break;
            }
            const isOpen = !(isHigh || isWide)
            row.push({ isHigh, isWide, isOpen })
        }
        mazeModel.rows.push(row);
    }
}

function isAWall(index) {
    const rows = mazeModel.rows[index]
    for (let row in rows) {
        row.isHigh = false;
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
