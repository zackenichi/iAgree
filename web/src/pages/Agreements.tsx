import { ReactElement, FC, useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { List as AgreementList } from '../components/List';
import { NoItems } from '../components/UI';
import { Agreement } from '../resources/interfaces/Agreement';
import { AddScreen } from '../components/AddScreen';

const Agreements: FC = (): ReactElement => {
  const [openAdd, setOpenAdd] = useState(false);

  const [list, setList] = useState<Agreement[]>([]);

  // const agreements: Agreement[] = [
  //   {
  //     id: 1,
  //     name: 'Agreement 1',
  //     description: 'This is the first agreement',
  //     status: 'Waiting',
  //     approvals: [
  //       {
  //         id: 1,
  //         name: 'John Doe',
  //         status: true,
  //         updatedAt: new Date(),
  //       },
  //       {
  //         id: 2,
  //         name: 'Jane Doe',
  //         status: false,
  //         updatedAt: new Date(),
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: 'Agreement 2',
  //     description: 'This is the second agreement',
  //     status: 'Approved',
  //     approvals: [
  //       {
  //         id: 1,
  //         name: 'John Doe',
  //         status: true,
  //         updatedAt: new Date(),
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: 'Agreement 3',
  //     description: 'This is the third agreement',
  //     status: 'Rejected',
  //     approvals: [
  //       {
  //         id: 1,
  //         name: 'John Doe',
  //         status: false,
  //         updatedAt: new Date(),
  //       },
  //     ],
  //   },
  // ];

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  // test before moving to redux
  const handleNewAgreement = (agreement: Agreement) => {
    setList([...list, agreement]);
    handleCloseAdd();
  };

  return (
    <>
      <Grid item md={6} xs={12}>
        <Typography variant="h1">Agreements</Typography>
      </Grid>
      <Grid item md={6} xs={12} sx={{ textAlign: { md: 'right', xs: 'left' } }}>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={handleOpenAdd}
        >
          Create
        </Button>
      </Grid>
      <Grid item xs={12}>
        {list.length ? <AgreementList data={list} /> : <NoItems />}
      </Grid>

      <AddScreen
        open={openAdd}
        handleClose={handleCloseAdd}
        // test only
        handleCreate={() =>
          handleNewAgreement({
            id: '1',
            name: 'test',
            description: 'test',
            status: 'test',
            approvals: [],
          })
        }
      />
    </>
  );
};

export default Agreements;
