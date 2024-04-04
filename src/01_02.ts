export type HousesType = {
	buildedAt: number
	repaired: boolean
	address: AdressType
}

export type AdressType = {
	number?: number
	street: StreetType
}

export type StreetType = {
	title: string
}

export type GovernmentBuildingType = {
	type: 'HOSPITAL' | 'FIRE-STATION'
	budget: number
	staffCount: number
	address: AdressType
}

export type CityType = {
	title: string
	houses: Array<HousesType>
	governmentBuildings: Array<GovernmentBuildingType>
	citizensNumber: number
}

export const addMoneyToBudget = (buildings: GovernmentBuildingType, budget: number) => {
	buildings.budget += budget
}

export const repairHouse = (house: HousesType) => {
	house.repaired = true
}

export const toFireStaff = (buildings: GovernmentBuildingType, count: number) => {
	buildings.staffCount -= count
}

export const toHireStaff = (buildings: GovernmentBuildingType, count: number) => {
	buildings.staffCount += count
}

export const createMessage = (city: CityType) => {
	return `Hello ${city.title} cityzens. I want you be happy. All ${city.citizensNumber} men`
}