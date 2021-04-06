import fs from 'fs-extra'
/*
1.Rewrite the you created in Part-4 using promises adding the number of students registered in each course.
{
    crn: 200,
    courseCode: 'GENG 200',
    courseName: 'Probability and Statistics for Engineers',
    semester: 'Fall 2016',
    instructorId: 12,
    instrctorName: 'Zeyad Ali',
    studentCount: 56
  },
*/

/*
1)	We need to read data from two files. course.json and staff.json. Both using callbacks.
2)	We need finally print all courses with their corresponding instructor names.
a)	Instructor name can be found at the staff file.
b)	Use staffNo in staff.json property to match the instructorId from course.json
3)	Create two functions getCourses and setInstructorNames.
function getCourses(cb)
	function setInstrctorNames(courses , cb)
4)	Instructor names are set as a new property to the course object in the setInstrctorNames function.
 */

async function getCoursesWithNames() {
    try {
        const courses = await fs.readJson('data/course.json')
        const staffs = await fs.readJson('data/staff.json')
        const students = await fs.readJson('data/student.json')

        for (const course of courses) {
            const {firstname, lastname} = staffs.find(staff => staff.staffNo == course.instructorId)
            course.instructorName = `${firstname} ${lastname}`
            const registeredStudents = students.filter(student => student.courseIds.includes(course.crn))
            course.studentCount = registeredStudents.length
        }

        return courses
    } catch (e) {
        return e
    }
}

getCoursesWithNames().then(courses => console.log(courses))

//
//
// function getCoursesWithNames() {
//     return fs.readJson('data/course.json')
//         .then(courses => {
//             return fs.readJson('data/staff.json')
//                 .then(staffs => {
//                     for (const course of courses) {
//                         const {firstname, lastname} = staffs.find(staff => staff.staffNo == course.instructorId)
//                         course.instructorName = `${firstname} ${lastname}`
//                     }
//                     return courses
//                 })
//         })
//         .then(courses => {
//             return fs.readJson('data/student.json')
//                 .then(students => {
//                     // console.log(students)
//                     for (const course of courses) {
//
//                         const registeredStudents = students.filter(student => student.courseIds.includes(course.crn))
//                         course.studentCount = registeredStudents.length
//                     }
//                     return courses
//                 })
//         })
//         .catch(err => console.log(err))
// }
//
// getCoursesWithNames().then(courses => console.log(courses))
//
//
//
