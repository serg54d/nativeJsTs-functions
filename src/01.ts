import { StudentType } from "./01_01";

export const addSkill = (student: StudentType, skill: string) => {
	student.technoligies.push({
		id: new Date().getTime(),
		name: skill
	})
}

export const makeStudentActive = (student: StudentType) => {
	student.isActive = true
}

export const doesStudentLiveIn = (student: StudentType, city: string) => {
	return student.adress.city.title === city
} 