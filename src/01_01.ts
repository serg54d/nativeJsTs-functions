type TechnoligiesType = {
	id: number
	name: string
}

type cityType = {
	title: string
	countryTitle: string
}

type AdressType = {
	city: cityType
	streetTitle: string
}

export type StudentType = {
	id: number
	name: string
	age: number
	isActive: boolean
	adress: AdressType
	technoligies: Array<TechnoligiesType>
}



export const students: StudentType = {
	id: 1,
	name: "Serj",
	age: 21,
	isActive: true,
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