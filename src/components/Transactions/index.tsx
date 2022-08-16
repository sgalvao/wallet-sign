import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { useWeb3 } from "../../context/web3Context";
import { TransactionDataProps } from "../../types/api";

import * as S from "./styles";

export const Transactions = ({ data }: TransactionDataProps) => {
  const { web3 } = useWeb3();

  return (
    <S.Container>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell size="medium">Txn Hash</TableCell>
              <TableCell size="medium">Block</TableCell>
              <TableCell size="medium">From</TableCell>
              <TableCell size="medium">To</TableCell>
              <TableCell size="medium" align="center">
                Value
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.result.map((row) => (
              <TableRow
                key={row.hash}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <a
                    href={`https://rinkeby.etherscan.io/tx/${row.hash}`}
                    target="_blank"
                  >
                    {row.hash}
                  </a>
                </TableCell>
                <TableCell size="medium">{row.blockNumber}</TableCell>
                <TableCell size="medium">
                  <a
                    href={`https://rinkeby.etherscan.io/address/${row.from}`}
                    target="_blank"
                  >
                    {row.from}
                  </a>
                </TableCell>
                <TableCell size="medium">
                  {row.to && (
                    <a
                      href={`https://rinkeby.etherscan.io/address/${row.to}`}
                      target="_blank"
                    >
                      {row.to}
                    </a>
                  )}
                </TableCell>
                <TableCell size="medium" align="center">
                  {web3?.utils.fromWei(row.value)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </S.Container>
  );
};
