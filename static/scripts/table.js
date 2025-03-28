let sortOrder = {
    0: true,
    1: true 
};

const th = document.getElementById('programming-languages-table').querySelectorAll('th');
th.forEach((header, index) => {
    header.addEventListener('click', () => sortTable(index, header));
});

function sortTable(columnIndex, header) {
    const table = document.getElementById('programming-languages-table');
    const rows = Array.from(table.querySelectorAll('tbody tr'));
    let sortedRows;

    sortOrder[columnIndex] = !sortOrder[columnIndex];

    th.forEach(th => {
        th.classList.remove('sorted-asc', 'sorted-desc');
    });

    if (sortOrder[columnIndex]) {
        header.classList.add('sorted-asc');
    } else {
        header.classList.add('sorted-desc');
    }

    if (columnIndex === 0) {
        sortedRows = rows.sort((rowA, rowB) => {
            const textA = rowA.cells[columnIndex].textContent.trim();
            const textB = rowB.cells[columnIndex].textContent.trim();
            return sortOrder[columnIndex]
                ? textA.localeCompare(textB)
                : textB.localeCompare(textA);
        });
    } else if (columnIndex === 1) {
        sortedRows = rows.sort((rowA, rowB) => {
            const valueA = parseInt(rowA.cells[columnIndex].getAttribute('value'));
            const valueB = parseInt(rowB.cells[columnIndex].getAttribute('value'));
            return sortOrder[columnIndex]
                ? valueA - valueB
                : valueB - valueA;
        });
    }

    sortedRows.forEach(row => table.querySelector('tbody').appendChild(row));
}