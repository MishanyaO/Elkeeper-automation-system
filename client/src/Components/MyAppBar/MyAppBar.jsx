import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import TableBarIcon from '@mui/icons-material/TableBar';
import {
  AppBar,
  Box, IconButton, Toolbar, Typography,
} from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { logoutUser } from '../../redux/slices/userSlice';

export default function MyAppBar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', mb: 15 }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#64451C' }}>
        <Toolbar>

          <Typography variant="h4" sx={{ flexGrow: 1 }} className="header">
            El-keeper
          </Typography>

          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1, display: 'flex', justifyContent: 'start',
            }}
          >
            {user?.name ? `Welcome, ${user?.name}` : 'You are not authorized'}
          </Typography>
          {user?.role === 'admin' ? (
            <>
              <Tooltip title="Staff management" TransitionComponent={Zoom}>
                <IconButton variant="text" color="inherit" onClick={(e) => { e.preventDefault(); navigate('/admin'); }}>
                  <SupervisorAccountIcon fontSize="large" sx={{ mr: 1 }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Hall management" TransitionComponent={Zoom}>
                <IconButton variant="text" color="inherit" onClick={(e) => { e.preventDefault(); navigate('/tables'); }}>
                  <TableBarIcon fontSize="large" sx={{ mr: 1 }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Menu management" TransitionComponent={Zoom}>
                <IconButton variant="text" color="inherit" onClick={(e) => { e.preventDefault(); navigate('/menu'); }}>
                  <MenuBookIcon fontSize="large" sx={{ mr: 1 }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="?" TransitionComponent={Zoom}>
                <IconButton variant="text" color="inherit" onClick={(e) => { e.preventDefault(); navigate('/order'); }}>
                  <QuestionMarkIcon fontSize="large" sx={{ mr: 1 }} />
                </IconButton>
              </Tooltip>
            </>
          )
            : user?.role === 'staff' ? (
              <>
                <Tooltip title="Hall management" TransitionComponent={Zoom}>
                  <IconButton variant="text" color="inherit" onClick={(e) => { e.preventDefault(); navigate('/tables'); }}>
                    <TableBarIcon fontSize="large" sx={{ mr: 2 }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="?" TransitionComponent={Zoom}>
                  <IconButton variant="text" color="inherit" onClick={(e) => { e.preventDefault(); navigate('/order'); }}>
                    <QuestionMarkIcon fontSize="large" sx={{ mr: 1 }} />
                  </IconButton>
                </Tooltip>
              </>
            ) : (
              <>
                <Tooltip title="Sign in" TransitionComponent={Zoom}>
                  <IconButton variant="text" color="inherit" onClick={(e) => { e.preventDefault(); navigate('/login'); }}>
                    <LoginIcon fontSize="large" sx={{ mr: 2 }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Sign up" TransitionComponent={Zoom}>
                  <IconButton variant="text" color="inherit" onClick={(e) => { e.preventDefault(); navigate('/signup'); }}>
                    <HowToRegIcon fontSize="large" sx={{ mr: 2 }} />
                  </IconButton>
                </Tooltip>
              </>
            )}

          {user?.id && (
            <Tooltip title="Log out">
              <IconButton variant="text" color="inherit" onClick={() => { dispatch(logoutUser()); navigate('/'); }}>
                <ExitToAppIcon fontSize="large" sx={{ mr: 2 }} />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
