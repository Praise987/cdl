import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Card,
  CardContent,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import Silverleaf from "../../assets/images/Silverleaf.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ApiIcon from "@mui/icons-material/Api";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import GroupsIcon from "@mui/icons-material/Groups";
import { LineChart } from "@mui/x-charts/LineChart";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";



type RowData = {
  date: string;
  transactionId: number;
  accountName: string;
  amount: number;
  status: string;
};

function createData(
  date: string,
  transactionId: number,
  accountName: string,
  amount: number,
  status: string
): RowData {
  return { date, transactionId, accountName, amount, status };
}

const rows: RowData[] = [
  createData("11 May 2023, 08:05am", 128562323, "Adewale Ade", 150000, "Debit"),
  createData("15 May 2025, 13:05pm", 1243893648, "Silverleaf", 5000, "Credit"),
  createData("28 April 2025, 10:00am", 223344556, "Silverleaf", 4200, "Debit"),
createData("28 April 2025, 9:58am", 223344556, "Adewale Ade", 2500, "Credit"),
];


const settings = {
  height: 100,
  yAxis: { min: 0, max: 20 },
} as const;

const values = [0, 2, 3, 4, 6, 8, 7, 9, 15, 6, 8, 7, 12];


const SidebarItem = ({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: 2,
      px: 2,
      py: 1,
      borderRadius: 2,
      bgcolor: "#fff",
      cursor: "pointer",
      "&:hover": { bgcolor: "#f9fafb" },
    }}
  >
    {icon}
    <Typography sx={{ fontSize: 14, fontWeight:400 }}>
      {label}
    </Typography>
  </Box>
);

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ display: "flex", bgcolor: "#f5f6f8", minHeight: "100vh" }}>
     
      <Box sx={{ width: 270, bgcolor: "#fff", p: 3, borderRight: "1px solid #eee" }}>
        <Box component="img" src={Silverleaf} sx={{ width: 120, mb: 4 }} />

        <Stack spacing={1}>
          <SidebarItem icon={<HomeIcon />} label="Overview" active />
          <SidebarItem icon={<AccountBalanceWalletIcon />} label="Wallet" />
          <SidebarItem icon={<ApiIcon />} label="API" />
          <SidebarItem icon={<Diversity2Icon />} label="Transactions" />
          <SidebarItem icon={<GroupsIcon />} label="Team Management" />
        </Stack>

        <Typography variant="h6" fontWeight={600} sx={{ mt: 60, textAlign: "center" }} 
        >Need Support?</Typography>
              <Typography color="primary" sx={{ cursor: "pointer", textAlign: "center" }}>
                Contact one of our experts to get support
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button variant="outlined" size="small" sx={{ objectFit: "cover", left: "85px",  }}>
                  Get Help
                </Button>
              </Stack>

      </Box>
      
     
      <Box sx={{ flex: 1, p: 4 }}>
       
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h5" fontWeight={700}>
              Overview
            </Typography>
            <Typography color="text.secondary">
              Welcome back, Adewale!
            </Typography>
          </Box>

          <Stack direction="row" spacing={2}>
            <IconButton><SearchIcon /></IconButton>
            <IconButton><NotificationsNoneIcon /></IconButton>
          </Stack>
        </Box>

      
        <Box sx={{ mt: 4, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 3 }}>
          <Card sx={{ bgcolor: "#1e2a38", color: "#fff" }}>
            <CardContent>
              <Typography>Wallet Balance</Typography>
              <Typography sx={{ fontSize: 32, fontWeight: 700 }}>
                ₦23,250,000
              </Typography>
              <Button sx={{ mt: 2, bgcolor: "#fff", color: "#1e2a38" }}>
                Fund Wallet
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography>API Usage</Typography>
              <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
                1280
              </Typography>
              <SparkLineChart data={values} {...settings} />
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography>Success Rate</Typography>
              <Typography sx={{ fontSize: 30, fontWeight: 600 }}>
                99%
              </Typography>
              <SparkLineChart data={values} {...settings} />
            </CardContent>
          </Card>
        </Box>

        
        <Paper sx={{ mt: 4, p: 3 }}>
          <Typography fontWeight={600}>API Usage Trend</Typography>

          <LineChart
            xAxis={[{ data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], scaleType: "point" }]}
            series={[{ data: [200, 400, 200, 850, 150, 500], label: "API Usage" }]}
            height={250}
          />
        </Paper>

       
        <TableContainer component={Paper} sx={{ mt: 3 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Transaction ID</TableCell>
                <TableCell>Account</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.transactionId}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.transactionId}</TableCell>
                  <TableCell>{row.accountName}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;