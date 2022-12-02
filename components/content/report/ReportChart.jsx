import Title from "../../Title"
import { TableCell } from "../chain-monitoring/Right"
import Chart from "./Chart"

const Data = [
    {
        color: '#FF1616',
        severity: 'Critical',
        percentage: 0,
        noi: 0
    },
    {
        color: '#FF1616',
        severity: 'Critical',
        percentage: 0,
        noi: 0
    },
    {
        color: '#FF1616',
        severity: 'Critical',
        percentage: 0,
        noi: 0
    },
    {
        color: '#FF1616',
        severity: 'Critical',
        percentage: 0,
        noi: 0
    },
    {
        color: '#FF1616',
        severity: 'Critical',
        percentage: 0,
        noi: 0
    },
    {
        color: '#FF1616',
        severity: 'Critical',
        percentage: 0,
        noi: 0
    },
]

const Table = () => {
    return (
        <table 
        style={{ fontFamily: 'Poppins'}}
        className="w-full mt-3 text-textColor">
                <thead className="text-textColor font-thin text-xs">
                    <tr>
                    <th></th>
                    <th>Severity</th>
                    <th>Number Of Issues</th>
                    <th>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.map((data, index) => (
                        <tr 
                        key={index}
                        className='font-medium text-sm'
                        >
                        <TableCell>
                            <div 
                            style={{ backgroundColor: data.color}}
                            className="w-[24px] h-[14px] rounded-[3px]"></div>
                        </TableCell>
                        <TableCell>
                            <p className="text-textColorActive font-semibold text-base">{data.severity}</p>
                        </TableCell>
                        <TableCell>
                            {data.noi}
                        </TableCell>
                        <TableCell>
                            <div className="font-normal">
                                {data.percentage.toFixed(2)}%
                            </div>
                        </TableCell>
                        </tr>
                    ))}
                </tbody>
        </table>
    )
}

const ReportChart = () => {
  return (
    <div className="p-4 rounded-[10px] bg-[#111111] h-full text-textColorActive w-[478px] flex flex-col overflow-y-hidden">
        <Title text='Findings Summary' includeIcon={false} />
        <div className="grid grid-cols-2 gap-2 mt-2">
            <p className="text-sm font-light">
            This is a summary of the issues found in the smart contract of <span className="font-semibold">PancakeSwap</span> during our intense Audit Process. To see a detailed analysis, view the full Audit PDF.
            </p>
            <div className="relative flex justify-center items-center">
            <div 
            style={{ fontFamily: 'Poppins'}}
            className='flex items-center gap-1 flex-col text-sm absolute text-textColorActive'>
                <p className="text-2xl font-bold">11</p>
                <p>Issues found</p>
            </div>
            <Chart />
            </div>
        </div>
        <div className="flex flex-1 flex-col gap-1 overflow-auto">
        <Title fontSize='18px' text='Issues Summary' />
        <Table />
        </div>
    </div>
  )
}

export default ReportChart