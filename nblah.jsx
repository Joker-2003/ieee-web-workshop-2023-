import React from "react";
import Typography from "@material-ui/core/Typography";
import Header from "components/general/Header/Header";
import { hackathonName } from "constants.js";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';
// import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
// import CallSplitIcon from '@material-ui/icons/CallSplit';
// import MergeTypeIcon from '@material-ui/icons/MergeType';
// import DeleteIcon from '@material-ui/icons/Delete';
import MemoryIcon from '@material-ui/icons/Memory';
import PeopleIcon from '@material-ui/icons/People';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import BrokenImageIcon from '@material-ui/icons/BrokenImage';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff' ,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const AdminDashboard = () => {
    return (
        <>
			<div style = {{width:"100%"}}>
            <Header />
            <Typography variant="h1">{hackathonName} Admin Dashboard</Typography>
            <Typography variant="h2"> Overview </Typography>
            <Box sx={{ flexGrow: 1 }}>
                  <Grid wrap='nowrap' container spacing={2}>
                    <Grid item xs={5}>
                      <Item>
                      <Box display='flex' alignItems='center'>
                        <MemoryIcon/> 123 item's checked out
                      </Box>
                      </Item>
                    </Grid>
                    <Grid item xs={5}>
                      <Item>
                      <Box display='flex' alignItems='center'>
                        <PeopleIcon/> 200 participants
                      </Box>
                      </Item>
                    </Grid>
                    <Grid item xs={5}>
                      <Item>
                      <Box display='flex' alignItems='center'>
                        <AccountBoxIcon/> 14 teams
                      </Box>
                      </Item>
                    </Grid>
                    <Grid item xs={5}>
                      <Item>
                      <Box display='flex' alignItems='center'>
                        <LocalMallIcon/> 123 orders
                      </Box>
                      </Item>
                    </Grid>
                    <Grid item xs={5}>
                      <Item>
                      <Box display='flex' alignItems='center'>
                        <BrokenImageIcon/> 7 broken/lost items
                      </Box>
                      </Item>
                    </Grid>
                  </Grid>
                </Box>
				</div>
        </>
    );
};
export default AdminDashboard;