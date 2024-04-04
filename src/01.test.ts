import { addSkill, doesStudentLiveIn, makeStudentActive } from "./01";
import { StudentType } from "./01_01";


let student: StudentType
beforeEach(() => {
	student = {
		id: 1,
		name: "Serj",
		age: 21,
		isActive: false,
		adress: {
			streetTitle: "Surganova 2",
			city: {
				title: "Minsk",
				countryTitle: "Belarus"
			}
		},
		technoligies: [
			{
				id: 1,
				name: 'Html',
			},
			{
				id: 2,
				name: "JS"
			},
			{
				id: 3,
				name: 'React'
			},
			{
				id: 4,
				name: 'CSS'
			}
		]
	}
})

test("does student live in city", () => {
	let result1 = doesStudentLiveIn(student, 'Moscow')
	let result2 = doesStudentLiveIn(student, 'Minsk')

	expect(result1).toBe(false)
	expect(result2).toBe(true)
})