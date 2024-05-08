import { log } from "console";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { clouddebugger } from "googleapis/build/src/apis/clouddebugger";
import { LucideGripHorizontal } from "lucide-react";

export default async function totalPlayers(req, res) {
	

	const doc = new GoogleSpreadsheet(
		//"1s6GBtj7ItUPdbnYUGZ7ghzAtbwCO-PKU4RqivCXdotI"
		"1J0Lnno7WW2rIM9MAJGervLgzE7VjO0O4rVdMqYppj60"
		
	);
	doc.useApiKey("AIzaSyBP6A-1rMWSR2Oi2maHP0KIk73Nn5_Psbc");
	await doc.loadInfo(); // Přepnuli jsme z getInfo() na loadInfo()

	/*
	const checkCellValues = cell => !cell.value ? ["", ""] : cell.value.split("")
	*/

	const checkCellValues = (cell) => {
		!cell.value ? "" : cell.value;
		if (
			!cell.value ||
			cell.value === "" ||
			cell.value === null ||
			cell.value === undefined
		) {
			return ["", ""];
		}
		return cell.value;
	};

	const listIndex = doc.sheetsByIndex[3];
	await listIndex.loadCells("C2:D2");
	// list = index of list in google sheets
	const activeList = listIndex.getCellByA1("D2");
	const category = listIndex.getCellByA1("C2");

	const index = doc.sheetsByIndex[activeList.value];
	await index.loadCells("A1:A6");
	await index.loadCells("C2:W3");

	const player_1_number = checkCellValues(index.getCellByA1("C2"));
	const player_2_number = checkCellValues(index.getCellByA1("C3"));
	const player_3_number = checkCellValues(index.getCellByA1("F2"));
	const player_4_number = checkCellValues(index.getCellByA1("F3"));
	const player_5_number = checkCellValues(index.getCellByA1("I2"));
	const player_6_number = checkCellValues(index.getCellByA1("I3"));
	const player_7_number = checkCellValues(index.getCellByA1("L2"));
	const player_8_number = checkCellValues(index.getCellByA1("L3"));

	const player_1_name = checkCellValues(index.getCellByA1("D2"));
	const player_2_name = checkCellValues(index.getCellByA1("D3"));
	const player_3_name = checkCellValues(index.getCellByA1("G2"));
	const player_4_name = checkCellValues(index.getCellByA1("G3"));
	const player_5_name = checkCellValues(index.getCellByA1("J2"));
	const player_6_name = checkCellValues(index.getCellByA1("J3"));
	const player_7_name = checkCellValues(index.getCellByA1("M2"));
	const player_8_name = checkCellValues(index.getCellByA1("M3"));

	const player_1_lives = checkCellValues(index.getCellByA1("P2"));
	const player_2_lives = checkCellValues(index.getCellByA1("P3"));
	const player_3_lives = checkCellValues(index.getCellByA1("R2"));
	const player_4_lives = checkCellValues(index.getCellByA1("R3"));
	const player_5_lives = checkCellValues(index.getCellByA1("T2"));
	const player_6_lives = checkCellValues(index.getCellByA1("T3"));
	const player_7_lives = checkCellValues(index.getCellByA1("V2"));
	const player_8_lives = checkCellValues(index.getCellByA1("V3"));

	// Fake the res.status(200).json() response
    res.status(200).json({
		category: checkCellValues(listIndex.getCellByA1("C2")),
		stats: {
			totalPlayers: index.getCellByA1("A2").value,
			restPlayers: index.getCellByA1("A4").value,
			round: index.getCellByA1("A6").value.split(".")[0],
		}, 
		players: [ 
			{
				id: crypto.randomUUID(),
				startNumber: player_1_number,
				name: player_1_name,
				lives: player_1_lives
			},
			{
				id: crypto.randomUUID(),
				startNumber: player_2_number,
				name: player_2_name,
				lives: player_2_lives
			},
		],
		nextPlayers: [
			{
				id: crypto.randomUUID(),
				startNumber: player_3_number,
				name: player_3_name,
				lives: player_3_lives
			},
			{
				id: crypto.randomUUID(),
				startNumber: player_4_number,
				name: player_4_name,
				lives: player_4_lives
			},
			{
				id: crypto.randomUUID(),
				startNumber: player_5_number,
				name: player_5_name,
				lives: player_5_lives
			},
			{
				id: crypto.randomUUID(),
				startNumber: player_6_number, 
				name: player_6_name,
				lives: player_6_lives
			},
			{
				id: crypto.randomUUID(),
				startNumber: player_7_number, 
				name: player_7_name,
				lives: player_7_lives
			},
			{
				id: crypto.randomUUID(),
				startNumber: player_8_number,
				name: player_8_name,
				lives: player_8_lives
			},
		],
	});

	
}