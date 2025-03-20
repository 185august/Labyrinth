function updateView() {
    let html = `
    <table>
      ${mazeModel.rows.map((row) => `
        <tr>${row.map((column) => `
        <td class="${getCssClass(column)}"><td>`).join('')}
        </tr>`).join('')}
    </table>
    `
    document.getElementById('app').innerHTML = html;
}

