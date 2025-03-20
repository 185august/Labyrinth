function initModel(size) {
    mazeModel.rows = []

    for (let i = 0; i < size; i++) {
        mazeModel.rows.push(createRow(size, false));
        mazeModel.rows.push(createRow(size, true));
    }
    mazeModel.rows.push(createRow(size, false));
}

function createRow(size, isHigh) {
    const row = []
    for (let i = 0; i < size; i++) {
        row.push(createColumn(isHigh, false));
        row.push(createColumn(isHigh, true));
    }
    row.push(createColumn(isHigh, true));
    return row;
}

function createColumn(isHigh, isWide) {
    if (isHigh == isWide) return { isHigh, isWide };
    const isOpen = Math.random() > 0.5;
    return { isHigh, isWide, isOpen };
}

function getCssClass(square) {
    if (square.isHigh === square.isWide) return 'room';
    const isHigh = square.isHigh ? false : true;
    const isWide = square.isWide ? false : true;
    const isOpen = square.isOpen ? false : true;
    return isHigh + isWide + isOpen
}