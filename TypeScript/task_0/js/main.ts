interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Juan',
    lastName: 'Perez',
    age: 20,
    location: 'Mexico',
};

const student2: Student = {
    firstName: 'Maria',
    lastName: 'Gomez',
    age: 22,
    location: 'Argentina',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((student) => {
    const row = table.insertRow();
    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();

    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
});

document.body.appendChild(table);
