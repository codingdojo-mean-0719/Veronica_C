//Create a function that grab the objects from the array/dict
function getNames(){
    var students = [
        { name: 'Remy', cohort: 'Jan' },
        { name: 'Genevieve', cohort: 'March' },
        { name: 'Chuck', cohort: 'Jan' },
        { name: 'Osmund', cohort: 'June' },
        { name: 'Nikki', cohort: 'June' },
        { name: 'Boris', cohort: 'June '}
    ];

    for (var student of students) {
        console.log(`name: ${ student.name }, cohort: ${ student.cohort }`)
    };


    var users = {
        employees: [
            { 'first_name':  'Miguel', 'last_name' : 'Jones' },
            { 'first_name' : 'Ernie', 'last_name' : 'Bertson' },
            { 'first_name' : 'Nora', 'last_name' : 'Lu' },
            { 'first_name' : 'Sally', 'last_name' : 'Barkyoumb '}
        ],
        managers: [
            { 'first_name' : 'Lillian', 'last_name' : 'Chambers' },
            { 'first_name' : 'Gordon', 'last_name' : 'Poe '}
        ]
    };

    for (var element in users) {
        console.log(element.toUpperCase());
        for (var index = 0; index < users[element].length; index++) {
            const num = index + 1;
            const fname = users[element][index].first_name;
            const lname = users[element][index].last_name;
            const length = fname.length + lname.length;
            console.log(`${num} - ${lname}, ${fname} - ${length}`);
        }
    }
}
console.log(getNames())