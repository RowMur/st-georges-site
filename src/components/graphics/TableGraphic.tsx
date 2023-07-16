import TableTennisTable from "../svgs/TableTennisTable";
import TableTennisRacket from "../svgs/TableTennisRacket";
import TableTennisBall from "../svgs/TableTennisBall";

const TableGraphic = () => {
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="mt-[40%] relative">
        <TableTennisTable />
        <div className="absolute bottom-[100%] left-[60%] w-1/5 animate-backBat">
          <TableTennisRacket />
        </div>
        <div className="absolute bottom-[110%] left-[55%] w-1/5 animate-ball">
          <TableTennisBall />
        </div>
        <div className="absolute bottom-[60%] left-[60%] w-1/4 animate-frontBat">
          <TableTennisRacket />
        </div>
      </div>
    </div>
  );
};

export default TableGraphic;
