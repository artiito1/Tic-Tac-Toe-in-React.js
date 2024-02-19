import { Dispatch, SetStateAction } from "react";

type CellProps = {
    id: number;
    go: string;
    setGo: Dispatch<SetStateAction<string>>;
    cells: string[];
    setCells: Dispatch<SetStateAction<string[]>>;
    cell: string;
    winningMassage:string;
}
const Cell = ({ go, setGo, id, cells, setCells, cell,winningMassage }: CellProps) => {
    const handelClick = () => {
        if(winningMassage){
            return;
        }
        const notTaken = !cells[id]
        if (notTaken) {
            if (go === "circle") {
                handleCellChange("circle")
                setGo("cross")
            } else if (go === "cross") {
                handleCellChange("cross")
                setGo("circle")
            }
        }
    }
    const handleCellChange = (cellToChange: string) => {
        let CopyCells = [...cells];
        CopyCells[id] = cellToChange;
        setCells(CopyCells)
    }
    return <div className="square" onClick={handelClick}>
        <div className={cell}>{cell ? (cell === "circle" ? "O" : "X") : ""}</div>
    </div>
}
export default Cell;