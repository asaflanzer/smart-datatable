import React, { useState } from 'react'
// components
import FeaturesGrid from './FeaturesGrid';
// hooks
import useQueryFeatures from '../../hooks/useQueryFeatures';
// mui
import { ThemeProvider } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const theme = createMuiTheme({
  overrides: {
      MuiTableCell: {
          root: {
              padding: '2px 4px',
              backgroundColor: "#FFF",
          },
      },
      MuiOutlinedInput:{
        root: {
          "&&& $input": {
            padding: '4px 24px 4px 8px'
          }
        }
      },
      MuiSelect: {
        root: {
          width: 100
        }
      }
  },
});

export default function Features() {
    const [open, setOpen] = useState(false);
    const { loading } = useQueryFeatures();

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    return (
        <Container maxWidth="sm">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >          
          <Grid item xs={12}>
            <Typography variant="h4" style={{marginBottom: 20}}>Team88 / Features</Typography>
            <Button variant="contained" color="primary" onClick={handleOpen}>Show Features</Button>
          </Grid>
        </Grid>
        <Dialog
          fullWidth={true}
          fullScreen={true}
          maxWidth = {'xl'}
          open={open}
          disableEscapeKeyDown={true}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
        <form noValidate autoComplete="off">
          {!loading && (
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                    Cancel
                    </Button>
                    <Button onClick={handleClose} variant="contained" color="primary" disabled={loading}>
                    Save
                    </Button>
                </DialogActions>
          )}
          <DialogContent>
          <ThemeProvider theme={theme}>
            <FeaturesGrid />
            </ThemeProvider>
          </DialogContent>
        </form>

      </Dialog>
          </Container>
    )
}
