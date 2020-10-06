export interface Appointments {
"_id": number,
"client": string,
"details": Detail
}

interface Detail {
"day": string,
"time": number,
"location": string,
"type": string
}